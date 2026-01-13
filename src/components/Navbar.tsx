import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Server, Zap, ChevronDown, Gamepad2, Cloud, Globe, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  { name: "Minecraft Hosting", href: "/minecraft-hosting", icon: Gamepad2, color: "text-emerald-400" },
  { name: "Game Server Hosting", href: "/game-server-hosting", icon: Server, color: "text-orange-400" },
  { name: "VPS Hosting", href: "/vps-hosting", icon: Cloud, color: "text-primary" },
  { name: "Web Hosting", href: "/web-hosting", icon: Globe, color: "text-violet-400" },
  { name: "Free Hosting", href: "/free-hosting", icon: Gift, color: "text-rose-400" },
];

const navLinks = [
  { name: "Features", href: "/#features" },
  { name: "Locations", href: "/#locations" },
  { name: "Pricing", href: "/#pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/30 group-hover:border-primary/60 transition-all duration-300">
              <Server className="h-5 w-5 text-primary" />
              <div className="absolute inset-0 rounded-lg bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-foreground">Cloud</span>
              <span className="text-primary">Host</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-border bg-card shadow-xl z-50"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className={`p-2 rounded-lg bg-secondary ${service.color}`}>
                          <service.icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm" className="gap-2">
              <Zap className="h-4 w-4" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {/* Mobile Services Accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-2 py-2 text-sm font-medium text-muted-foreground"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-1">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary transition-colors"
                        onClick={() => {
                          setIsOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        <service.icon className={`h-4 w-4 ${service.color}`} />
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="gap-2">
                  <Zap className="h-4 w-4" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
