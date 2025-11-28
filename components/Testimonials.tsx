import React from 'react';
import { Star, MoreVertical, ThumbsUp } from 'lucide-react';

const ReviewCard: React.FC<{
  text: string;
  author: string;
  role: string;
  company?: string;
  timeAgo: string;
}> = ({ text, author, role, company, timeAgo }) => (
  <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
    {/* Header */}
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-linkedin-600 text-white flex items-center justify-center font-bold text-lg select-none">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-bold text-graphite-900 leading-tight">{author}</h4>
          <div className="text-xs text-sand-500 flex items-center gap-1 mt-0.5">
            <span>{role}</span>
            {company && (
              <>
                <span>•</span>
                <span>{company}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <button className="text-sand-400 hover:text-graphite-600 p-1">
        <MoreVertical size={16} />
      </button>
    </div>

    {/* Stars & Date line */}
    <div className="flex items-center gap-2 mb-4">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <span className="text-xs text-sand-400 font-medium">{timeAgo}</span>
    </div>

    {/* Content */}
    <div className="flex-grow">
      <p className="text-sm text-graphite-700 leading-relaxed">
        {text}
      </p>
    </div>
    
    {/* Pseudo interactions */}
    <div className="mt-4 pt-4 border-t border-sand-50 flex items-center gap-4">
       <button className="flex items-center gap-1.5 text-xs font-medium text-sand-500 hover:text-linkedin-600 transition-colors">
          <ThumbsUp size={14} /> 
          <span>Útil</span>
       </button>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "O processo de mentoria foi divisor de águas. Eu estava estagnada há 3 anos e, em 2 meses de trabalho focado, consegui uma posição de liderança sênior. A abordagem técnica fez toda a diferença.",
      author: "Mariana Costa",
      role: "Head de Marketing",
      company: "TechFin",
      timeAgo: "2 semanas atrás"
    },
    {
      text: "A revisão do meu LinkedIn trouxe convites de recrutadores na mesma semana. A consultoria é muito técnica, mas humana. Me senti seguro durante todo o processo e o resultado veio rápido.",
      author: "Carlos Eduardo",
      role: "Engenheiro de Software",
      company: "Startup Global",
      timeAgo: "um mês atrás"
    },
    {
      text: "A simulação de entrevista foi fundamental. Consegui negociar um pacote de benefícios 30% superior ao inicial graças às técnicas aprendidas. Recomendo fortemente para quem busca recolocação.",
      author: "Fernanda Lima",
      role: "Gerente de Projetos",
      company: "",
      timeAgo: "3 dias atrás"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-sand-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-graphite-900 mb-4">
              O que dizem nossos clientes
            </h2>
            <p className="text-lg text-graphite-600">
              Histórias reais de profissionais que transformaram suas carreiras.
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-3xl font-bold text-graphite-900">5.0</span>
              <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
              </div>
            </div>
            <span className="text-sm text-sand-500 font-medium">Baseado em 184 avaliações</span>
            <div className="flex items-center gap-1 mt-1 opacity-60">
                <span className="text-xs font-bold text-gray-500"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span> Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ReviewCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};