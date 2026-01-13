import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 15000, suffix: "+", label: "Servers Deployed" },
  { value: 50000, suffix: "+", label: "Active Users" },
  { value: 99.99, suffix: "%", label: "Uptime SLA" },
  { value: 24, suffix: "/7", label: "Expert Support" },
];

const AnimatedCounter = ({ 
  value, 
  suffix, 
  duration = 2000 
}: { 
  value: number; 
  suffix: string; 
  duration?: number 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (value - startValue) * easeOut;
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  const displayValue = value % 1 === 0 
    ? Math.floor(count).toLocaleString() 
    : count.toFixed(2);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold gradient-text stat-glow">
      {displayValue}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Gamers & Developers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of customers who trust us with their hosting needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 glass-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
