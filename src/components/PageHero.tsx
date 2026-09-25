import React, { memo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

/**
 * PageHero
 * Branded page title banner using the site's maroon & gold design system.
 * Replaces the previous dark image hero — no external image required.
 */
const PageHero: React.FC<PageHeroProps> = memo(({ title, subtitle }) => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      className="relative overflow-hidden pt-48 pb-16 md:pt-56 md:pb-24"
      aria-label={`${title} page header`}
    >
      {/* Ornamental background overlay (matches site design) */}
      <div className="luxury-bg-overlay" />

      {/* Decorative gradient glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, hsl(45 100% 50% / 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Gold divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      {/* Content */}
      <div
        ref={sectionRef}
        className="container mx-auto px-6 relative z-10 text-center scroll-animate"
      >
        {/* Decorative ornament above title */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent/60" />
          <span className="w-2 h-2 rounded-full bg-accent opacity-80" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-accent/60" />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 uppercase tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-muted-foreground text-sm md:text-base font-medium max-w-xl mx-auto tracking-wide mt-2">
            {subtitle}
          </p>
        )}

        {/* Decorative ornament below title */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <span className="h-px w-24 bg-gradient-to-r from-transparent to-accent/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-60" />
          <span className="w-2 h-2 rounded-full bg-accent opacity-80" />
          <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-60" />
          <span className="h-px w-24 bg-gradient-to-l from-transparent to-accent/60" />
        </div>
      </div>

      {/* Gold divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
    </section>
  );
});

PageHero.displayName = "PageHero";

export default PageHero;
