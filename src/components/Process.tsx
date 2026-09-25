import React, { memo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, Scale, BadgeIndianRupee, CreditCard } from "lucide-react";

/**
 * Process Step Interface
 */
interface ProcessStep {
  title: string;
  description: string;
  icon: React.ElementType;
}

/**
 * Process Component
 * Visualizes the simple steps to sell gold at GNR Gold Trade.
 */
const Process: React.FC = memo(() => {
  const sectionRef = useScrollAnimation();

  const steps: ProcessStep[] = [
    {
      title: "Step 1: Evaluation",
      description: "Visit any of our branches or call for doorstep service. Bring your gold jewelry and identity documents.",
      icon: Search,
    },
    {
      title: "Step 2: Purity Check",
      description: "Our experts check the purity and weightage of your gold with advanced American technology.",
      icon: Scale,
    },
    {
      title: "Step 3: Valuation",
      description: "Get the best market valuation based on today's online gold rates. 100% transparent process.",
      icon: BadgeIndianRupee,
    },
    {
      title: "Step 4: Instant Cash",
      description: "Get immediate payment in cash or via NEFT / IMPS / RTGS / GPay directly to your bank account.",
      icon: CreditCard,
    },
  ];

  return (
    <section id="process" className="py-24 bg-transparent relative overflow-hidden">
      {/* Brand ornamental overlay */}
      <div className="luxury-bg-overlay" />
      <div className="container mx-auto px-6 relative z-10">
        <div ref={sectionRef} className="scroll-animate text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            HOW IT WORKS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            OUR SIMPLE PROCESS
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[15%] right-[15%] h-0.5 bg-accent/20 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative z-10 text-center flex flex-col items-center group elegant-transition"
              >
                <div className="w-20 h-20 bg-accent/10 border-2 border-accent/30 rounded-full flex items-center justify-center mb-8 group-hover:bg-accent group-hover:border-accent elegant-transition shadow-[var(--shadow-soft)]">
                  <Icon className="w-10 h-10 text-primary group-hover:text-primary-foreground elegant-transition" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-sans text-sm max-w-[250px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Process.displayName = "Process";

export default Process;
