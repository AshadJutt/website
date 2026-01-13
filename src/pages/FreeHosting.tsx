import { Gift } from "lucide-react";
import ComingSoonPage from "@/components/ComingSoonPage";

const FreeHosting = () => {
  return (
    <ComingSoonPage
      icon={Gift}
      iconColor="text-rose-400"
      iconBgColor="bg-rose-400/10"
      title="Free Hosting"
      description="Start your journey with our free tier. Perfect for testing, learning, and small projects. No credit card required."
    />
  );
};

export default FreeHosting;
