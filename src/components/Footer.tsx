import LogotipoWhite from "../assets/logotipo-white.png";
import LogotipoWhiteWebP from "/optimized/logotipo-white.webp";
import { 
  MailIcon, 
  PhoneIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  MessageCircleIcon,
  BookOpen
} from "lucide-react";
import { Button } from "./ui/button";
import OptimizedImage from "./ui/optimized-image";
import OptimizedBackground from "./ui/optimized-background";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <OptimizedBackground
      src="/optimized/banner-footer.webp"
      className="relative bg-cover bg-center bg-no-repeat"
      priority={false}
    >
      {/* Overlay com degradê */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95"></div>
      
      {/* Conteúdo do footer */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Coluna 1: Logo e descrição */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-sm overflow-hidden shadow-lg">
                  <OptimizedImage
                    src={LogotipoWhite}
                    webpSrc={LogotipoWhiteWebP}
                    alt="Alta Performance SST"
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                    lazy={true}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white">Alta Performance</h3>
                  <p className="text-sm text-white/90 font-medium">Saúde e Segurança do Trabalho</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Especialistas em soluções completas de SST, oferecendo consultoria, 
                treinamentos e implementação de programas de segurança para empresas 
                de todos os portes.
              </p>
            </div>

            {/* Coluna 2: Links de navegação */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Navegação</h4>
              <nav className="flex flex-col gap-3">
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('dicas')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Dicas Práticas
                </button>
                <button 
                  onClick={() => scrollToSection('nrs')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  NRs
                </button>
                <button 
                  onClick={() => scrollToSection('ebook')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  E-book
                </button>
                <button 
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Depoimentos
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Contato
                </button>
              </nav>
            </div>

            {/* Coluna 3: Redes sociais e e-book */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Redes Sociais</h4>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://www.instagram.com/altaperformancesst/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5" />
                    <span>@altaperformancesst</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <FacebookIcon className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <h5 className="text-white font-medium mb-3">E-book</h5>
                  <Button 
                    onClick={() => scrollToSection('ebook')}
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 transition-all duration-200"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Compre seu E-book agora
                  </Button>
                </div>
              </div>
            </div>

            {/* Coluna 4: Contato */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Contato</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <PhoneIcon className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/80 text-sm">Telefone</p>
                    <a 
                      href="tel:+5521999999999" 
                      className="text-white hover:text-white/80 transition-colors font-medium"
                    >
                      (21) 99999-9999
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MailIcon className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/80 text-sm">E-mail</p>
                    <a 
                      href="mailto:saudesegurancatap@gmail.com" 
                      className="text-white hover:text-white/80 transition-colors font-medium text-sm break-all"
                    >
                      saudesegurancatap@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/80 text-sm">Localização</p>
                    <p className="text-white font-medium">Rio de Janeiro - RJ</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <a 
                    href="https://wa.me/5521999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <MessageCircleIcon className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © {new Date().getFullYear()} Alta Performance SST. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OptimizedBackground>
  )
}