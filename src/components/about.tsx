"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative greenery background */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
        <Image
          src="/images/hero-greenery.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-2.jpg"
                alt="ICONIC salon interior"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">Our Story</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-8 text-balance">
              Where Relaxation Meets Transformation
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                ICONIC was born from a simple belief: that everyone deserves to feel extraordinary. 
                Our salon is a sanctuary where the outside world fades away, and you become the 
                center of attention.
              </p>
              <p>
                Our team of expert stylists brings years of experience and continuous education 
                to every appointment. We stay ahead of trends while honoring timeless techniques, 
                ensuring you leave with a look that&apos;s both current and uniquely you.
              </p>
              <p>
                Step into our space of calm whites, natural textures, and botanical touches. 
                Breathe deep, relax, and let us create something beautiful together.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8 pt-10 border-t border-border">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "10k+", label: "Happy Clients" },
                { number: "6", label: "Expert Stylists" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-light text-foreground tracking-wide">{stat.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
