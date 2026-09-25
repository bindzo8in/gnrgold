import React, { memo } from "react";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutPage: React.FC = memo(() => {
  const missionRef = useScrollAnimation();

  return (
    <main className="min-h-screen pb-20" id="about-page">
      <PageHero 
        title="About Us" 
        subtitle="25+ Years of Trust and Excellence in Gold Trading."
      />

      <section className="py-20 relative overflow-hidden">
        <div className="luxury-bg-overlay" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div ref={missionRef} className="space-y-12 scroll-animate">
            <div className="py-8">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-10 border-b border-accent/20 pb-6 inline-block">
                Our Story & Values
              </h2>
              
              <div className="space-y-8 text-muted-foreground text-lg sm:text-xl leading-relaxed">
                <p>
                  GNR Gold Traders stands as a symbol of trust, honesty, and reliability, backed by over 25 years of experience in the gold trading industry. Founded by <span className="text-foreground font-bold italic">N.J. Balaji Pandiyan</span>, a seasoned professional with deep expertise in gold valuation and market trends, the company is built on strong values of integrity, transparency, and fairness. Though our journey began decades ago, we officially launched our retail store in 2021 at T. Nagar, Chennai, and have since built a strong reputation for transparent and customer-friendly service.
                </p>

                <p>
                  At the heart of our business is a simple principle — <span className="text-accent font-bold">complete honesty in every transaction</span>. We ensure that every piece of gold is evaluated in front of the customer using accurate and standardized methods. Our pricing is always fair, competitive, and clearly explained, so customers feel confident and informed at every step. There are no hidden charges, no misleading practices—only genuine service you can trust.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                  <div className="luxury-card p-10 bg-card/60">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-5 uppercase tracking-wide">Dedicated Team</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">Our team of over 10 skilled professionals is trained to handle every transaction with care, respect, and confidentiality. We understand that selling gold can be an important and sometimes emotional decision, which is why we focus on creating a safe, comfortable, and pressure-free environment for our customers.</p>
                  </div>
                  <div className="luxury-card p-10 bg-card/60">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-5 uppercase tracking-wide">Proven Reputation</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">With more than 1,000 satisfied customers, GNR Gold Traders has earned a reputation for instant payments, secure transactions, and ethical business practices. Many of our customers return to us and refer others, which reflects the trust we have built over the years.</p>
                  </div>
                </div>

                <p>
                  We don’t just do business—we build relationships. Our commitment is to provide a dependable service where customers feel valued, respected, and assured that they are getting the best possible value for their gold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Testimonials />
    </main>
  );
});

AboutPage.displayName = "AboutPage";

export default AboutPage;
