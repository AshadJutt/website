import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MinecraftHosting from "./pages/MinecraftHosting";
import GameServerHosting from "./pages/GameServerHosting";
import VPSHosting from "./pages/VPSHosting";
import WebHosting from "./pages/WebHosting";
import FreeHosting from "./pages/FreeHosting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/minecraft-hosting" element={<MinecraftHosting />} />
          <Route path="/game-server-hosting" element={<GameServerHosting />} />
          <Route path="/vps-hosting" element={<VPSHosting />} />
          <Route path="/web-hosting" element={<WebHosting />} />
          <Route path="/free-hosting" element={<FreeHosting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
