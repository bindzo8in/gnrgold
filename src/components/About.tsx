import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Imported Assets
import aboutImg from "@/assets/Gold Buyer.webp";

/**
 * About Section Component
 * Displays company heritage information with animated scroll effects.
 *
 * @component
 * @returns {JSX.Element} About section markup
 */
const About: React.FC = () => {
  // Scroll animation refs
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const visualRef = useScrollAnimation();

  return (
    <section id="about" className="about-section py-24 bg-transparent relative overflow-hidden">

      <div className="luxury-bg-overlay" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div ref={titleRef} className="scroll-animate">
              <p className="about-section__subtitle text-accent text-sm font-medium tracking-widest uppercase mb-4">
                WHY CHOOSE US
              </p>
              <h2 className="about-section__title font-serif text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-8 leading-tight">
                <span className="block whitespace-nowrap">TOP GOLD BUYERS IN</span>
                <span className="block text-primary uppercase">CHENNAI</span>
              </h2>

              <div
                ref={contentRef}
                className="scroll-animate stagger-2 space-y-6 text-muted-foreground leading-relaxed mb-8"
              >
                {/* Tamil body text */}
                <p className="text-base sm:text-lg leading-relaxed">
                  உங்கள் தங்கத்தை விற்கும்போது நம்பிக்கை மிகவும் முக்கியம். அதனால் நாங்கள் முழுமையான வெளிப்படைத் தன்மையுடன், துல்லியமான எடை மற்றும் purity check மூலம் உங்கள் தங்கத்திற்கு சரியான மார்க்கெட் விலையை வழங்குகிறோம். எங்களிடம் எந்த மறைமுக கட்டணமும் இல்லை, எந்த அழுத்தமும் இல்லை. நீங்கள் நிம்மதியாக, நம்பிக்கையுடன் உங்கள் தங்கத்தை பணமாக மாற்றலாம்.
                </p>

                {/* 4 English highlight lines */}
                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span>25+ Years of Mastery in Gold Valuation & Market Trends.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span>Complete Honesty — Every piece evaluated in front of you.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span>1,000+ Satisfied Customers across Chennai.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span>Instant Payments with Zero Hidden Charges.</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/services"
                className="btn-gold text-base sm:text-lg font-medium w-full sm:w-auto inline-block text-center"
              >
                OUR SERVICES
              </Link>
            </div>

            {/* Image Gallery Section */}
            <div ref={visualRef} className="scroll-animate stagger-4 relative">
              <div className="relative">
                {/* Main Image Area */}
                <div className="about-section__image relative rounded-lg overflow-hidden max-h-[400px] max-w-[320px] mx-auto">
                  <img
                    src={aboutImg}
                    alt="GNR Gold - Expert Gold Buying Service"
                    className="w-full h-full object-cover group-hover:scale-105 elegant-transition"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant divider */}
      <div className="mt-20">
        <div className="divider-gold max-w-xs mx-auto" aria-hidden="true" />
      </div>
    </section>
  );
};

export default memo(About);
