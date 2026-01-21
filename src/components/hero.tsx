"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const mossWallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mossWallRef.current) {
        const scrollY = window.scrollY;
        mossWallRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Living moss wall background */}
      <div
        ref={mossWallRef}
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 40%, #2d4a2d 0%, transparent 50%),
            radial-gradient(ellipse at 70% 60%, #1e3a1e 0%, transparent 50%),
            radial-gradient(ellipse at 50% 30%, #3d5a3d 0%, transparent 40%),
            radial-gradient(ellipse at 20% 70%, #2a452a 0%, transparent 45%),
            radial-gradient(ellipse at 80% 30%, #354f35 0%, transparent 45%),
            linear-gradient(180deg, #1a2f1a 0%, #243524 50%, #1a2a1a 100%)
          `,
        }}
      >
        {/* Moss texture overlay */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, #3a5c3a 1px, transparent 1px),
              radial-gradient(circle at 30% 50%, #4a6c4a 1px, transparent 1px),
              radial-gradient(circle at 50% 10%, #2a4a2a 1px, transparent 1px),
              radial-gradient(circle at 70% 40%, #3a5a3a 1px, transparent 1px),
              radial-gradient(circle at 90% 70%, #4a6a4a 1px, transparent 1px),
              radial-gradient(circle at 15% 80%, #3a5a3a 1px, transparent 1px),
              radial-gradient(circle at 85% 15%, #2a4c2a 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 80px 80px, 120px 120px, 90px 90px, 110px 110px, 70px 70px, 130px 130px',
          }}
        />
        {/* Leaf-like shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-30"
              style={{
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 60 + 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(${Math.random() * 360}deg, #3a5a3a, #2a4a2a)`,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="opacity-0 animate-fade-up">
          <p className="text-sm tracking-[0.3em] text-white/60 mb-8 uppercase font-sans">
            Premium Hair Salon
          </p>
        </div>

        {/* Neon Sign Logo */}
        <h1 className="opacity-0 animate-fade-up animation-delay-200">
          <span 
            className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light tracking-[0.15em] neon-text"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.15em',
            }}
          >
            ICONIC
          </span>
          <span className="block text-lg sm:text-xl md:text-2xl font-light tracking-[0.25em] text-white/70 mt-4 uppercase">
            hairdressing
          </span>
        </h1>

        <p className="opacity-0 animate-fade-up animation-delay-400 mt-10 text-base sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed font-sans">
          Where artistry meets elegance. Experience the pinnacle of hair styling in a serene, luxurious environment.
        </p>

        <div className="opacity-0 animate-fade-up animation-delay-600 mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#f5edc6] hover:bg-[#e8d892] text-[#1a2a1a] px-8 py-6 text-sm tracking-wider font-medium"
          >
            <Link href="#contact">
              Book an Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 hover:bg-white/10 text-white px-8 py-6 text-sm tracking-wider bg-transparent"
          >
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in animation-delay-600">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-white/50 uppercase">Scroll</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/60 animate-float" />
          </div>
        </div>
      </div>

      {/* Decorative trailing greenery at edges */}
      <div className="absolute top-0 left-0 w-32 h-64 opacity-40 z-10">
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #3a5a3a 0%, transparent 70%)',
            clipPath: 'polygon(0 0, 100% 0, 30% 100%, 0 80%)',
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-32 h-64 opacity-40 z-10">
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(225deg, #3a5a3a 0%, transparent 70%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 70% 100%)',
          }}
        />
      </div>
    </section>
  );
}
