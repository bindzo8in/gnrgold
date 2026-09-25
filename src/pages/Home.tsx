import React, { memo } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import QuickQuery from "@/components/QuickQuery";

/**
 * Home
 * Renders the main homepage with all key sections.
 * The Hero component ("TRUSTED GOLD BUYERS / GET INSTANT CASH") serves as the primary hero.
 */
const Home: React.FC = memo(() => {
  return (
    <main className="min-h-screen" id="home-page">
      {/* Hero Section - Primary landing section */}
      <section aria-label="Hero" id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section aria-labelledby="about-heading" id="about">
        <About />
      </section>

      {/* Services Section */}
      <section aria-labelledby="services-heading" id="services">
        <Services />
      </section>

      {/* Tamil Trust Banner */}
      <section aria-label="Tamil trust statement" className="py-16 bg-transparent relative overflow-hidden">
        <div className="luxury-bg-overlay" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <div className="luxury-card p-8 sm:p-12 border-l-4 border-r-4 border-accent/40">
            <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">நம்மை நம்புங்கள்</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 leading-snug">
              "நம்பிக்கை எங்கள் அடையாளம்"
            </h2>
            <div className="divider-gold w-20 mx-auto mb-6" />
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              நாங்கள் பல ஆண்டுகளாக ஆயிரக்கணக்கான வாடிக்கையாளர்களுக்கு நம்பிக்கையான சேவை வழங்கி வருகிறோம்.
              <br />
              <span className="text-accent font-medium">உங்கள் தங்கம் பாதுகாப்பாக கையாளப்படும்.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section aria-labelledby="process-heading" id="process">
        <Process />
      </section>

      {/* Testimonials Section */}
      <section aria-labelledby="testimonials-heading" id="testimonials">
        <Testimonials />
      </section>

      {/* Quick Query Section */}
      <section aria-labelledby="quick-query-heading" id="quick-query">
        <QuickQuery />
      </section>


    </main>
  );
});

Home.displayName = "Home";

export default Home;
