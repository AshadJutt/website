import { Cpu, HardDrive, Headphones, Shield, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AMD Ryzen™ / EPYC™",
    description: "Latest generation processors for maximum performance",
  },
  {
    icon: HardDrive,
    title: "NVMe SSD Storage",
    description: "Ultra-fast storage with 3500MB/s+ read speeds",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Real humans ready to help anytime, anywhere",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade protection up to 1Tbps+",
  },
  {
    icon: Globe,
    title: "Global Locations",
    description: "Data centers across 4 continents",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Your server ready in under 60 seconds",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">CloudHost</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for performance, designed for reliability. Every component is
            carefully selected to deliver the best hosting experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-4 group-hover:border-primary/40 transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
