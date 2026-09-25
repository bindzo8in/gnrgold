import React, { memo } from "react";
import PageHero from "@/components/PageHero";

const TermsPage: React.FC = memo(() => {
  return (
    <main className="min-h-screen pb-20 bg-background overflow-hidden" id="terms-page">
      <PageHero 
        title="Terms of Service" 
        subtitle="Transparency and trust in every transaction."
      />
      <div className="container mx-auto px-6 max-w-4xl mt-16 relative">
        <div className="luxury-bg-overlay" />
        <div className="luxury-card p-10 space-y-12 relative z-10">
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Terms of Service</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
              </p>
              <h3 className="font-bold text-foreground mt-4">Valuation and Purchases</h3>
              <p>
                All items presented to Gnr Gold Trade are evaluated based on current market rates and the purity of the metal. We use modern, non-destructive American technology (unless destructive testing is explicitly permitted by you) to ascertain purity. Offer values provided are non-negotiable once finalised and payments are made instantly upon agreement.
              </p>
              <h3 className="font-bold text-foreground mt-4">User Responsibilities</h3>
              <p>
                You warrant that any items you present for sale are your property or that you have the lawful right to sell them. You must present valid, government-issued photo identification as mandated by regulatory requirements.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
});

TermsPage.displayName = "TermsPage";
export default TermsPage;
