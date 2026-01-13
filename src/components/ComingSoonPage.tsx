import { Link } from "react-router-dom";
import { Clock, ArrowLeft, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LucideIcon } from "lucide-react";

interface ComingSoonPageProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
}

const ComingSoonPage = ({
  icon: Icon,
  iconColor,
  iconBgColor,
  title,
  description,
}: ComingSoonPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-20">
            {/* Icon */}
            <div className={`inline-flex p-6 rounded-2xl ${iconBgColor} mb-8`}>
              <Icon className={`h-16 w-16 ${iconColor}`} />
            </div>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              Coming Soon
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            {/* Additional Info */}
            <div className="glass-card p-8 rounded-2xl border border-border/50 mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Bell className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Get Notified</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                We're working hard to bring you this service. Leave your email to be the first to know when we launch!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                />
                <Button className="px-6">
                  Notify Me
                </Button>
              </div>
            </div>

            {/* Back Link */}
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoonPage;
