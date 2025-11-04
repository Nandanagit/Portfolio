import { ReactNode } from 'react';
import ParticleBackground from './ParticleBackground';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
