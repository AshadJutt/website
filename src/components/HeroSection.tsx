import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Shield, Zap, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroMinecraft1 from "@/assets/hero-minecraft-1.jpg";
import heroMinecraft2 from "@/assets/hero-minecraft-2.jpg";
import heroMinecraft3 from "@/assets/hero-minecraft-3.jpg";
import heroServers from "@/assets/hero-servers.jpg";

const slides = [
  { image: heroMinecraft1, alt: "Minecraft Castle at Sunset" },
  { image: heroMinecraft2, alt: "Minecraft Cave Adventure" },
  { image: heroServers, alt: "Data Center Servers" },
  { image: heroMinecraft3, alt: "Minecraft Village at Night" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass-card hover:bg-primary/20 transition-colors group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass-card hover:bg-primary/20 transition-colors group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-2 bg-primary"
                : "w-2 h-2 bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-[1]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float z-[1]" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              99.99% Uptime Guaranteed
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in drop-shadow-2xl" style={{ animationDelay: "0.1s" }}>
            High-Performance{" "}
            <span className="gradient-text">Game & Cloud</span>
            <br />
            Hosting
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in drop-shadow-lg" style={{ animationDelay: "0.2s" }}>
            Experience ultra-low latency, enterprise-grade DDoS protection, and 
            premium AMD Ryzen™ hardware. Deploy your servers in seconds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="gap-2 w-full sm:w-auto">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
              View Plans
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">DDoS Protected</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Instant Setup</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Global Network</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;
