import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedBackgroundProps {
  src: string
  webpSrc?: string
  className?: string
  children?: React.ReactNode
  priority?: boolean
  sizes?: string
}

export default function OptimizedBackground({
  src,
  webpSrc,
  className,
  children,
  priority = false,
  sizes: _sizes = '100vw'
}: OptimizedBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (priority) {
      // Preload para imagens prioritárias
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = webpSrc || src
      if (webpSrc) {
        link.type = 'image/webp'
      }
      document.head.appendChild(link)

      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link)
        }
      }
    }
  }, [priority, src, webpSrc])

  useEffect(() => {
    // Simular carregamento da imagem de fundo
    const imageUrl = webpSrc || src
    const img = new Image()
    
    img.onload = () => setIsLoaded(true)
    img.onerror = () => setHasError(true)
    img.src = imageUrl

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src, webpSrc])

  const backgroundStyle = {
    backgroundImage: `url(${webpSrc || src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        className
      )}
      style={backgroundStyle}
    >
      {/* Placeholder enquanto carrega */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Conteúdo */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
