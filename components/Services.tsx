import React from 'react';
import { Linkedin, FileText, Users, Compass, Briefcase, TrendingUp } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="group p-8 bg-white rounded-xl border border-sand-200 hover:border-linkedin-300 hover:shadow-lg transition-all duration-300 cursor-default">
    <div className="w-12 h-12 bg-sand-50 rounded-lg flex items-center justify-center text-linkedin-600 mb-6 group-hover:bg-linkedin-50 transition-colors">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-semibold text-graphite-900 mb-3 group-hover:text-linkedin-700 transition-colors">
      {title}
    </h3>
    <p className="text-graphite-600 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Linkedin size={24} />,
      title: "Otimização de LinkedIn",
      description: "Transforme seu perfil em um ímã de recrutadores. Estratégia de palavras-chave, headline magnética e narrativa que valoriza sua trajetória."
    },
    {
      icon: <FileText size={24} />,
      title: "Revisão de CV Estratégico",
      description: "Um currículo moderno, focado em resultados e compatível com ATS (sistemas de triagem). Destaque suas conquistas de forma clara."
    },
    {
      icon: <Users size={24} />,
      title: "Simulação de Entrevista",
      description: "Treinamento prático para entrevistas comportamentais e técnicas. Ganhe confiança para responder perguntas difíceis e negociar salários."
    },
    {
      icon: <Compass size={24} />,
      title: "Mentoria de Carreira",
      description: "Sessões individuais para desenhar seu plano de desenvolvimento, transição de área ou preparação para cargos de liderança."
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-sand-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-graphite-900 mb-4">
            Excelência em cada etapa da sua jornada
          </h2>
          <p className="text-lg text-graphite-600">
            Nossa metodologia cobre todos os pontos de contato com o mercado, garantindo que sua marca pessoal transmita autoridade e consistência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};