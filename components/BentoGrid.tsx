'use client';
import { TiltCard } from './ui/Shared';
import { Calendar, Sparkles, BarChart3, Youtube, Bot } from 'lucide-react';

const features = [
  {
    title: "Calendário Editorial",
    desc: "Visualize sua produção. Arraste, solte e organize uploads.",
    icon: Calendar,
    col: "md:col-span-2",
    color: "text-[#00A2FF]"
  },
  {
    title: "Ideias Infinitas",
    desc: "Gere roteiros e pautas baseadas em tendências do seu nicho.",
    icon: Sparkles,
    col: "md:col-span-1",
    color: "text-[#BC61E6]"
  },
  {
    title: "Otimização SEO",
    desc: "Títulos, tags e descrições magnéticas para o algoritmo.",
    icon: Youtube,
    col: "md:col-span-1",
    color: "text-[#FF8961]"
  },
  {
    title: "Análise de Thumbnails",
    desc: "I.A. prevê o CTR da sua capa antes de você postar.",
    icon: BarChart3,
    col: "md:col-span-2",
    color: "text-[#24E082]"
  },
  {
    title: "Obbie Copiloto",
    desc: "Seu assistente pessoal 24/7 para tirar dúvidas e dar sugestões.",
    icon: Bot,
    col: "md:col-span-3",
    color: "text-white"
  }
];

export default function BentoGrid() {
  return (
    <section id="funcionalidades" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sistema Operacional do Creator</h2>
          <p className="text-gray-400 font-mono">Tudo o que você precisa para crescer, unificado.</p>
        </div>

        {/* Aumentei a altura mínima das linhas para 240px (antes era 200px) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {features.map((f, i) => (
            <TiltCard key={i} className={`${f.col} p-8 flex flex-col justify-between group hover:border-white/20 transition-colors`}>
              <div className="flex justify-between items-start">
                <div className={`p-4 bg-white/5 rounded-xl ${f.color}`}>
                  {/* Aumentei o ícone levemente */}
                  <f.icon className="w-8 h-8" />
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-gray-500">0{i+1}</span>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}