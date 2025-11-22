import CosmicBackground from '@/components/CosmicBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import Comparison from '@/components/Comparison';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen text-white selection:bg-[#00A2FF] selection:text-black">
      <CosmicBackground />
      
      <Navbar />
      
      <div className="relative z-10 flex flex-col gap-0">
        <Hero />
        
        {/* Gradient Fade between sections */}
        <div className="h-32 bg-gradient-to-b from-transparent to-[#030305] w-full -mt-32 z-20 relative pointer-events-none" />
        
        <div className="bg-[#030305]">
          <BentoGrid />
          <Comparison />
          
          {/* Quick Pricing Tease */}
          <section id="planos" className="py-24 text-center">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#00A2FF] to-[#BC61E6]">
              <div className="bg-[#030305] px-6 py-2 rounded-full">
                <span className="font-mono text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#BC61E6]">
                  Planos a partir de R$ 29,90/mês
                </span>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}