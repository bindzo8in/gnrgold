import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Assets
// heroImage is now served from public/hero.webp for preloading
const heroImage = "/hero.webp";

const Hero: React.FC = memo(() => {
  const titleRef = useScrollAnimation();
  const productRef = useScrollAnimation();
  const categoriesRef = useScrollAnimation();


  const stats = [
    { name: "Transparency", value: "100%" },
    { name: "Door Service", value: "Available" },
    { name: "Happy Customers", value: "10,000+" },
    { name: "Customer Rating", value: "4.9/5" },
  ];


  return (
    <section className="relative min-h-screen bg-transparent overflow-hidden">
      <div className="luxury-bg-overlay" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-48 md:pt-36 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[70vh]">
          {/* Left: Title & CTA — shifted up on desktop */}
          <div
            ref={titleRef}
            className="scroll-animate text-center lg:text-left space-y-6 sm:space-y-8 lg:-mt-32"
          >
            <header>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 leading-tight uppercase">
                TRUSTED
                <span className="block text-accent">GOLD BUYERS</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4 font-light tracking-wide">
                GET THE HIGHEST VALUE FOR YOUR GOLD IN CHENNAI
              </p>
              {/* Tamil tagline */}
              <p className="text-accent font-semibold text-lg sm:text-xl mb-1 leading-snug">
                "உங்கள் தங்கத்திற்கு மிகச்சிறந்த விலை!"
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-4 sm:mb-6">
                சரியான எடை, நியாயமான விலை, பாதுகாப்பான சேவை – உங்கள் தங்கத்திற்கு உயர்ந்த மதிப்பு இங்கே.
              </p>
            </header>
            <div className="space-y-3 sm:space-y-4">
              <Link
                to="/contact"
                className="btn-gold text-base sm:text-lg font-medium w-full sm:w-auto inline-block text-center"
              >
                GET INSTANT CASH
              </Link>
              <p className="text-xs sm:text-sm text-muted-foreground">
                100% Transparent Process | Instant Payment
              </p>
            </div>
          </div>

          {/* Right: Hero Image with concentric ring animation */}
          <div ref={productRef} className="scroll-animate stagger-2 flex items-center justify-center">
            <div className="relative w-full max-w-[280px] md:max-w-lg flex items-center justify-center">

              {/* === Concentric Ring Layers (centered behind image) === */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-[0.6] md:scale-100" style={{ zIndex: 0 }}>

                {/* Ring 1 — outermost dashed, slow clockwise */}
                <div className="hero-ring" style={{
                  width: "480px", height: "480px",
                  border: "1.5px dashed hsl(45 100% 50% / 0.35)",
                  animationDuration: "18s",
                }} />

                {/* Ring 2 — segmented arc, medium clockwise */}
                <div className="hero-ring" style={{
                  width: "400px", height: "400px",
                  borderTop: "2px solid hsl(45 100% 55% / 0.55)",
                  borderRight: "2px solid transparent",
                  borderBottom: "2px solid hsl(45 100% 55% / 0.55)",
                  borderLeft: "2px solid transparent",
                  animationDuration: "10s",
                }} />

                {/* Ring 3 — thin solid left+right arcs, counter-clockwise */}
                <div className="hero-ring hero-ring--ccw" style={{
                  width: "320px", height: "320px",
                  border: "1px solid hsl(45 100% 60% / 0.45)",
                  borderTopColor: "transparent",
                  borderBottomColor: "transparent",
                  animationDuration: "8s",
                }} />

                {/* Ring 4 — dotted inner, slow counter-clockwise */}
                <div className="hero-ring hero-ring--ccw" style={{
                  width: "240px", height: "240px",
                  border: "1.5px dotted hsl(45 100% 65% / 0.5)",
                  animationDuration: "14s",
                }} />

                {/* Ring 5 — innermost arc, fast clockwise */}
                <div className="hero-ring" style={{
                  width: "160px", height: "160px",
                  borderTop: "2px solid hsl(45 100% 70% / 0.7)",
                  borderRight: "2px solid transparent",
                  borderBottom: "2px solid transparent",
                  borderLeft: "2px solid hsl(45 100% 70% / 0.7)",
                  animationDuration: "5s",
                }} />

                {/* Center glow */}
                <div className="absolute rounded-full pointer-events-none" style={{
                  width: "80px", height: "80px",
                  background: "radial-gradient(circle, hsl(45 100% 50% / 0.25) 0%, transparent 70%)",
                  animation: "heroGlow 3s ease-in-out infinite",
                }} />
              </div>

              {/* Image — no bg, no border */}
              <div className="group elegant-transition hover:scale-[1.02] relative z-10 w-full">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={heroImage}
                    alt="GNR Gold – Trusted Gold Buyers in Chennai"
                    className="w-full h-auto object-contain object-top group-hover:scale-105 elegant-transition"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={categoriesRef}
          className="scroll-animate stagger-3 mt-14 sm:mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={stat.name}
                className={`luxury-card p-6 text-center hover:scale-105 elegant-transition stagger-${idx + 1}`}
              >
                <p className="text-accent text-2xl font-bold mb-1">{stat.value}</p>
                <h3 className="font-serif text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase">
                  {stat.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
