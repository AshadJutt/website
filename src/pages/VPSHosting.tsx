import { Cloud } from "lucide-react";
import ComingSoonPage from "@/components/ComingSoonPage";

const VPSHosting = () => {
  return (
    <ComingSoonPage
      icon={Cloud}
      iconColor="text-primary"
      iconBgColor="bg-primary/10"
      title="VPS Hosting"
      description="Scalable virtual private servers with NVMe storage, full root access, and hourly billing. Deploy any OS and scale instantly as your needs grow."
    />
  );
};

export default VPSHosting;
