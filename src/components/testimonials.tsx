"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ICONIC is my happy place. The atmosphere is so calming, and I always leave feeling like the best version of myself.",
    author: "Sarah Mitchell",
    role: "Regular Client",
  },
  {
    quote: "I&apos;ve never been to a salon that truly listens. They understood exactly what I wanted and delivered beyond my expectations.",
    author: "Emma Thompson",
    role: "First-time Client",
  },
  {
    quote: "My wedding hair was absolutely perfect. The team made me feel so special and relaxed on the most important day of my life.",
    author: "Rachel Chen",
    role: "Bridal Client",
  },
];

export function Testimonials() {
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
    <section id="testimonials" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-foreground text-balance">
            Words From Our Clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={testimonial.author}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`relative p-8 lg:p-10 bg-background border border-border rounded-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Quote className="w-8 h-8 text-primary/30 mb-6" />
                <blockquote className="text-foreground leading-relaxed mb-8">
                  {testimonial.quote.replace(/&apos;/g, "'")}
                </blockquote>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
