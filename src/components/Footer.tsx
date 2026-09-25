/**
 * @file Footer.tsx
 * @description Global footer with brand details, navigation links, services, and contact info.
 * @module Components/Layout
 */

import React, { memo } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Navigation link type definition
 */
interface NavLink {
  label: string;
  href: string;
}

/**
 * Service type definition
 */
interface Service {
  label: string;
  href: string;
}

/**
 * Social link type definition
 */
interface SocialLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

// logo is now served from public/logo.webp for preloading
const logo = "/logo.webp";

const Footer: React.FC = memo(() => {
  const currentYear: number = new Date().getFullYear();

  const quickLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const services: Service[] = [
    { label: "Gold Buyer", href: "/services#gold-buyer" },
    { label: "Sell Gold", href: "/services#sell-gold" },
    { label: "Cash for Gold", href: "/services#cash-for-gold" },
    { label: "Release Pledged Gold", href: "/services#release-pledged-gold" },
    { label: "Door Step Service", href: "/services#doorstep-service" },
  ];

  const socialLinks: SocialLink[] = [
    { label: "Instagram", href: "https://www.instagram.com/gnr_goldtraderschennai", icon: Instagram },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61578871371847", icon: Facebook },
  ];

  return (
    <footer
      className="bg-background border-t border-gold/20 text-foreground py-16"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="GNR Gold Trade Logo" className="h-20 md:h-24 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              The most trusted gold buyer in Chennai. Honesty and transparency are the pillars on which we stand. We offer free valuation and instant cash for your gold.
            </p>
            <nav aria-label="Social Media">
              <ul className="flex space-x-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <section aria-labelledby="footer-services-heading">
            <h4
              id="footer-services-heading"
              className="font-semibold text-lg mb-6"
            >
              Our Services
            </h4>
            <ul className="space-y-3 text-white/80">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact Info */}
          <div id="contact space-y-3">
            <address className="not-italic">
              <h4 className="font-semibold text-lg mb-6">Contact Information</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-white/80 leading-relaxed">
                    No.30, BBC Manor, Door no.11, <br />
                    Doraiswamy Road, T. Nagar, <br />
                    Chennai - 600017.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                  <div className="flex flex-col space-y-1">
                    <a href="tel:04447916916" className="text-white/80 hover:text-white transition-colors">044 4791 6916 (Landline)</a>
                    <a href="https://wa.me/916381553591" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">+91 63815 53591 (WhatsApp)</a>
                    <a href="tel:9791625252" className="text-white/80 hover:text-white transition-colors">97916 25252</a>
                    <a href="tel:9791325252" className="text-white/80 hover:text-white transition-colors">97913 25252</a>
                    <a href="tel:9791425252" className="text-white/80 hover:text-white transition-colors">97914 25252</a>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:info@gnrgold.in" className="text-white/80 hover:text-white transition-colors">info@gnrgold.in</a>
                </li>
              </ul>
            </address>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm space-y-1">
              <p>© {currentYear} GNR Gold Trade. All rights reserved.</p>
              <p>
                Designed by {" "}
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Design Hub
                </a>
              </p>
            </div>
            <nav aria-label="Legal">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-service"
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
