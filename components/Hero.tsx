'use client';
import { motion } from 'framer-motion';
import { Button } from './ui/Shared';
import { ChevronRight, PlayCircle } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const item = {
  hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
  show: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 text-center overflow-hidden">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-8 z-10"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#24E082] text-xs font-mono mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#24E082] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#24E082]"></span>
          </span>
          V 2.0 Já Disponível: Conheça o Obbie
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
          Decole seu canal <br />
          com <span className="text-gradient">Inteligência Artificial</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
          Planeje, organize e otimize seu conteúdo em um só lugar. 
          Deixe a I.A. cuidar dos dados e das thumbnails enquanto você foca em criar.
        </motion.p>

        <motion.div variants={item} className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          <Button variant="primary">
            Começar Agora <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant="secondary">
            Ver Demo <PlayCircle className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Floating "Mockup" Hints */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-10 hidden lg:block p-4 glass-panel rounded-xl max-w-xs text-left border-l-4 border-[#00A2FF]"
        >
          <div className="text-[10px] text-[#00A2FF] font-mono mb-1">OBBIE AI SUGGESTION</div>
          <div className="text-sm text-white">"O título do seu último vídeo tem baixo CTR. Tente adicionar uma pergunta provocativa."</div>
        </motion.div>
      </motion.div>
    </section>
  );
}