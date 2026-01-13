import { Globe } from "lucide-react";
import ComingSoonPage from "@/components/ComingSoonPage";

const WebHosting = () => {
  return (
    <ComingSoonPage
      icon={Globe}
      iconColor="text-violet-400"
      iconBgColor="bg-violet-400/10"
      title="Web Hosting"
      description="Lightning-fast WordPress & PHP hosting with free SSL, daily backups, and 99.9% uptime. Perfect for blogs, portfolios, and business websites."
    />
  );
};

export default WebHosting;
