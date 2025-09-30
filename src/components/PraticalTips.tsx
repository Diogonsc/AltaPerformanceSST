import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  CalendarIcon,
  BookOpenIcon,
  MessageSquareIcon,
  BarChart3Icon,
  ZapIcon,
  ClockIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "lucide-react";
import OptimizedBackground from "./ui/optimized-background";

export default function PraticalTips() {
  const cards = [
    {
      id: 1,
      title: "Planejamento Estratégico",
      description:
        "Domine técnicas de planejamento estratégico e operacional. Aprenda a criar cronogramas eficientes, definir metas claras e organizar atividades para máxima produtividade em SST.",
      icon: CalendarIcon,
    },
    {
      id: 2,
      title: "Conhecimento Técnico",
      description:
        "Aprofunde seu domínio das NRs, legislações e normas técnicas. Mantenha-se atualizado com as mudanças regulamentares e torne-se referência técnica na sua área de atuação.",
      icon: BookOpenIcon,
    },
    {
      id: 3,
      title: "Comunicação Eficaz",
      description:
        "Desenvolva habilidades de comunicação clara e persuasiva. Aprenda a apresentar ideias, conduzir reuniões e influenciar positivamente a cultura de segurança na organização.",
      icon: MessageSquareIcon,
    },
    {
      id: 4,
      title: "Relatórios e Indicadores",
      description:
        "Domine a criação de relatórios técnicos e indicadores de performance. Aprenda a transformar dados em insights valiosos para tomada de decisão e melhoria contínua.",
      icon: BarChart3Icon,
    },
    {
      id: 5,
      title: "Proatividade",
      description:
        "Desenvolva uma mentalidade proativa e antecipatória. Aprenda a identificar oportunidades de melhoria, propor soluções inovadoras e se destacar como agente de mudança.",
      icon: ZapIcon,
    },
    {
      id: 6,
      title: "Gestão do Tempo",
      description:
        "Otimize sua produtividade com técnicas eficazes de gestão do tempo. Aprenda a priorizar tarefas, eliminar desperdícios e maximizar resultados em menos tempo.",
      icon: ClockIcon,
    },
  ];

  return (
    <section
      id="dicas"
      className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <SparklesIcon className="w-4 h-4" />
            Estratégias Comprovadas
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Dicas Práticas para{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Alta Performance
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estratégias comprovadas para acelerar seu crescimento profissional e
            se destacar na área de Saúde e Segurança do Trabalho
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              className="group relative bg-white/80 backdrop-blur-sm hover:bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 focus-within:outline-none"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              role="article"
              aria-labelledby={`card-title-${card.id}`}
              tabIndex={0}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Primary color accent */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

              <CardHeader className="relative text-center pb-4 pt-4">
                <div className="w-15 h-15 bg-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                  <card.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle
                  id={`card-title-${card.id}`}
                  className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300"
                >
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative pt-0 pb-4">
                <CardDescription className="text-gray-600 text-center leading-relaxed text-base">
                  {card.description}
                </CardDescription>
              </CardContent>
              <div className="flex justify-center px-6">
                <Button variant="outline" size="lg" className="w-full uppercase">
                  Saiba mais
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
        {/* Call to action */}
        <div className="w-full">
          <OptimizedBackground
            src="/optimized/banner01.webp"
            className="relative p-8 md:p-12 w-full overflow-hidden min-h-[500px] flex items-center justify-center"
            priority={false}
          >
            {/* Gradiente overlay com tonalidade primary */}
            <div className="absolute inset-0 bg-primary/70" />
            
            <div className="relative text-center z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pronto para implementar essas estratégias na sua carreira?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Transforme seu conhecimento em resultados práticos e acelere seu
                crescimento profissional
              </p>
              <Button
                className="group relative bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden focus:ring-2 focus:ring-primary/50 focus:outline-none w-full max-w-md"
                size="lg"
                variant="secondary"
                aria-label="Aprender mais sobre estratégias de alta performance em SST"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Quero Aprender Mais
                  <ArrowRightIcon
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </OptimizedBackground>
        </div>
    </section>
  );
}
