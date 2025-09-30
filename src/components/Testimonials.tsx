import { useState, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Engenheira de Segurança",
    company: "TechCorp",
    content: "O treinamento transformou completamente minha abordagem em segurança do trabalho. As estratégias práticas me ajudaram a conquistar uma promoção e me tornar referência na empresa. Recomendo para todos os profissionais da área!",
    rating: 5
  },
  {
    id: 2,
    name: "João Santos",
    role: "Técnico em Segurança",
    company: "Indústria ABC",
    content: "Excelente metodologia! Aprendi técnicas que me permitiram implementar melhorias significativas na segurança da nossa planta industrial. Em 6 meses, reduzi os acidentes em 40% e ganhei reconhecimento da diretoria.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Coordenadora de SMS",
    company: "Construtora XYZ",
    content: "As ferramentas e estratégias ensinadas são revolucionárias. Consegui implementar um sistema de gestão que aumentou a produtividade da equipe em 35% mantendo os mais altos padrões de segurança. Vale cada investimento!",
    rating: 5
  },
  {
    id: 4,
    name: "Carlos Mendes",
    role: "Supervisor de Segurança",
    company: "Mineração Global",
    content: "Profissional excepcional! O conhecimento compartilhado me ajudou a desenvolver uma visão estratégica que resultou em economia de R$ 2 milhões em custos de acidentes no primeiro ano. Incomparável!",
    rating: 5
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "Consultora em SST",
    company: "Consultoria Pro",
    content: "A abordagem prática e inovadora me diferenciou no mercado. Consegui expandir minha carteira de clientes em 60% e aumentar meus honorários. Um investimento que se paga rapidamente!",
    rating: 5
  },
  {
    id: 6,
    name: "Roberto Alves",
    role: "Gerente de Segurança",
    company: "Petroquímica Brasil",
    content: "Metodologia única que combina teoria e prática de forma excepcional. Implementei as estratégias e consegui reduzir custos operacionais em 25% mantendo zero acidentes. Recomendo sem hesitação!",
    rating: 5
  }
]

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    const autoplay = api.plugins()?.autoplay
    if (!autoplay) return

    // Iniciar autoplay após 3 segundos
    const timer = setTimeout(() => {
      autoplay.play()
    }, 3000)

    return () => clearTimeout(timer)
  }, [api])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-secondary" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ))
  }

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Depoimentos
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              alunos
            </span>{" "}
            dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja como nossos treinamentos transformaram a carreira de profissionais 
            em todo o Brasil, aumentando produtividade e conquistando promoções.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Content */}
                      <blockquote className="text-gray-700 mb-6 flex-grow leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="border-t border-gray-100 pt-6">
                        <div className="flex items-center space-x-4">
                          {/* Avatar */}
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          
                          {/* Info */}
                          <div>
                            <div className="font-semibold text-primary">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {testimonial.role}
                            </div>
                            <div className="text-sm text-secondary font-medium">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation */}
            <CarouselPrevious className="hidden md:flex -left-12 bg-white border-gray-200 hover:bg-gray-50 text-primary hover:text-secondary shadow-lg" />
            <CarouselNext className="hidden md:flex -right-12 bg-white border-gray-200 hover:bg-gray-50 text-primary hover:text-secondary shadow-lg" />
          </Carousel>

          {/* Mobile navigation dots */}
          <div className="flex justify-center mt-8 md:hidden">
            <div className="flex space-x-2">
              {testimonials.slice(0, 3).map((_, index) => (
                <button
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300 hover:bg-secondary transition-colors"
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}