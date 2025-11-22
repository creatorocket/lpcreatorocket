'use client';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  return (
    <section id="como-funciona" className="py-24 px-4 bg-[#050508]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Old Way */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 opacity-50 hover:opacity-100 transition-opacity duration-500"
          >
            <h3 className="text-2xl font-bold text-gray-500 mb-8">Jeito Antigo</h3>
            <ul className="space-y-4 font-mono text-sm text-gray-400">
              {['Planilhas soltas e desorganizadas', 'Bloqueio criativo constante', 'Títulos feitos na pressa', 'Thumbnails sem critério visual'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 border-l border-red-500/20 pl-4 py-2">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New Way */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border-t-4 border-t-[#00A2FF] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-32 bg-[#00A2FF]/10 blur-[80px]" />
            
            <h3 className="text-2xl font-bold text-white mb-8">Com <span className="text-[#00A2FF]">CreatoRocket</span></h3>
            <ul className="space-y-4 font-mono text-sm text-gray-200 relative z-10">
              {[
                'Fluxo unificado e automático',
                'Ideias infinitas baseadas em dados',
                'SEO otimizado por I.A.',
                'Predição de sucesso antes de postar'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 bg-white/5 rounded-lg p-3 border border-white/5">
                  <div className="p-1 bg-[#24E082]/20 rounded-full">
                    <Check className="w-3 h-3 text-[#24E082]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}