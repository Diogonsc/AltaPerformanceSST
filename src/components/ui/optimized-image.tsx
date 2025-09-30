import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  webpSrc?: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  lazy?: boolean
  placeholder?: string
  sizes?: string
  quality?: number
  onLoad?: () => void
  onError?: () => void
}

export default function OptimizedImage({
  src,
  webpSrc,
  alt,
  className,
  width,
  height,
  priority = false,
  lazy = true,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=',
  sizes = '100vw',
  quality = 85,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(!lazy || priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!lazy || priority) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    )

    observerRef.current = observer

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [lazy, priority])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  // Carregar imagem em background para detectar quando está pronta
  useEffect(() => {
    if (!isInView) return

    const imageUrl = webpSrc || src
    const img = new Image()
    
    img.onload = handleLoad
    img.onerror = handleError
    img.src = imageUrl

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [isInView, src, webpSrc, onLoad, onError])

  // Remover imageProps já que não usamos mais tag img

  if (hasError) {
    return (
      <div
        ref={imgRef}
        className={cn(
          'bg-gray-200 flex items-center justify-center text-gray-500 text-sm',
          className
        )}
        style={{ width, height }}
      >
        Erro ao carregar imagem
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className={cn(
            'absolute inset-0 bg-gray-200 animate-pulse',
            className
          )}
          style={{ width, height }}
        >
          {/* Placeholder usando div com background */}
          <div
            className="w-full h-full bg-gray-200"
            style={{
              backgroundImage: `url(${placeholder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            aria-hidden="true"
          />
        </div>
      )}

      {/* Imagem otimizada */}
      {isInView && (
        <div
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          style={{
            backgroundImage: `url(${webpSrc || src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: width || '100%',
            height: height || 'auto'
          }}
          onLoad={handleLoad}
          onError={handleError}
          aria-label={alt}
          role="img"
        />
      )}
    </div>
  )
}
