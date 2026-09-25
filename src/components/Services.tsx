import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Coins, Banknote, Landmark, ShieldCheck } from "lucide-react";

// Assets
import imgGoldBuyer from "@/assets/Gold Buyer.webp";
import imgSellGold from "@/assets/Sell Gold.webp";
import imgCashForGold from "@/assets/Cash for Gold.webp";
import imgReleasePledged from "@/assets/Release Pledged Gold.webp";

/**
 * Service Item Interface
 */
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ServicesProps {
  showLearnMore?: boolean;
}

/**
 * Services Component
 * Showcases the main gold trading services offered by GNR Gold Trade.
 */
const Services: React.FC<ServicesProps> = memo(({ showLearnMore = true }) => {
  const sectionRef = useScrollAnimation();

  const services: (ServiceItem & { image: string })[] = [
    {
      id: "premium-valuation",
      title: "Gold Buyer",
      description: "Get accurate, non-destructive valuation with our computerized XRF technology. We buy gold in any form—unused, broken, or scrap—at the best market rates in Chennai.",
      icon: Coins,
      image: imgGoldBuyer,
    },
    {
      id: "seamless-process",
      title: "Sell Gold",
      description: "Selling your old jewelry shouldn't be stressful. We offer a simple 3-step process with live market price transparency and zero extraction of stones/beads during weightage.",
      icon: Banknote,
      image: imgSellGold,
    },
    {
      id: "instant-liquidity",
      title: "Cash for Gold",
      description: "Need instant funds? We provide immediate payment through cash (within RBI limits), UPI, IMPS, or NEFT. Our ISO-certified process ensures 100% security for all transactions.",
      icon: ShieldCheck,
      image: imgCashForGold,
    },
    {
      id: "financial-relief",
      title: "Release Pledged Gold",
      description: "Trapped in high-interest loans? We assist in closing your gold mortgage at banks or pawn shops. After release, we buy the gold at its full value and pay you the balance instantly.",
      icon: Landmark,
      image: imgReleasePledged,
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-transparent relative overflow-hidden">
      <div className="luxury-bg-overlay" />
      <div className="container mx-auto px-6">
        <div className="scroll-animate text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            WHAT WE DO
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            OUR PREMIUM SERVICES
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`luxury-card flex flex-col group p-0 overflow-hidden rounded-none rounded-b-xl hover:bg-card/60 hover:border-gold/30 hover:shadow-gold elegant-transition scroll-animate stagger-${idx + 1}`}
              >
                {/* Product Image — full bleed, no side padding */}
                <div className="h-64 sm:h-72 overflow-hidden relative w-full">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>

                <div className="p-8 flex flex-col items-center text-center">
                  <h3 className="font-serif text-xl font-bold mb-4 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-sans text-sm mb-6 flex-grow ">
                    {service.description}
                  </p>
                  {showLearnMore && (
                    <Link 
                      to={`/services#${service.id}`} 
                      className="text-xs font-bold tracking-widest text-accent uppercase transition-all flex items-center hover:translate-x-1"
                    >
                      LEARN MORE <span className="ml-1">→</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

// Fixing icon reference
const shieldCheck = ShieldCheck;

Services.displayName = "Services";

export default Services;
