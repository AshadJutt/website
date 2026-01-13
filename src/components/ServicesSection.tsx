import { Link } from "react-router-dom";
import { Gamepad2, Server, Cloud, Globe, Gift, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Gamepad2,
    title: "Minecraft Hosting",
    description: "Optimized for Paper, Spigot, Forge & Vanilla. One-click modpack installs with unlimited slots.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "hover:border-emerald-400/50",
    href: "/minecraft-hosting",
    comingSoon: false,
  },
  {
    icon: Server,
    title: "Game Server Hosting",
    description: "Deploy ARK, Rust, CS2, Valheim & 50+ games with low latency and full mod support.",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "hover:border-orange-400/50",
    href: "/game-server-hosting",
    comingSoon: true,
  },
  {
    icon: Cloud,
    title: "VPS Hosting",
    description: "Scalable virtual servers with NVMe storage, full root access, and hourly billing.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "hover:border-primary/50",
    href: "/vps-hosting",
    comingSoon: true,
  },
  {
    icon: Globe,
    title: "Web Hosting",
    description: "Lightning-fast WordPress & PHP hosting with free SSL, daily backups, and 99.9% uptime.",
    color: "text-violet-400",
    bgColor: "bg-violet-400/10",
    borderColor: "hover:border-violet-400/50",
    href: "/web-hosting",
    comingSoon: true,
  },
  {
    icon: Gift,
    title: "Free Hosting",
    description: "Start your journey with our free tier. Perfect for testing and small projects.",
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
    borderColor: "hover:border-rose-400/50",
    href: "/free-hosting",
    comingSoon: true,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Hosting Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From game servers to enterprise cloud infrastructure, we've got you covered
            with industry-leading performance and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group glass-card border-gradient p-6 transition-all duration-300 ${
                service.comingSoon ? "opacity-75" : "hover:-translate-y-1"
              } ${service.borderColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Coming Soon Badge */}
              {service.comingSoon && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-medium">
                    <Clock className="h-3 w-3" />
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl ${service.bgColor} mb-4 transition-transform duration-300 ${
                service.comingSoon ? "" : "group-hover:scale-110"
              }`}>
                <service.icon className={`h-6 w-6 ${service.color}`} />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-semibold mb-2 ${
                service.comingSoon ? "" : "group-hover:text-primary"
              } transition-colors`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Link or Coming Soon */}
              {service.comingSoon ? (
                <span className="text-sm text-muted-foreground/60">
                  Stay tuned for updates
                </span>
              ) : (
                <Link to={service.href}>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
