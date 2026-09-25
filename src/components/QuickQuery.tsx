import React, { memo, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send } from "lucide-react";

const QuickQuery: React.FC = memo(() => {
  const sectionRef = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "916381553591";
    const text = `*New Query from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="quick-query" ref={sectionRef} className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto luxury-card overflow-hidden scroll-animate">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text Content */}
            <div className="p-10 md:p-16 relative bg-card text-foreground flex flex-col justify-center overflow-hidden border-r border-gold/10">
              {/* Background Image Overlay */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop" 
                  alt="Gold texture background" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                  CONTACT US
                </p>
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                  Need a Quick Query?
                </h2>
                <p className="text-white/80 leading-relaxed mb-8 text-lg">
                  Have questions about selling your gold or need an instant valuation? Fill out the form, and our experts will get back to you within minutes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Send className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium tracking-wide">Instant Response Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-16 bg-card">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="qq-name" className="text-sm font-semibold tracking-wide text-primary">FULL NAME</label>
                  <input
                    type="text"
                    id="qq-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border-b border-border py-3 px-4 focus:border-accent focus:outline-none elegant-transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="qq-phone" className="text-sm font-semibold tracking-wide text-primary">PHONE NUMBER</label>
                  <input
                    type="tel"
                    id="qq-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-background border-b border-border py-3 px-4 focus:border-accent focus:outline-none elegant-transition"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="qq-message" className="text-sm font-semibold tracking-wide text-primary">YOUR MESSAGE</label>
                  <textarea
                    id="qq-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border-b border-border py-3 px-4 focus:border-accent focus:outline-none elegant-transition resize-none"
                    placeholder="Briefly describe your query"
                  />
                </div>
                <button type="submit" className="btn-gold w-full mt-8 py-4 text-sm font-bold tracking-widest">
                  SEND QUERY NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

QuickQuery.displayName = "QuickQuery";

export default QuickQuery;
