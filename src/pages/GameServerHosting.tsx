import { Server } from "lucide-react";
import ComingSoonPage from "@/components/ComingSoonPage";

const GameServerHosting = () => {
  return (
    <ComingSoonPage
      icon={Server}
      iconColor="text-orange-400"
      iconBgColor="bg-orange-400/10"
      title="Game Server Hosting"
      description="Deploy ARK, Rust, CS2, Valheim & 50+ games with low latency and full mod support. High-performance servers built for serious gamers."
    />
  );
};

export default GameServerHosting;
