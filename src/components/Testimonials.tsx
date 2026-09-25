import React, { useState, useEffect, memo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rahulbalaji Ramesh",
    text: "GNR gold traders exceeded my expectations! 🏆 Their transparency and fair prices made selling my gold a breeze. Plus, their 24/7 availability and doorstep service were super convenient. Highly recommend! 👍",
    rating: 5,
  },
  {
    name: "Subathra Suba",
    text: "Had a great experience selling gold in GNR. Got a fair price and the process was smooth. 👍",
    rating: 5,
  },
  {
    name: "Priya Ranjan",
    text: "Excellent Service, Good Customer Handling, Polite Staff's Am very happy Thank you GNR",
    rating: 5,
  },
  {
    name: "ramya ramya",
    text: "I recently sold my old gold jewellery to GNR Gold Traders in T Nagar, Chennai, and had a great experience. The staff were professional and transparent about the process. They offered a fair price based on the current market rate...",
    rating: 5,
  },
  {
    name: "K.T.lakshmanan",
    text: "Good honest service, I am gold sale very happy correct value👍",
    rating: 5,
  },
  {
    name: "VIJAY ANAND R",
    text: "Trusted shop",
    rating: 5,
  },
  {
    name: "Sachin Sathiya",
    text: "Excellent service 👍👍👍",
    rating: 5,
  },
];

const Testimonials: React.FC = memo(() => {
  const sectionRef = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-transparent overflow-hidden relative">
      <div className="luxury-bg-overlay" />
      <div className="container mx-auto px-6 relative">
        <div className="scroll-animate text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            TESTIMONIALS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="divider-gold w-24 mx-auto mb-8" />

          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="text-sm font-bold text-foreground">5/5 Rating</span>
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[#FBBC05] fill-current" />
                ))}
              </div>
            </div>
            <a
              href="https://www.google.com/search?sca_esv=8e60d31f06ccefa5&sxsrf=ANbL-n7MmbbdRCbvetb3p_3MW4fc40srOg:1775298899304&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYbDZYnjGeM69QlK1GM-OM0x7isbfOIkIQrMJ77b7FH9bcZWy68XqkmeVH2GuQHh_r0Y_oPQlGk_ZB5Eot2JH8ykNsvugpWShPBJ9DrLkjq84fUQiQ%3D%3D&q=GNR+GOLD+TRADERS+Reviews&sa=X&ved=2ahUKEwiYjI3i_9OTAxUUTmwGHbH8JPMQ0bkNegQILBAH&biw=1536&bih=695"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors text-xs font-bold tracking-[0.2em] uppercase underline underline-offset-4"
            >
              Write a review
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative scroll-animate stagger-2">
          {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-card rounded-full shadow-[var(--shadow-soft)] flex items-center justify-center text-primary hover:text-accent hover:shadow-[var(--shadow-elegant)] transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-10 w-10 h-10 md:w-12 md:h-12 bg-card rounded-full shadow-[var(--shadow-soft)] flex items-center justify-center text-primary hover:text-accent hover:shadow-[var(--shadow-elegant)] transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden px-4 md:px-0 py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="luxury-card p-8 md:p-10 text-center mx-auto h-full flex flex-col">
                    <div className="flex flex-col h-full">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                        {testimonial.name}
                      </h3>
                      
                      <div className="flex justify-center space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-accent fill-current" />
                        ))}
                      </div>

                      <p className="text-muted-foreground text-base leading-relaxed font-sans mb-8 italic flex-grow">
                        "{testimonial.text}"
                      </p>

                      <div className="mt-auto pt-6 border-t border-accent/10">
                        <a
                          href="https://www.google.com/search?sca_esv=8e60d31f06ccefa5&sxsrf=ANbL-n7MmbbdRCbvetb3p_3MW4fc40srOg:1775298899304&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYbDZYnjGeM69QlK1GM-OM0x7isbfOIkIQrMJ77b7FH9bcZWy68XqkmeVH2GuQHh_r0Y_oPQlGk_ZB5Eot2JH8ykNsvugpWShPBJ9DrLkjq84fUQiQ%3D%3D&q=GNR+GOLD+TRADERS+Reviews&sa=X&ved=2ahUKEwiYjI3i_9OTAxUUTmwGHbH8JPMQ0bkNegQILBAH&biw=1536&bih=695"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-accent hover:text-accent/80 transition-colors uppercase font-bold tracking-[0.2em]"
                        >
                          Read on Google
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(idx);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`transition-all duration-300 rounded-full ${currentIndex === idx
                    ? "w-8 h-2 bg-accent"
                    : "w-2 h-2 bg-border hover:bg-accent/50"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
