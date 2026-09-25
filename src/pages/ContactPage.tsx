import React, { memo, useState } from "react";

import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";

const ContactPage: React.FC = memo(() => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "916381553591";
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };
  return (
    <main className="min-h-screen pb-20 overflow-hidden relative" id="contact-page">
      <div className="luxury-bg-overlay" />
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch for instant gold valuation."
      />

      <section className="py-12 bg-transparent relative">
        <div className="luxury-bg-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-bold text-primary mb-2">
                GET IN TOUCH
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are always available to assist you with your gold-buying or valuation needs.<br/>
                Visit us today or reach out through various communication channels below.
              </p>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    No.30, BBC Manor, Door no.11, <br/>
                    Doraiswamy Road, T. Nagar, <br/>
                    Chennai - 600017.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Contact Number</h3>
                  <p className="text-muted-foreground flex flex-col">
                    <a href="tel:04447916916" className="hover:text-primary transition-colors">044 4791 6916 (Landline)</a>
                    <a href="https://wa.me/916381553591" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+91 63815 53591 (WhatsApp)</a>
                    <a href="tel:9791625252" className="hover:text-primary transition-colors">97916 25252</a>
                    <a href="tel:9791325252" className="hover:text-primary transition-colors">97913 25252</a>
                    <a href="tel:9791425252" className="hover:text-primary transition-colors">97914 25252</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Our Mail</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@gnrgold.in" className="hover:text-primary transition-colors">info@gnrgold.in</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="luxury-card p-8">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                SEND US A MESSAGE
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" 
                    placeholder="Your Phone Number" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="btn-gold w-full text-sm font-bold tracking-widest py-4">
                  SUBMIT TO WHATSAPP
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-transparent relative overflow-hidden">
        <div className="luxury-bg-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="rounded-xl overflow-hidden shadow-2xl h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7034.565470156182!2d80.23777671018875!3d13.053235679557181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52678bdd527011%3A0x93d1d4d16266a883!2sGNR%20GOLD%20TRADERS!5e1!3m2!1sen!2sin!4v1775297321713!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="GNR Gold Traders Location"
            ></iframe>
          </div>
        </div>
      </section>


    </main>
  );
});

ContactPage.displayName = "ContactPage";

export default ContactPage;
