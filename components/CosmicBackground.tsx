'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const Particles = () => {
  // Aumentei para 3000 particulas para ficar mais denso
  const count = 3000;
  const mesh = useRef<THREE.Points>(null!);
  
  const mouse = useRef({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Espalhei mais as particulas (antes era 20, agora 30)
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 15;
      temp[i * 3] = x;
      temp[i * 3 + 1] = y;
      temp[i * 3 + 2] = z;
    }
    return temp;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mouse.current.x += (state.mouse.x - mouse.current.x) * 0.05;
    mouse.current.y += (state.mouse.y - mouse.current.y) * 0.05;

    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(time * 0.1) * 0.1 + (mouse.current.y * 0.05);
      mesh.current.rotation.y = Math.cos(time * 0.15) * 0.1 + (mouse.current.x * 0.05);
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        // AQUI ESTÁ O SEGREDO: Diminuí de 0.03 para 0.015
        size={0.015} 
        color="#00A2FF"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#030305]">
      {/* Adicionei bolhas de cor (Glow) via CSS puro para dar atmosfera */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00A2FF 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #BC61E6 0%, transparent 70%)' }}
      />
      
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  );
}