import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Shield, Smartphone, BookOpen, ArrowRightIcon } from "lucide-react";
import ebookImage from "../assets/ebook.png";
import ebookImageWebP from "/optimized/ebook.webp";
import OptimizedImage from "./ui/optimized-image";

export default function EBook() {
  return (
    <section
      id="ebook"
      className="w-full py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            E-Book Exclusivo
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Alta Performance em SST:
            </span>
            <br />O Guia Definitivo para Profissionais que querem crescer na
            carreira
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubra como aumentar sua produtividade e conquistar promoções.
            Torne-se uma referência na área e conquiste novas oportunidades.
            Aprenda estratégias práticas para acelerar seu crescimento
            profissional e conquistar reconhecimento.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="grid lg:grid-cols-2 items-center mb-16">
          {/* Imagem do ebook */}
          <div className="flex justify-center lg:justify-start">
            <Card className="bg-white p-0 shadow-2xl border-0 overflow-hidden ">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-auto h-[40rem] bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <OptimizedImage
                      src={ebookImage}
                      webpSrc={ebookImageWebP}
                      alt="Capa do E-book Alta Performance em SST"
                      className="w-full h-full object-cover"
                      width={400}
                      height={640}
                      lazy={true}
                    />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-secondary text-primary font-bold">
                    NOVO
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1 mt-8 md:mt-0">
            {/* Seção do autor */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-primary text-center md:text-left">
                Matheus Corrêa
              </h4>
              <p className="text-gray-600 leading-relaxed text-center md:text-left">
                Sou profissional formado em Segurança do Trabalho com ampla experiência em consultoria, treinamentos, auditorias in loco, liderança e gestão de equipes. Atuante predominante nos ramos Hospitalar e Tecnológico, adquiri vasto conhecimento em Meio ambiente, Proteção Radiológica, Construção Civil, Auditoria, Certificação e entre outros.
              </p>
              <p className="text-gray-600 leading-relaxed text-center md:text-left">
                Hoje atuo diretamente no ramo tecnológico como Especialista SR em SST, com gestão de equipe, validação de documentos, auditorias in loco nos clientes, conformidade e potencialização de terceiros.
              </p>
            </div>

            {/* Informações do produto */}
            <div className="space-y-8 mt-8 md:mt-0">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 text-center md:text-left">
                  Com o guia definitivo para profissionais que querem crescer na
                  carreira em Saúde e Segurança do Trabalho
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
                  Descubra como aumentar sua produtividade, ser reconhecido e alcançar promoções. Aprenda estratégias práticas para se tornar referência na área e conquistar novas oportunidades. Adquira o guia agora e acelere seu crescimento profissional.
                </p>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-4 text-center md:text-left">
              <Button
                className="group relative bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden focus:ring-2 focus:ring-primary/50 focus:outline-none w-full max-w-md"
                size="lg"
                variant="secondary"
                aria-label="Comprar ebook"
                onClick={() => window.open('https://pay.hotmart.com/K101954512X?off=sypsgews&hotfeature=51&_hi=eyJjaWQiOiIxNzM3OTc5NDI3MzY2MjAxNTgyMDUxMTY0Nzc5NDYwIiwiYmlkIjoiMTczNzk3OTQyNzM2NjIwMTU4MjA1MTE2NDc3OTQ2MCIsInNpZCI6IjZlNjQwNzdlZDI3MzRhNTY5NTQyYmNhZDU5YjIzZmExIn0=.1759241394129&bid=1759241398071', '_blank')}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Quero Comprar
                  <ArrowRightIcon
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Seções de Garantia e Preço */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Card de Garantia */}
          <Card className="bg-gradient-to-br from-muted/20 to-muted/10 border-muted/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                G A R A N T I A
              </h3>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Garantia incondicional de 7 dias
              </h4>
              <p className="text-gray-600 mb-4">
                Seu dinheiro de volta sem perguntas até 7 dias após a compra.
              </p>
              <div className="flex justify-center items-center gap-2 text-muted-foreground">
                <Smartphone className="w-5 h-5" />
                <span>Aproveite o conteúdo em qualquer dispositivo.</span>
              </div>
            </CardContent>
          </Card>

          {/* Card de Preço */}
          <Card className="bg-gradient-to-br from-primary to-secondary border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center text-white">
              <h3 className="text-lg font-bold mb-3">POR APENAS</h3>
              <div className="text-4xl font-bold mb-2">R$ 9,90</div>
              <p className="text-base mb-4">Parcelado em até 2 vezes</p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs"
                onClick={() => window.open('https://pay.hotmart.com/K101954512X?off=sypsgews&hotfeature=51&_hi=eyJjaWQiOiIxNzM3OTc5NDI3MzY2MjAxNTgyMDUxMTY0Nzc5NDYwIiwiYmlkIjoiMTczNzk3OTQyNzM2NjIwMTU4MjA1MTE2NDc3OTQ2MCIsInNpZCI6IjZlNjQwNzdlZDI3MzRhNTY5NTQyYmNhZDU5YjIzZmExIn0=.1759241394129&bid=1759241398071', '_blank')}
              >
                COMPRAR AGORA
              </Button>
              <p className="text-sm mt-4 opacity-90">
                PAGAMENTO 100% SEGURO COM ACESSO IMEDIATO
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              PERGUNTAS FREQUENTES
            </h3>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Para quem é esse produto?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                É para quem já atua ou está entrando na área de SST e deseja se
                diferenciar no mercado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Como funciona o 'Prazo de Garantia'?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                O Prazo de Garantia é o período que você tem para pedir o
                reembolso integral do valor pago pela sua compra, caso o produto
                não seja satisfatório.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg">
                O que esperar desse ebook?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <ul className="space-y-2">
                  <li>
                    • Técnicas práticas para aumentar sua produtividade no dia a
                    dia da SST;
                  </li>
                  <li>
                    • Métodos de gestão de tempo aplicados à rotina de um
                    Técnico de Segurança;
                  </li>
                  <li>
                    • Estratégias para desenvolver senso crítico e domínio
                    técnico;
                  </li>
                  <li>
                    • Dicas para crescimento na carreira e conquistar
                    reconhecimento;
                  </li>
                  <li>
                    • Conteúdo objetivo, sem enrolação, pronto para aplicar no
                    trabalho.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Como acessar o produto?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                <p className="mb-4">
                  Você receberá o acesso por email. O conteúdo será acessado ou
                  baixado através de um computador, celular, tablet ou outro
                  dispositivo digital. Você também pode acessar o produto
                  comprado nesta página:
                </p>
                <ol className="space-y-2">
                  <li>1. Faça login na Hotmart clicando em 'Entrar'</li>
                  <li>2. Acesse o menu lateral, clique em 'Minha conta'</li>
                  <li>
                    3. Clique em 'Minhas compras' e lá estarão todos os produtos
                    que você já comprou!
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Como faço para comprar?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Para comprar este ebook, clique no botão "Comprar agora".
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
