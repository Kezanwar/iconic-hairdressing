"use client";

import { useEffect, useRef, useState } from "react";
import { Scissors, Palette, Sparkles, Crown } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cut & Style",
    description: "Precision cuts tailored to your face shape, lifestyle, and personal style. Includes consultation, shampoo, and styling.",
    price: "From $85",
  },
  {
    icon: Palette,
    title: "Colour",
    description: "From subtle highlights to bold transformations. Our colour experts use premium products for vibrant, long-lasting results.",
    price: "From $120",
  },
  {
    icon: Sparkles,
    title: "Treatments",
    description: "Restore and rejuvenate with our luxury hair treatments. Deep conditioning, keratin smoothing, and scalp therapies.",
    price: "From $65",
  },
  {
    icon: Crown,
    title: "Bridal & Occasion",
    description: "Look stunning on your special day. Complete bridal packages including trial, styling, and on-location services.",
    price: "From $250",
  },
];

export function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-foreground text-balance">
            Crafted for Your Unique Beauty
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Every service is an experience, designed to leave you feeling refreshed, confident, and beautifully styled.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={service.title}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`group p-8 bg-background border border-border rounded-lg hover:border-primary/30 transition-all duration-500 hover:shadow-lg ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-medium tracking-wide text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-primary font-medium tracking-wide">
                  {service.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
