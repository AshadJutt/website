import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface ServicePageLayoutProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  plans: Plan[];
  specs: { label: string; value: string }[];
  ctaTitle: string;
  ctaDescription: string;
}

const ServicePageLayout = ({
  icon: Icon,
  iconColor,
  iconBgColor,
  title,
  subtitle,
  description,
  features,
  plans,
  specs,
  ctaTitle,
  ctaDescription,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`inline-flex p-4 rounded-2xl ${iconBgColor} mb-6`}>
              <Icon className={`h-12 w-12 ${iconColor}`} />
            </div>
            <p className="text-primary font-semibold mb-4">{subtitle}</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                Get Started Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="lg">
                View All Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a seamless hosting experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl ${iconBgColor} mb-4`}>
                  <feature.icon className={`h-6 w-6 ${iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Specifications</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {specs.map((spec) => (
              <div key={spec.label} className="glass-card p-4 text-center">
                <p className={`text-2xl font-bold ${iconColor} mb-1`}>{spec.value}</p>
                <p className="text-sm text-muted-foreground">{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Plan</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing to match your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative glass-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? "border-primary/50 md:scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{ctaTitle}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Link to="/#locations">
                <Button variant="heroOutline" size="lg">
                  View Locations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
