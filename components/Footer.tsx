'use client';
import { motion } from 'framer-motion';
import { Button } from './ui/Shared';

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-10 px-4 bg-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00A2FF] to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-9xl font-bold tracking-tighter mb-8 opacity-20 select-none">
          READY TO LAUNCH?
        </h2>
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-6">Vamos decolar o seu canal?</h3>
          <Button variant="primary">Criar conta Grátis</Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono border-t border-white/10 pt-8">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
        </div>
        <div className="flex items-center gap-2">
          <span>© 2024 CreatoRocket</span>
          <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
          <span>All systems normal</span>
        </div>
      </div>
    </footer>
  );
}