import * as React from "react"
import { FaArrowUp } from "react-icons/fa"
import { cn } from "@/lib/utils"

interface BackToTopProps {
  className?: string
  threshold?: number
}

const BackToTop = React.forwardRef<HTMLButtonElement, BackToTopProps>(
  ({ className, threshold = 300, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > threshold) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }

      window.addEventListener("scroll", toggleVisibility)
      return () => window.removeEventListener("scroll", toggleVisibility)
    }, [threshold])

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    if (!isVisible) return null

    return (
      <button
        ref={ref}
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-32 right-6 z-50 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 w-12",
          className
        )}
        aria-label="Voltar ao topo"
        {...props}
      >
        <FaArrowUp className="h-6 w-6" />
      </button>
    )
  }
)

BackToTop.displayName = "BackToTop"

export { BackToTop } 