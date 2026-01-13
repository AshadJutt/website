import { Signal, Globe as GlobeIcon } from "lucide-react";
import { Suspense, lazy } from "react";

const Globe = lazy(() => import("./Globe"));

const locations = [
  {
    country: "India",
    city: "Mumbai",
    flag: "🇮🇳",
    latency: "< 5ms",
    status: "online",
  },
  {
    country: "Singapore",
    city: "Singapore",
    flag: "🇸🇬",
    latency: "< 8ms",
    status: "online",
  },
  {
    country: "Germany",
    city: "Frankfurt",
    flag: "🇩🇪",
    latency: "< 12ms",
    status: "online",
  },
  {
    country: "USA",
    city: "Los Angeles",
    flag: "🇺🇸",
    latency: "< 15ms",
    status: "online",
  },
  {
    country: "Netherlands",
    city: "Amsterdam",
    flag: "🇳🇱",
    latency: "< 10ms",
    status: "online",
  },
  {
    country: "Australia",
    city: "Sydney",
    flag: "🇦🇺",
    latency: "< 20ms",
    status: "online",
  },
];

const GlobeLoader = () => (
  <div className="w-full h-[500px] flex items-center justify-center">
    <div className="text-center">
      <GlobeIcon className="h-16 w-16 text-primary/50 animate-pulse mx-auto mb-4" />
      <p className="text-muted-foreground text-sm">Loading 3D Globe...</p>
    </div>
  </div>
);

const LocationsSection = () => {
  return (
    <section id="locations" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Global</span> Data Centers
          </h2>
          <p className="text-lg text-muted-foreground">
            Deploy closer to your users with our worldwide network of data centers.
            Ultra-low latency guaranteed.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Location Cards */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Active Locations
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {locations.map((location, index) => (
                <div
                  key={location.city}
                  className="group glass-card p-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Flag */}
                  <div className="text-3xl">{location.flag}</div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{location.city}</h4>
                    <p className="text-xs text-muted-foreground truncate">{location.country}</p>
                  </div>

                  {/* Status & Latency */}
                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1 justify-end mb-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-emerald-400 font-medium uppercase">Live</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Signal className="h-2.5 w-2.5" />
                      <span className="text-[10px] font-mono">{location.latency}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="glass-card p-4 mt-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text">6+</div>
                  <div className="text-xs text-muted-foreground">Locations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">&lt;20ms</div>
                  <div className="text-xs text-muted-foreground">Avg Latency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Globe */}
          <div className="glass-card p-4 lg:p-6 overflow-hidden">
            <Suspense fallback={<GlobeLoader />}>
              <Globe />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
