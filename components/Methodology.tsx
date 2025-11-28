import React from 'react';
import { Target, Search, Rocket } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="metodo" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-graphite-900 mb-6">
              O Método Lumina
            </h2>
            <p className="text-lg text-graphite-600 mb-8 leading-relaxed">
              Não acreditamos em fórmulas mágicas, mas em processos estruturados. Nosso método foi validado por centenas de profissionais que alcançaram posições de destaque em empresas nacionais e multinacionais.
            </p>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linkedin-50 text-linkedin-600">
                    <Search size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-graphite-900">1. Diagnóstico Profundo</h4>
                  <p className="mt-1 text-graphite-600 text-sm">Entendemos seu momento, suas competências centrais e suas ambições para alinhar a rota.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linkedin-50 text-linkedin-600">
                    <Target size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-graphite-900">2. Estratégia de Posicionamento</h4>
                  <p className="mt-1 text-graphite-600 text-sm">Reformulamos seus materiais (CV, LinkedIn) e definimos as empresas-alvo ideais.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linkedin-50 text-linkedin-600">
                    <Rocket size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-graphite-900">3. Ação e Acompanhamento</h4>
                  <p className="mt-1 text-graphite-600 text-sm">Preparo intensivo para entrevistas, networking ativo e suporte na negociação da oferta.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                 alt="Profissional executiva em ambiente de trabalho" 
                 className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-linkedin-900/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sand-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-linkedin-200 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};