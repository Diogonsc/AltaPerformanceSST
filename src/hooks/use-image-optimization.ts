import { useState, useEffect, useCallback } from 'react'

interface UseImageOptimizationOptions {
  priority?: boolean
  lazy?: boolean
  quality?: number
  sizes?: string
}

interface ImageOptimizationState {
  isLoaded: boolean
  isInView: boolean
  hasError: boolean
  src: string
  webpSrc?: string
}

export function useImageOptimization(
  originalSrc: string,
  webpSrc?: string,
  options: UseImageOptimizationOptions = {}
) {
  const {
    priority = false,
    lazy = true,
    quality: _quality = 85,
    sizes: _sizes = '100vw'
  } = options

  const [state, setState] = useState<ImageOptimizationState>({
    isLoaded: false,
    isInView: !lazy || priority,
    hasError: false,
    src: originalSrc,
    webpSrc
  })

  const handleLoad = useCallback(() => {
    setState(prev => ({ ...prev, isLoaded: true }))
  }, [])

  const handleError = useCallback(() => {
    setState(prev => ({ ...prev, hasError: true }))
  }, [])

  const setInView = useCallback((inView: boolean) => {
    setState(prev => ({ ...prev, isInView: inView }))
  }, [])

  // Preload para imagens prioritárias
  useEffect(() => {
    if (priority && !state.isLoaded) {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = webpSrc || originalSrc
      if (webpSrc) {
        link.type = 'image/webp'
      }
      document.head.appendChild(link)

      return () => {
        document.head.removeChild(link)
      }
    }
  }, [priority, originalSrc, webpSrc, state.isLoaded])

  return {
    ...state,
    handleLoad,
    handleError,
    setInView
  }
}

// Hook para otimizar múltiplas imagens
export function useBatchImageOptimization(
  _images: Array<{ src: string; webpSrc?: string; priority?: boolean }>
) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set())

  const handleImageLoad = useCallback((src: string) => {
    setLoadedImages(prev => new Set([...prev, src]))
  }, [])

  const handleImageError = useCallback((src: string) => {
    setErrorImages(prev => new Set([...prev, src]))
  }, [])

  const isImageLoaded = useCallback((src: string) => {
    return loadedImages.has(src)
  }, [loadedImages])

  const hasImageError = useCallback((src: string) => {
    return errorImages.has(src)
  }, [errorImages])

  return {
    loadedImages: Array.from(loadedImages),
    errorImages: Array.from(errorImages),
    handleImageLoad,
    handleImageError,
    isImageLoaded,
    hasImageError
  }
}
