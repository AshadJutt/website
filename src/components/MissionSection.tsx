import { Target, Users, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Performance First",
    description: "We obsess over every millisecond to deliver the fastest hosting experience possible.",
  },
  {
    icon: Shield,
    title: "Reliability Always",
    description: "Your servers stay online 24/7 with our enterprise-grade infrastructure and monitoring.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by gamers, for gamers. We understand what you need because we need it too.",
  },
  {
    icon: Target,
    title: "Innovation Forward",
    description: "Constantly pushing boundaries with cutting-edge technology and features.",
  },
];

const MissionSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Target className="h-4 w-4" />
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Empowering Gamers &{" "}
            <span className="text-primary">Developers</span> Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe everyone deserves access to premium hosting infrastructure. 
            Our mission is to democratize high-performance cloud hosting, making it 
            accessible, affordable, and easy to use for gamers, developers, and 
            businesses of all sizes.
          </p>
        </div>

        {/* Mission Statement Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-primary/5">
            <blockquote className="text-xl md:text-2xl font-medium text-center leading-relaxed">
              "To provide the fastest, most reliable, and most affordable hosting 
              solutions that enable creators to build, play, and grow without limits."
            </blockquote>
            <p className="text-center text-muted-foreground mt-6">— CloudHost Team</p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
