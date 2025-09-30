import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { 
  Shield, 
  HardHat, 
  AlertTriangle, 
  Users, 
  CheckCircle, 
  ArrowRightIcon,
  TargetIcon
} from "lucide-react"

export default function NRs() {
  return (
    <section 
      id="nrs"
      className="relative w-full bg-gradient-to-br from-slate-50 via-white to-primary/5 py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Norma Regulamentadora
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            NR 06 -{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Equipamento de Proteção Individual
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Norma Regulamentadora que estabelece as diretrizes para o uso correto 
            dos Equipamentos de Proteção Individual (EPIs) no ambiente de trabalho
          </p>
        </div>

        {/* Grid de informações principais */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 px-4">
          {/* Finalidade dos EPIs */}
          <Card className="group relative bg-white/80 backdrop-blur-sm hover:bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            
            <CardHeader className="relative text-center pb-4 pt-4">
              <div className="w-15 h-15 bg-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <HardHat className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                Finalidade dos EPIs
              </CardTitle>
            </CardHeader>
            <CardContent className="relative pt-0 pb-4">
              <p className="text-gray-600 text-center leading-relaxed text-lg">
                Os Equipamentos de Proteção Individual são destinados à proteção de riscos 
                suscetíveis de ameaçar a segurança e a saúde do trabalhador, fornecendo uma 
                barreira física entre o colaborador e os perigos presentes no ambiente laboral.
              </p>
            </CardContent>
          </Card>

          {/* Benefícios do Uso Correto */}
          <Card className="group relative bg-white/80 backdrop-blur-sm hover:bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            
            <CardHeader className="relative text-center pb-4 pt-4">
              <div className="w-15 h-15 bg-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <CheckCircle className="w-10 h-10 text-secondary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-secondary transition-colors duration-300">
                Benefícios do Uso Correto
              </CardTitle>
            </CardHeader>
            <CardContent className="relative pt-0 pb-4">
              <p className="text-gray-600 text-center leading-relaxed text-lg mb-4">
                <span className="font-semibold text-primary">
                  Usados corretamente, os EPIs evitam acidentes, lesões, afastamentos e até a morte.
                </span>
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="secondary" className="bg-secondary/10 text-primary border-secondary/20">
                  Redução de Acidentes
                </Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-primary border-secondary/20">
                  Proteção Eficaz
                </Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-primary border-secondary/20">
                  Menor Absenteísmo
                </Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-primary border-secondary/20">
                  Segurança Garantida
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção de conscientização */}
        <div className="mb-16 px-4">
          <Card className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 border-0 shadow-xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center border border-secondary gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <AlertTriangle className="w-4 h-4" />
                  Você sabia?
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  O uso correto dos EPIs pode evitar acidentes, afastamentos e até{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    salvar vidas
                  </span>
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A NR 06 garante que seus colaboradores estejam protegidos contra riscos no ambiente de trabalho.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    Investir em treinamentos de NR 06 é investir em:
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Mais segurança no dia a dia</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Redução de acidentes e multas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Cumprimento da legislação</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Colaboradores mais confiantes e produtivos</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl">
                    <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h5 className="text-lg font-bold text-gray-900 mb-3">
                      Não deixe a segurança da sua equipe para depois!
                    </h5>
                    <p className="text-gray-600 mb-6">
                      Entre em contato e saiba como podemos ajudar sua empresa a se manter em conformidade 
                      com a lei e garantir ambientes de trabalho mais seguros.
                    </p>
                    <Button
                className="group relative bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden focus:ring-2 focus:ring-primary/50 focus:outline-none w-full max-w-md"
                size="lg"
                variant="secondary"
                aria-label="Entre em contato"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Entre em Contato
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
            </CardContent>
          </Card>
        </div>

        {/* Seção de contato */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center border border-secondary gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TargetIcon className="w-4 h-4" />
            Entre em contato
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Pronto para investir na segurança da sua equipe?</h4>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium">E-mail:</span>
              <span className="text-secondary font-semibold">saudesegurancatap@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2">
                @saudesegurancatap
              </Badge>
              <Badge className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2">
                @altaperformancesst
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action com banner - Fora do container limitado */}
      <div className="w-full mt-16">
        <div className="relative w-full overflow-hidden min-h-[500px] flex items-center justify-center">
          {/* Imagem de fundo */}
          <img
            src="/optimized/banner02.webp"
            alt="Banner de treinamento NR 06"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Gradiente overlay com tonalidade primary */}
          <div className="absolute inset-0 bg-primary/80" />
          
          <div className="relative text-center z-10 max-w-4xl mx-auto p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-white/20 p-3 rounded-full">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Invista em Treinamento de NR 06 para seus Colaboradores!
              </h3>
            </div>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Capacite sua equipe com conhecimento técnico e prático sobre o uso correto 
              dos EPIs, garantindo maior segurança e produtividade no ambiente de trabalho.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Badge variant="outline" className="bg-white/10 border-white/30 text-white px-4 py-2">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Treinamento Especializado
              </Badge>
              <Badge variant="outline" className="bg-white/10 border-white/30 text-white px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Certificação Profissional
              </Badge>
            </div>

            <Button
                className="group relative bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden focus:ring-2 focus:ring-primary/50 focus:outline-none w-full max-w-md"
                size="lg"
                variant="secondary"
                aria-label="Solicitar treinamento de NR 06"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                 Solicitar Treinamento
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
    </section>
  )
}