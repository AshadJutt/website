import { 
  Gamepad2, 
  Zap, 
  Shield, 
  HardDrive, 
  Users, 
  Download, 
  Settings,
  Globe,
  Clock
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const features = [
  {
    icon: Zap,
    title: "One-Click Modpacks",
    description: "Install popular modpacks like RLCraft, Pixelmon, and SkyFactory with a single click.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade protection keeps your server online during attacks.",
  },
  {
    icon: HardDrive,
    title: "NVMe Storage",
    description: "Ultra-fast SSD storage for quick world loading and chunk generation.",
  },
  {
    icon: Users,
    title: "Unlimited Slots",
    description: "No artificial player limits. Host as many players as your resources allow.",
  },
  {
    icon: Download,
    title: "Free Backups",
    description: "Automatic daily backups with easy one-click restore functionality.",
  },
  {
    icon: Settings,
    title: "Full Control Panel",
    description: "Pterodactyl-based panel for complete server management and console access.",
  },
  {
    icon: Globe,
    title: "Custom Domains",
    description: "Connect your own domain for a professional server address.",
  },
  {
    icon: Clock,
    title: "Instant Setup",
    description: "Your server is ready in under 60 seconds after purchase.",
  },
  {
    icon: Gamepad2,
    title: "All Versions",
    description: "Support for Vanilla, Paper, Spigot, Forge, Fabric, and Bedrock.",
  },
];

const plans = [
  {
    name: "Stone",
    price: "$2",
    period: "/mo",
    description: "Perfect for small servers",
    features: [
      "2 GB RAM",
      "10 GB NVMe Storage",
      "Unlimited Slots",
      "1 Backup Slot",
      "Basic DDoS Protection",
      "Pterodactyl Panel",
    ],
  },
  {
    name: "Diamond",
    price: "$8",
    period: "/mo",
    description: "Best for growing communities",
    features: [
      "8 GB RAM",
      "50 GB NVMe Storage",
      "Unlimited Slots",
      "5 Backup Slots",
      "Advanced DDoS Protection",
      "Priority Support",
      "Custom Domain",
      "Modpack Support",
    ],
    popular: true,
  },
  {
    name: "Netherite",
    price: "$24",
    period: "/mo",
    description: "For large networks",
    features: [
      "24 GB RAM",
      "150 GB NVMe Storage",
      "Unlimited Slots",
      "Unlimited Backups",
      "Enterprise DDoS Protection",
      "24/7 Phone Support",
      "Dedicated IP",
      "Multi-Server Support",
      "BungeeCord/Velocity",
    ],
  },
];

const specs = [
  { label: "CPU", value: "Ryzen 9" },
  { label: "Uptime", value: "99.99%" },
  { label: "Latency", value: "<5ms" },
  { label: "Setup", value: "Instant" },
];

const MinecraftHosting = () => {
  return (
    <ServicePageLayout
      icon={Gamepad2}
      iconColor="text-emerald-400"
      iconBgColor="bg-emerald-400/10"
      title="Minecraft Server Hosting"
      subtitle="OPTIMIZED FOR MINECRAFT"
      description="High-performance Minecraft hosting with instant modpack installs, unlimited player slots, and 24/7 uptime. Perfect for vanilla, modded, or network servers."
      features={features}
      plans={plans}
      specs={specs}
      ctaTitle="Ready to Build Your World?"
      ctaDescription="Join thousands of server owners who trust us with their Minecraft communities. Start your free trial today."
    />
  );
};

export default MinecraftHosting;
