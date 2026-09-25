import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Services from "@/components/Services";
import Process from "@/components/Process";
import PageHero from "@/components/PageHero";

// Assets
import imgGoldBuyer from "@/assets/Gold Buyer.webp";
import imgSellGold from "@/assets/Sell Gold.webp";
import imgCashForGold from "@/assets/Cash for Gold.webp";
import imgReleasePledged from "@/assets/Release Pledged Gold.webp";

const ServicesPage: React.FC = memo(() => {
  const { hash } = useLocation();

  // Animation Refs
  const goldBuyerRef = useScrollAnimation();
  const sellGoldRef = useScrollAnimation();
  const cashForGoldRef = useScrollAnimation();
  const pledgeRef = useScrollAnimation();
  const doorstepRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "தங்கத்தை விற்க பாதுகாப்பானதா?",
      answer: "ஆம், முழு பாதுகாப்புடன் செயல்படுகிறோம்."
    },
    {
      question: "உடைந்த நகை வாங்குவீர்களா?",
      answer: "ஆம், எல்லா வகை தங்கங்களும் வாங்கப்படும்."
    },
    {
      question: "எவ்வளவு நேரம் ஆகும்?",
      answer: "10–15 நிமிடங்களில் process முடியும்."
    },
    {
      question: "payment எப்படி?",
      answer: "உடனடி cash / bank transfer."
    }
  ];

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <main className="min-h-screen pb-20" id="services-page">
      <PageHero 
        title="Our Services" 
        subtitle="Professional gold buying with instant cash."
      />

      <Services showLearnMore={false} />

      {/* Detailed Services Sections */}
      <div className="space-y-4">
        
        {/* Gold Buyer Detail Section */}
        <section 
          id="premium-valuation" 
          ref={goldBuyerRef} 
          className="py-20 bg-transparent relative overflow-hidden scroll-mt-32 border-b border-primary/10"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-animate">
              <div className="order-2 lg:order-1">
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">Premium Valuation</span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Expert Gold Buyer in Chennai</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  GNR Gold Trade is the pioneer of **XRF purity checking technology** in Chennai. Unlike traditional methods that require rubbing or melting your gold, our computerized process provides a **100% accurate, non-destructive valuation** in just 60 seconds.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>ISO Certified Purity Standards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>No Chemical Usage (Eco-friendly)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Live Market Rate Comparison</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Transparent Weight Analysis</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 h-[450px] relative group">
                <img src={imgGoldBuyer} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" alt="Gold Buyer Valuation" />
              </div>
            </div>
          </div>
        </section>

        {/* Sell Gold Detail Section */}
        <section 
          id="seamless-process" 
          ref={sellGoldRef} 
          className="py-20 bg-transparent relative overflow-hidden scroll-mt-32 border-b border-primary/10"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-animate">
              <div className="h-[450px] relative group">
                <img src={imgSellGold} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" alt="Sell Gold Process" />
              </div>
              <div>
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">Seamless Process</span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Transparency You Can Trust</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Selling your family heirlooms or unused jewelry shouldn't be a gamble. At GNR, we follow a strict **3-step validation protocol** that eliminates hidden deductions. We provide a detailed breakdown of the Hallmark purity, gross weight, and the net gold value.
                </p>
                <div className="space-y-4">
                  <div className="flex space-x-4 p-4 bg-silk/30 rounded-xl">
                    <div className="text-2xl font-serif font-bold text-accent">01</div>
                    <div>
                      <h4 className="font-bold text-primary text-sm uppercase mb-1">Visual Appraisal</h4>
                      <p className="text-xs text-muted-foreground">Expert inspection of Hallmark and craftsmanship.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4 p-4 bg-silk/30 rounded-xl">
                    <div className="text-2xl font-serif font-bold text-accent">02</div>
                    <div>
                      <h4 className="font-bold text-primary text-sm uppercase mb-1">XRF Calibration</h4>
                      <p className="text-xs text-muted-foreground">Computerized purity testing with printed certificate.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4 p-4 bg-silk/30 rounded-xl">
                    <div className="text-2xl font-serif font-bold text-accent">03</div>
                    <div>
                      <h4 className="font-bold text-primary text-sm uppercase mb-1">Spot Payment</h4>
                      <p className="text-xs text-muted-foreground">Final calculation and instant payout approval.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cash for Gold Detail Section */}
        <section 
          id="instant-liquidity" 
          ref={cashForGoldRef} 
          className="py-20 bg-transparent relative overflow-hidden scroll-mt-32 border-b border-primary/10"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-animate">
              <div className="order-2 lg:order-1">
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">Instant Liquidity</span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Secure Cash Settlements</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  When you need immediate funds, every minute counts. We offer **instant settlement options** while adhering to full government compliance and RBI guidelines. Your data and transaction details are handled with **military-grade confidentiality**.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-border rounded-lg group hover:border-accent transition-colors">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1 font-bold">Limit-compliant</p>
                    <p className="font-bold text-primary">CASH PAYMENTS</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg group hover:border-accent transition-colors">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1 font-bold">Instant</p>
                    <p className="font-bold text-primary">UPI & IMPS</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg group hover:border-accent transition-colors">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1 font-bold">Secure</p>
                    <p className="font-bold text-primary">RTGS / NEFT</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg group hover:border-accent transition-colors">
                    <p className="text-[10px] text-muted-foreground uppercase mb-1 font-bold">Verified</p>
                    <p className="font-bold text-primary">BANK TRANSFERS</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 h-[450px] relative group">
                <img src={imgCashForGold} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" alt="Instant Cash for Gold" />
              </div>
            </div>
          </div>
        </section>

        {/* Pledged Gold Detail Section */}
        <section 
          id="financial-relief" 
          ref={pledgeRef} 
          className="py-20 bg-transparent relative overflow-hidden scroll-mt-32"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-animate">
              <div className="h-[450px] relative group">
                <img src={imgReleasePledged} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" alt="Release Pledged Gold" />
              </div>
              <div>
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">Financial Relief</span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6">Release Pledged Assets</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Are you trapped in a high-interest cycle with bank auctions or pawnshop penalties? GNR Gold Traders provides the capital to **close your gold mortgage** immediately. We handle the paperwork, settle the principal and interest, and release your assets for a full-value buyout.
                </p>
                <div className="luxury-card p-6 border-l-4 border-l-accent bg-accent/5">
                  <h5 className="font-bold text-primary mb-2 uppercase text-xs">How it Works:</h5>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    We accompany you to the bank/pawn shop, pay the outstanding amount directly, retrieve the gold, analyze it at our facility, and pay you the balance amount immediately at the current market rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <section id="doorstep-service" ref={doorstepRef} className="py-20 bg-transparent relative overflow-hidden scroll-animate">
        <div className="luxury-bg-overlay" />
        <div className="container mx-auto px-6 max-w-4xl ">
        <div className="space-y-12">
          <div className="luxury-card p-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4 uppercase tracking-widest">Doorstep Service</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At GNR Gold Trade, we understand that sometimes you cannot make it to us—so we bring our services directly to your doorstep! Our doorstep gold-buying service is designed to give you the convenience of selling your gold from the comfort of your home.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li><strong className="text-primary">Free Pickup:</strong> We offer free doorstep pickup services, ensuring you don't have to leave your home to get the best value for your gold.</li>
              <li><strong className="text-primary">Safe & Secure:</strong> Our team is trained to handle transactions with the utmost professionalism and security. Your items are in safe hands.</li>
              <li><strong className="text-primary">Free Valuation:</strong> Our experts will evaluate your gold right at your doorstep and offer you a fair, competitive price based on the current market value.</li>
              <li><strong className="text-primary">Instant Cash Payments:</strong> Once you accept the offer, you'll receive cash immediately or through your preferred payment method.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12 scroll-animate">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              அடிக்கடி கேட்கப்படும் கேள்விகள்
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              FAQ (கேள்வி பதில்கள்)
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="luxury-card p-0 overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gold/5 transition-colors group"
                >
                  <h4 className="font-bold text-primary flex items-center gap-3 text-lg">
                    <span className="text-accent">❓</span> {faq.question}
                  </h4>
                  <div className={`w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'rotate-180 bg-gold text-primary-foreground' : 'group-hover:border-gold/50'}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 border-t border-gold/10' : 'max-h-0'}`}
                >
                  <div className="p-6 bg-gold/5">
                    <p className="text-muted-foreground flex items-start gap-3">
                      <span className="text-accent text-lg">👉</span> {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
    </main>
  );
});

ServicesPage.displayName = "ServicesPage";

export default ServicesPage;
