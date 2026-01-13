import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How quickly can I get my server up and running?",
    answer: "Your server is deployed instantly! Once you complete your order, your game server or VPS will be ready within seconds. Our automated provisioning system ensures you can start playing or developing immediately.",
  },
  {
    question: "What games do you support for game server hosting?",
    answer: "We support 100+ games including Minecraft (Java & Bedrock), ARK: Survival Evolved, Rust, Valheim, Counter-Strike, Team Fortress 2, Terraria, and many more. If you don't see your game listed, contact us and we'll work on adding support.",
  },
  {
    question: "Do you offer DDoS protection?",
    answer: "Yes! All our servers come with enterprise-grade DDoS protection at no extra cost. We use advanced mitigation techniques to keep your servers online and protected against attacks of any size.",
  },
  {
    question: "Can I upgrade my server resources later?",
    answer: "Absolutely! You can upgrade or downgrade your server resources at any time through our control panel. Changes are applied instantly with no downtime, so your players won't experience any interruption.",
  },
  {
    question: "What's your uptime guarantee?",
    answer: "We guarantee 99.9% uptime across all our services. Our infrastructure is built with redundancy at every level, and we offer service credits if we ever fall below our SLA commitment.",
  },
  {
    question: "Do you offer free trials or money-back guarantee?",
    answer: "Yes! We offer a 7-day money-back guarantee on all paid plans, no questions asked. We also have a free hosting tier so you can try our platform before committing to a paid plan.",
  },
  {
    question: "Where are your data centers located?",
    answer: "We have data centers in 6 global locations: Mumbai, Singapore, Frankfurt, Los Angeles, Amsterdam, and Sydney. This ensures low latency no matter where you or your players are located.",
  },
  {
    question: "How does your support work?",
    answer: "We offer 24/7 support through live chat, email, and Discord. Our support team consists of experienced system administrators and gamers who understand your needs. Average response time is under 5 minutes for live chat.",
  },
];

const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div 
      className={cn(
        "rounded-xl border bg-card/80 backdrop-blur-sm transition-all duration-300",
        isOpen ? "border-primary/40 shadow-lg shadow-primary/5" : "border-border/60 hover:border-border"
      )}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <span className="text-base md:text-lg font-semibold text-foreground pr-4">
          {question}
        </span>
        <ChevronDown 
          className={cn(
            "h-5 w-5 text-primary shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <p className="text-base text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, 
            feel free to reach out to our support team.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
