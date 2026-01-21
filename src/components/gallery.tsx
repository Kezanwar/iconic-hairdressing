"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Beautiful balayage hairstyle" },
  { src: "/images/gallery-2.jpg", alt: "ICONIC salon interior" },
  { src: "/images/gallery-2.jpg", alt: "Elegant bridal updo" },
  {
    src: "/images/gallery-2.jpg",
    alt: "Rich brunette color treatment",
  },
  { src: "/images/gallery-5.jpg", alt: "Modern bob haircut" },
  { src: "/images/gallery-6.jpg", alt: "Hair styling in progress" },
];

export function Gallery() {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = imageRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-foreground text-balance">
            Our Work Speaks for Itself
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Browse through our portfolio of transformations and get inspired for
            your next visit.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => {
            const isVisible = visibleImages.includes(index);

            return (
              <div
                key={image.src}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className={`group relative aspect-[4/5] overflow-hidden rounded-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
