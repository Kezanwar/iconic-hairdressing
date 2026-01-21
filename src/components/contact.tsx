"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";

const hours = [
  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
  { day: "Saturday", time: "9:00 AM - 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative greenery */}
      <div className="absolute left-0 bottom-0 w-1/4 h-2/3 opacity-10 pointer-events-none">
        <Image
          src="/images/hero-greenery.jpg"
          alt=""
          fill
          className="object-cover object-right"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">Book Now</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-6 text-balance">
              Ready for Your Transformation?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Book your appointment today and discover why our clients keep coming back. 
              We can&apos;t wait to welcome you to ICONIC.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm tracking-wider mb-12"
            >
              <Link href="tel:+15551234567">
                Book an Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">123 Botanical Lane, Suite 100<br />Melbourne, VIC 3000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">(03) 9123 4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hours */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-card border border-border rounded-lg p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-xl font-medium tracking-wide text-foreground">Opening Hours</h3>
              </div>

              <div className="space-y-4">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground">{item.day}</span>
                    <span className="text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Note:</span> Walk-ins welcome but 
                  appointments are recommended to ensure availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
