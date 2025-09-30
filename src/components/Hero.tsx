import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Shield } from "lucide-react"
import profileImage from "../assets/profile.png"
import profileImageWebP from "/optimized/profile.webp"
import OptimizedImage from "./ui/optimized-image"

export default function Hero() {
  return (
    <section id="inicio" className="w-full min-h-[calc(100vh-6rem)] bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center justify-center py-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Conteúdo de texto */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Descubra como aumentar sua{" "}
              <span className="text-secondary">produtividade</span> e conquistar{" "}
              <span className="text-secondary">promoções</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Torne-se uma referência na área e conquiste novas oportunidades. 
              Aprenda estratégias práticas para acelerar seu crescimento profissional 
              e conquistar reconhecimento.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Começar Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Indicadores de confiança */}
          {/* <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">500+</div>
              <div className="text-white/80 text-sm">Profissionais Transformados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">95%</div>
              <div className="text-white/80 text-sm">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">5+</div>
              <div className="text-white/80 text-sm">Anos de Experiência</div>
            </div>
          </div> */}
        </div>

        {/* Imagem de perfil */}
        <div className="flex justify-center lg:justify-end">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl overflow-hidden py-0">
            <CardContent className="p-0">
              <div className="relative">
                <OptimizedImage
                  src={profileImage}
                  webpSrc={profileImageWebP}
                  alt="Especialista em Alta Performance"
                  className="w-full max-w-md h-auto object-cover"
                  width={400}
                  height={600}
                  priority={true}
                  lazy={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                
                {/* Badge de especialista */}
                <div className="absolute bottom-0 left-0 right-0 bg-secondary text-primary px-4 py-3 font-bold text-sm shadow-lg text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Especialista em SST | Auditor</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"></div>
      </div>
    </section>
  )
}