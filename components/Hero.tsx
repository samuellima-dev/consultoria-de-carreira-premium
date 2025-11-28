import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', linkedin: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 800);
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-linkedin-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-sand-200 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-linkedin-50 border border-linkedin-200 text-linkedin-800 text-xs font-semibold tracking-wide uppercase mb-6">
              Consultoria Executiva e Personalizada
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-graphite-900 leading-tight mb-6">
              Sua carreira merece <br />
              <span className="text-linkedin-600 italic">direção estratégica.</span>
            </h1>
            <p className="text-lg text-graphite-600 mb-8 leading-relaxed max-w-2xl">
              Apoiamos profissionais em momentos decisivos de transição e crescimento. 
              Do posicionamento no LinkedIn à negociação final, construímos juntos sua próxima conquista.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-graphite-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-linkedin-500" size={18} />
                <span>Método Exclusivo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-linkedin-500" size={18} />
                <span>+500 Profissionais Recolocados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-linkedin-500" size={18} />
                <span>Acompanhamento Personalizado</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-5 relative" id="hero-form">
            <div className="absolute inset-0 bg-linkedin-600 transform rotate-2 rounded-2xl opacity-10"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-sand-100">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-semibold text-graphite-900 mb-2">
                  Vamos conversar?
                </h3>
                <p className="text-graphite-500 text-sm">
                  Deixe seus dados para uma análise preliminar gratuita do seu perfil.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-linkedin-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="text-linkedin-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-graphite-900 mb-2">Solicitação Recebida!</h4>
                  <p className="text-graphite-600">Entraremos em contato em breve pelo email informado.</p>
                  <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                    Enviar outro
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Seu nome completo" 
                    required 
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                  <Input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    required 
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                  <Input 
                    placeholder="URL do seu LinkedIn" 
                    value={formState.linkedin}
                    onChange={e => setFormState({...formState, linkedin: e.target.value})}
                  />
                  <Button fullWidth type="submit" className="group">
                    Solicitar Análise
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-xs text-center text-sand-500 mt-4">
                    Seus dados estão seguros conosco. Não enviamos spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};