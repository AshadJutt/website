import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$4",
    period: "/mo",
    description: "Perfect for small projects and testing",
    features: [
      "2 GB RAM",
      "20 GB NVMe Storage",
      "1 vCPU Core",
      "1 TB Bandwidth",
      "Basic DDoS Protection",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/mo",
    description: "Best for growing communities",
    features: [
      "8 GB RAM",
      "80 GB NVMe Storage",
      "4 vCPU Cores",
      "Unlimited Bandwidth",
      "Advanced DDoS Protection",
      "Priority Support",
      "Daily Backups",
      "Custom Domain",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/mo",
    description: "For large-scale deployments",
    features: [
      "32 GB RAM",
      "320 GB NVMe Storage",
      "8 vCPU Cores",
      "Unlimited Bandwidth",
      "Enterprise DDoS Protection",
      "24/7 Phone Support",
      "Hourly Backups",
      "Dedicated IP",
      "SLA Guarantee",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. No surprises. Just reliable hosting at competitive prices.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glass-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary/50 md:scale-105"
                  : "border-border/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    <Zap className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "heroOutline"}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
