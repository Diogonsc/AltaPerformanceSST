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
  Shield,
  CheckCircleIcon,
  TargetIcon,
  UsersIcon,
  TrendingUpIcon,
  LightbulbIcon,
} from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function PraticalTips() {
  const cards = [
    {
      id: 1,
      title: "Planejamento Estratégico",
      description:
        "Domine técnicas de planejamento estratégico e operacional. Aprenda a criar cronogramas eficientes, definir metas claras e organizar atividades para máxima produtividade em SST.",
      icon: CalendarIcon,
      details: {
        overview: "O planejamento estratégico é a base para o sucesso em SST. Desenvolva habilidades para criar planos eficazes que alinhem objetivos organizacionais com práticas de segurança.",
        benefits: [
          "Aumento de 40% na eficiência dos processos de SST",
          "Redução de 60% no tempo de implementação de melhorias",
          "Melhoria de 85% na adesão às práticas de segurança",
          "Otimização de recursos e redução de custos operacionais"
        ],
        keySkills: [
          "Definição de metas SMART para SST",
          "Criação de cronogramas detalhados",
          "Análise de riscos e oportunidades",
          "Gestão de recursos e orçamentos",
          "Avaliação de performance e indicadores"
        ],
        practicalTips: [
          "Use ferramentas como Gantt Charts para visualizar cronogramas",
          "Estabeleça marcos claros e mensuráveis",
          "Involva todas as partes interessadas no planejamento",
          "Revise e ajuste planos regularmente",
          "Documente lições aprendidas para futuros projetos"
        ],
        tools: ["Microsoft Project", "Trello", "Asana", "Excel Avançado", "Power BI"],
        certification: "Certificação em Gestão de Projetos de SST"
      }
    },
    {
      id: 2,
      title: "Conhecimento Técnico",
      description:
        "Aprofunde seu domínio das NRs, legislações e normas técnicas. Mantenha-se atualizado com as mudanças regulamentares e torne-se referência técnica na sua área de atuação.",
      icon: BookOpenIcon,
      details: {
        overview: "O conhecimento técnico sólido é fundamental para se destacar em SST. Domine as principais NRs, legislações e normas técnicas para se tornar uma referência na área.",
        benefits: [
          "Reconhecimento como especialista técnico",
          "Maior credibilidade junto à equipe e gestão",
          "Redução de 70% em consultas externas",
          "Implementação mais eficaz de normas e procedimentos",
          "Preparação para auditorias e inspeções"
        ],
        keySkills: [
          "Domínio completo das 36 NRs",
          "Interpretação de legislações trabalhistas",
          "Aplicação de normas técnicas (ABNT, ISO)",
          "Análise de riscos ocupacionais",
          "Elaboração de procedimentos técnicos"
        ],
        practicalTips: [
          "Mantenha uma biblioteca atualizada de normas",
          "Participe de cursos de atualização regularmente",
          "Crie um sistema de alertas para mudanças regulamentares",
          "Desenvolva uma rede de contatos técnicos",
          "Pratique a aplicação das normas em casos reais"
        ],
        tools: ["Portal do MTE", "Sites especializados", "Revistas técnicas", "Cursos online", "Biblioteca digital"],
        certification: "Certificação Técnica em SST"
      }
    },
    {
      id: 3,
      title: "Comunicação Eficaz",
      description:
        "Desenvolva habilidades de comunicação clara e persuasiva. Aprenda a apresentar ideias, conduzir reuniões e influenciar positivamente a cultura de segurança na organização.",
      icon: MessageSquareIcon,
      details: {
        overview: "A comunicação eficaz é essencial para influenciar positivamente a cultura de segurança. Desenvolva habilidades para transmitir mensagens claras e envolver toda a organização.",
        benefits: [
          "Aumento de 90% no engajamento da equipe",
          "Redução de 50% em acidentes por falhas de comunicação",
          "Melhoria significativa na cultura de segurança",
          "Maior adesão aos programas de SST",
          "Fortalecimento do relacionamento interpessoal"
        ],
        keySkills: [
          "Apresentações persuasivas e envolventes",
          "Técnicas de comunicação não-verbal",
          "Condução eficaz de reuniões",
          "Escrita técnica clara e objetiva",
          "Feedback construtivo e desenvolvimento"
        ],
        practicalTips: [
          "Use storytelling para tornar mensagens mais impactantes",
          "Adapte a linguagem ao público-alvo",
          "Pratique a escuta ativa e empática",
          "Use recursos visuais para reforçar mensagens",
          "Crie canais de comunicação bidirecionais"
        ],
        tools: ["PowerPoint", "Canva", "Zoom/Teams", "Slack", "Microsoft Teams"],
        certification: "Certificação em Comunicação Empresarial"
      }
    },
    {
      id: 4,
      title: "Relatórios e Indicadores",
      description:
        "Domine a criação de relatórios técnicos e indicadores de performance. Aprenda a transformar dados em insights valiosos para tomada de decisão e melhoria contínua.",
      icon: BarChart3Icon,
      details: {
        overview: "Transforme dados em insights valiosos através de relatórios técnicos e indicadores estratégicos. Tome decisões baseadas em evidências e demonstre o valor do SST.",
        benefits: [
          "Tomada de decisão baseada em dados",
          "Demonstração clara do ROI em SST",
          "Identificação proativa de tendências",
          "Melhoria contínua dos processos",
          "Credibilidade junto à alta gestão"
        ],
        keySkills: [
          "Análise estatística e interpretação de dados",
          "Criação de dashboards interativos",
          "Elaboração de relatórios executivos",
          "Definição de KPIs relevantes",
          "Visualização de dados e storytelling"
        ],
        practicalTips: [
          "Use gráficos claros e objetivos",
          "Foque em indicadores que importam para a gestão",
          "Crie relatórios visuais e atrativos",
          "Estabeleça metas mensuráveis",
          "Compartilhe insights regularmente"
        ],
        tools: ["Excel Avançado", "Power BI", "Tableau", "Google Analytics", "Python/R"],
        certification: "Certificação em Business Intelligence"
      }
    },
    {
      id: 5,
      title: "Proatividade",
      description:
        "Desenvolva uma mentalidade proativa e antecipatória. Aprenda a identificar oportunidades de melhoria, propor soluções inovadoras e se destacar como agente de mudança.",
      icon: ZapIcon,
      details: {
        overview: "A proatividade é o diferencial dos profissionais de alta performance. Desenvolva uma mentalidade antecipatória e torne-se um agente de mudança em SST.",
        benefits: [
          "Reconhecimento como líder de inovação",
          "Redução de 80% em problemas reativos",
          "Identificação antecipada de riscos",
          "Criação de oportunidades de melhoria",
          "Diferenciação competitiva na carreira"
        ],
        keySkills: [
          "Pensamento crítico e analítico",
          "Identificação de oportunidades",
          "Criatividade e inovação",
          "Resolução proativa de problemas",
          "Liderança de mudanças"
        ],
        practicalTips: [
          "Antecipe-se aos problemas antes que ocorram",
          "Proponha soluções, não apenas identifique problemas",
          "Mantenha-se atualizado com tendências da área",
          "Colabore com outras áreas da empresa",
          "Documente e compartilhe suas inovações"
        ],
        tools: ["Design Thinking", "Lean Six Sigma", "Mind Mapping", "SWOT Analysis", "Innovation Canvas"],
        certification: "Certificação em Inovação e Liderança"
      }
    },
    {
      id: 6,
      title: "Gestão do Tempo",
      description:
        "Otimize sua produtividade com técnicas eficazes de gestão do tempo. Aprenda a priorizar tarefas, eliminar desperdícios e maximizar resultados em menos tempo.",
      icon: ClockIcon,
      details: {
        overview: "A gestão eficaz do tempo é crucial para a alta performance em SST. Domine técnicas para otimizar sua produtividade e maximizar resultados.",
        benefits: [
          "Aumento de 60% na produtividade",
          "Redução significativa do estresse",
          "Melhor equilíbrio vida-trabalho",
          "Maior foco em atividades estratégicas",
          "Eliminação de desperdícios de tempo"
        ],
        keySkills: [
          "Priorização eficaz de tarefas",
          "Técnicas de foco e concentração",
          "Delegação estratégica",
          "Eliminação de desperdícios",
          "Planejamento e organização"
        ],
        practicalTips: [
          "Use a técnica Pomodoro para manter o foco",
          "Aplique a matriz de Eisenhower para priorizar",
          "Elimine distrações e interrupções desnecessárias",
          "Agrupe tarefas similares",
          "Reserve tempo para atividades estratégicas"
        ],
        tools: ["Trello", "Notion", "Google Calendar", "RescueTime", "Forest App"],
        certification: "Certificação em Produtividade e Gestão do Tempo"
      }
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-4">
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
                  className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300"
                >
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative pt-0 pb-4">
                <CardDescription className="text-gray-600 text-center leading-relaxed text-lg">
                  {card.description}
                </CardDescription>
              </CardContent>
              <div className="flex justify-center px-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full uppercase inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md px-6 border border-[#031428] bg-transparent text-[#031428] shadow-xs hover:bg-[#031428] hover:text-white z-[50]"
                      type="button"
                    >
                      Saiba mais
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="!w-screen !h-screen !max-w-none !max-h-none !top-0 !left-0 !translate-x-0 !translate-y-0 sm:!w-[90vw] sm:!max-w-6xl sm:!h-auto sm:!max-h-[90vh] sm:!top-[50%] sm:!left-[50%] sm:!translate-x-[-50%] sm:!translate-y-[-50%] overflow-y-auto fixed rounded-none sm:rounded-lg !p-4 sm:!p-6">
                    <DialogHeader>
                      <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center">
                          <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                        </div>
                        {card.title}
                      </DialogTitle>
                      <DialogDescription className="text-base sm:text-lg text-gray-600 mt-4">
                        {card.details.overview}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                      {/* Benefícios */}
                      <div className="bg-primary/5 p-4 sm:p-6 rounded-xl border border-primary/10">
                        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                          <TrendingUpIcon className="w-5 h-5" />
                          Benefícios Principais
                        </h3>
                        <ul className="space-y-2">
                          {card.details.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3 text-primary/80">
                              <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Habilidades-Chave */}
                      <div className="bg-secondary/10 p-4 sm:p-6 rounded-xl border border-secondary/20">
                        <h3 className="text-xl font-semibold text-secondary-foreground mb-4 flex items-center gap-2">
                          <TargetIcon className="w-5 h-5" />
                          Habilidades-Chave
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {card.details.keySkills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-secondary/20">
                              <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                              <span className="text-secondary-foreground">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dicas Práticas */}
                      <div className="bg-accent/10 p-4 sm:p-6 rounded-xl border border-accent/20">
                        <h3 className="text-xl font-semibold text-accent-foreground mb-4 flex items-center gap-2">
                          <LightbulbIcon className="w-5 h-5" />
                          Dicas Práticas
                        </h3>
                        <ul className="space-y-3">
                          {card.details.practicalTips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-3 text-accent-foreground">
                              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold text-sm flex-shrink-0 mt-0.5">
                                {index + 1}
                              </div>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ferramentas e Certificação */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-muted/20 p-4 sm:p-6 rounded-xl border border-muted/30">
                          <h3 className="text-xl font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                            <UsersIcon className="w-5 h-5" />
                            Ferramentas Recomendadas
                          </h3>
                          <div className="space-y-2">
                            {card.details.tools.map((tool, index) => (
                              <div key={index} className="bg-white p-3 rounded-lg border border-muted/30">
                                <span className="text-muted-foreground font-medium">{tool}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-primary/5 p-4 sm:p-6 rounded-xl border border-primary/10">
                          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5" />
                            Certificação Sugerida
                          </h3>
                          <div className="bg-white p-4 rounded-lg border border-primary/20">
                            <p className="text-primary font-medium">{card.details.certification}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* Call to action */}
      <div className="w-full">
        <div
          className="relative p-8 md:p-12 w-full overflow-hidden min-h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: "url(/optimized/banner01.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Gradiente overlay com tonalidade primary */}
          <div className="absolute inset-0 bg-primary/80" />

          <div className="relative text-center z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para implementar essas estratégias na sua carreira?
            </h3>

            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Transforme seu conhecimento em resultados práticos e acelere seu
              crescimento profissional
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Badge variant="outline" className="bg-white/10 border-white/30 text-white px-4 py-2">
                <SparklesIcon className="h-4 w-4 mr-2" />
                Aprender mais
              </Badge>
              <Badge variant="outline" className="bg-white/10 border-white/30 text-white px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Treinamento de NR 06
              </Badge>
            </div>

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
        </div>
      </div>
    </section>
  );
}
