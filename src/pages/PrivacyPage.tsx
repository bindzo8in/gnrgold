import React, { memo } from "react";
import PageHero from "@/components/PageHero";

const PrivacyPage: React.FC = memo(() => {
  return (
    <main className="min-h-screen pb-20 bg-background overflow-hidden" id="privacy-page">
      <PageHero 
        title="Privacy Policy" 
        subtitle="Your data security and privacy are our priority."
      />
      <div className="container mx-auto px-6 max-w-4xl mt-16 relative">
        <div className="luxury-bg-overlay" />
        <div className="luxury-card p-10 space-y-12 relative z-10">
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At GNR Gold Trade, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or interact with our website or branches.
              </p>
              <h3 className="font-bold text-foreground mt-4">Information We Collect</h3>
              <p>
                When you visit our store or use our doorstep service, we collect certain information, including your name, contact details, identification documents (as required by law for purchasing gold), and payment information.
              </p>
              <h3 className="font-bold text-foreground mt-4">How We Use Your Information</h3>
              <p>
                We use the collected information primarily to fulfill evaluating and purchasing your gold. Additionally, we use this information to communicate with you, screen our transactions for potential risk or fraud, and, when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
});

PrivacyPage.displayName = "PrivacyPage";
export default PrivacyPage;
