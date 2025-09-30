import { useEffect } from 'react'

interface ImagePreloaderProps {
  images: Array<{
    src: string
    webpSrc?: string
    priority?: boolean
  }>
}

export default function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    const preloadImages = images
      .filter(img => img.priority)
      .map(img => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = img.webpSrc || img.src
        
        if (img.webpSrc) {
          link.type = 'image/webp'
        }
        
        return link
      })

    // Adicionar links de preload ao head
    preloadImages.forEach(link => {
      document.head.appendChild(link)
    })

    // Cleanup
    return () => {
      preloadImages.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link)
        }
      })
    }
  }, [images])

  return null
}

// Hook para gerenciar preload de imagens
export function useImagePreload(images: Array<{ src: string; webpSrc?: string; priority?: boolean }>) {
  useEffect(() => {
    const preloadPromises = images
      .filter(img => img.priority)
      .map(imageData => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = reject
          img.src = imageData.webpSrc || imageData.src
        })
      })

    Promise.all(preloadPromises)
      .then(() => {
        console.log('Imagens prioritárias carregadas')
      })
      .catch((error) => {
        console.warn('Erro ao carregar imagens prioritárias:', error)
      })
  }, [images])
}
