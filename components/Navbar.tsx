'use client';
import { motion } from 'framer-motion';
import { Button } from './ui/Shared';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl">
        <div className="flex items-center gap-2 text-white">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Rocket className="w-5 h-5 text-[#00A2FF]" />
          </div>
          <span className="font-bold font-space tracking-tight text-lg">CreatoRocket</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-gray-400">
          {['Funcionalidades', 'Como funciona', 'Planos', 'Depoimentos'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <Button variant="primary" className="px-6 py-2 text-xs">
          Teste Grátis
        </Button>
      </div>
    </motion.nav>
  );
}