/**
 * @file Header.tsx
 * @description Main navigation header with responsive menu and scroll behavior.
 * @module Components/Layout
 */

import React, { useState, useEffect, memo } from "react";
import { Menu, X, ChevronDown, Phone, Smartphone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// logo is now served from public/logo.webp for preloading
const logo = "/logo.webp";

/**
 * Navigation link type
 */
interface NavLink {
  label: string;
  href?: string;
  sublinks?: { label: string; href: string }[];
}

const Header: React.FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    {
      label: "More",
      sublinks: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${(isScrolled || isMenuOpen)
          ? "bg-background/95 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent"
        }`}
      aria-label="Main navigation"
    >
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 border-b border-primary/20">
        <div className="container mx-auto px-4 md:px-6 flex flex-row justify-center md:justify-end items-center gap-4 md:gap-8">
          <a href="tel:04447916916" className="flex items-center text-[10px] xs:text-xs md:text-base font-bold tracking-wide hover:text-white transition-colors">
            <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
            044 4791 6916
          </a>
          <a href="tel:9791625252" className="flex items-center text-[10px] xs:text-xs md:text-base font-bold tracking-wide hover:text-white transition-colors">
            <Smartphone className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
            97916 25252
          </a>
        </div>
      </div>

      <nav className={`container mx-auto px-6 transition-all duration-500 ${(isScrolled || isMenuOpen) ? "py-2 md:py-1" : "py-6 md:py-4"}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[300px]">
            <Link
              to="/"
              className="flex items-center inline-block"
              aria-label="Go to home page"
            >
              <img
                src={logo}
                alt="GNR Gold Trade Logo"
                loading="eager"
                fetchPriority="high"
                className={`w-auto object-contain transition-all duration-500 origin-left ${isScrolled ? "h-20 md:h-24" : "h-20 md:h-28"
                  }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {navLinks.map(({ label, href, sublinks }) => (
              <li key={label} className="relative group">
                {href ? (
                  <Link
                    to={href}
                    className={`font-semibold text-lg transition-colors duration-200 py-4 ${isScrolled
                      ? (isActive(href) ? "text-accent" : "text-foreground hover:text-accent")
                      : (isActive(href) ? "text-accent" : "text-white hover:text-accent")
                      }`}
                  >
                    {label}
                  </Link>
                ) : (
                  <span className={`flex items-center font-semibold text-lg transition-colors duration-200 py-4 cursor-pointer ${isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-accent"
                    }`}>
                    {label} <ChevronDown className="ml-1 w-4 h-4" />
                  </span>
                )}

                {/* Desktop Dropdown */}
                {sublinks && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-card shadow-[var(--shadow-elegant)] rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 z-50">
                    {sublinks.map((sublink) => (
                      <Link
                        key={sublink.label}
                        to={sublink.href}
                        className={`block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-accent/5 transition-colors ${isActive(sublink.href) ? "text-accent bg-accent/5" : ""
                          }`}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Section (CTA + Mobile menu toggle) */}
          <div className="w-[200px] flex items-center justify-end space-x-4">
            <a href="tel:9791625252" className="hidden lg:inline-block btn-gold py-2 px-6 text-sm font-bold">
              CALL NOW
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${(isScrolled || isMenuOpen) ? "text-foreground" : "text-white"}`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <ul className="flex flex-col space-y-4 pt-4">
              {navLinks.map(({ label, href, sublinks }) => (
                <li key={label} className="flex flex-col">
                  {href ? (
                    <Link
                      to={href}
                      onClick={closeMenu}
                      className={`text-left transition-colors duration-200 font-bold py-2 text-xl text-foreground hover:text-accent ${isActive(href) ? "text-accent" : ""
                        }`}
                    >
                      {label}
                    </Link>
                  ) : (
                    <div className="py-2">
                      <button
                        onClick={() => setActiveMobileDropdown(activeMobileDropdown === label ? null : label)}
                        className="w-full flex items-center justify-between text-foreground font-bold py-2 text-xl"
                      >
                        {label} 
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeMobileDropdown === label ? "rotate-180 text-accent" : ""}`} />
                      </button>
                      {sublinks && activeMobileDropdown === label && (
                        <div className="flex flex-col pl-4 space-y-2 border-l border-accent/20 mt-2 animate-fadeIn">
                          {sublinks.map((sublink) => (
                            <Link
                              key={sublink.label}
                              to={sublink.href}
                              onClick={closeMenu}
                              className={`block py-2 text-sm transition-colors duration-200 text-foreground/80 hover:text-accent ${isActive(sublink.href) ? "text-accent" : ""
                                }`}
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
