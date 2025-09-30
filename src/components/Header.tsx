import Logotipo from "../assets/logotipo.jpg";
import LogotipoWebP from "/optimized/logotipo.webp";
import { 
  MailIcon, 
  InstagramIcon, 
  MenuIcon,
  PhoneIcon,
  MapPinIcon
} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import OptimizedImage from "./ui/optimized-image";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      {/* Barra superior com informações de contato - oculta no mobile */}
      <div className="hidden md:block bg-primary border-b border-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-2 md:mb-0">
              <span className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4" />
                <span>(21) 99999-9999</span>
              </span>
              <span className="flex items-center gap-2">
                <MailIcon className="w-4 h-4" />
                <span>saudesegurancatap@gmail.com</span>
              </span>
              <span className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" />
                <span>Rio de Janeiro - RJ</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/altaperformancesst/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary rounded-md p-2"
              >
                <InstagramIcon className="w-4 h-4" />
                <span className="hidden sm:inline">@altaperformancesst</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <div className="container mx-auto p-2">
        <div className="flex justify-between items-center">
          {/* Logo e nome da empresa */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm overflow-hidden shadow-md">
              <OptimizedImage
                src={Logotipo}
                webpSrc={LogotipoWebP}
                alt="Alta Performance SST"
                className="w-full h-full object-cover"
                width={40}
                height={40}
                priority={true}
                lazy={false}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-1xl font-bold text-gray-900">Alta Performance</h1>
              <p className="text-sm text-gray-600 font-medium">Saúde e Segurança do Trabalho</p>
            </div>
          </div>

          {/* Menu desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('dicas')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Dicas Práticas
            </button>
            <button 
              onClick={() => scrollToSection('nrs')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              NRs
            </button>
            <button 
              onClick={() => scrollToSection('ebook')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              E-book
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contato')}
               className="group relative bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden focus:ring-2 focus:ring-primary/50 focus:outline-none"
            >
              Solicitar Proposta
            </Button>
          </div>

          {/* Menu mobile usando Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <MenuIcon className="w-6 h-6 text-gray-700" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-4/5 sm:w-96 h-full">
              <div className="flex flex-col h-full">
                {/* Logo no menu mobile */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-sm overflow-hidden shadow-md">
                    <OptimizedImage
                      src={Logotipo}
                      webpSrc={LogotipoWebP}
                      alt="Alta Performance SST"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                      priority={true}
                      lazy={false}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-lg font-bold text-gray-900">Alta Performance</h1>
                    <p className="text-sm text-gray-600 font-medium">Saúde e Segurança do Trabalho</p>
                  </div>
                </div>

                {/* Menu de navegação */}
                <nav className="flex flex-col gap-2 flex-1">
                  <button 
                    onClick={() => scrollToSection('inicio')}
                    className="text-left text-gray-700 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Início
                  </button>
                  <button 
                    onClick={() => scrollToSection('dicas')}
                    className="text-left text-gray-700 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Dicas
                  </button>
                  <button 
                    onClick={() => scrollToSection('nrs')}
                    className="text-left text-gray-700 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    NRs
                  </button>
                  <button 
                    onClick={() => scrollToSection('ebook')}
                    className="text-left text-gray-700 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    E-book
                  </button>
                  <button 
                    onClick={() => scrollToSection('depoimentos')}
                    className="text-left text-gray-700 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Depoimentos
                  </button>
                  <button 
                    onClick={() => scrollToSection('contato')}
                    className="text-left text-gray-700 hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Contato
                  </button>
                </nav>

                {/* CTA Button no final */}
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <Button 
                    onClick={() => scrollToSection('contato')}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-200"
                  >
                    Solicitar Proposta
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
