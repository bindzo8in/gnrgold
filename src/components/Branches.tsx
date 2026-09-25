import React, { memo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin } from "lucide-react";

const branches = [
  {
    name: "Chennai (T. Nagar)",
    address: "No.30, BBC Manor, Door no.11, Doraiswamy Road, T. Nagar, Chennai - 600017",
  },
  {
    name: "Coimbatore",
    address: "Visit our Coimbatore branch for expert gold valuation and instant cash.",
  },
  {
    name: "Madurai",
    address: "Our Madurai branch offers the most transparent gold buying process.",
  },
];

const Branches: React.FC = memo(() => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="branches" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="scroll-animate text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            OUR LOCATIONS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            OUR BRANCHES
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className={`luxury-card p-8 text-center group hover:bg-primary hover:text-primary-foreground elegant-transition scroll-animate stagger-${idx + 1}`}
            >
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-accent/40 elegant-transition">
                <MapPin className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">
                {branch.name}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed font-sans text-sm">
                {branch.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Branches.displayName = "Branches";

export default Branches;
