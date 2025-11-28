import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-graphite-900 text-sand-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              Lumina<span className="text-linkedin-400">.</span>
            </span>
            <p className="mt-2 text-sand-400 text-sm max-w-xs">
              Consultoria de carreira focada em resultados reais e estratégicos.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sand-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-sand-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:contato@lumina.com" className="text-sand-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-graphite-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-sand-500">
          <p>&copy; 2024 Lumina Consultoria. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-sand-300">Termos de Uso</a>
            <a href="#" className="hover:text-sand-300">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};