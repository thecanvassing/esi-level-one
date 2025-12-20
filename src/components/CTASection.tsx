import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section id="register" className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-foreground/10 blob blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-foreground/10 blob blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        
        {/* Floating stars */}
        <Star className="absolute top-20 left-[15%] w-6 h-6 text-primary-foreground/30 animate-pulse-soft" />
        <Star className="absolute bottom-32 right-[20%] w-4 h-4 text-primary-foreground/20 animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <Star className="absolute top-1/2 right-[10%] w-5 h-5 text-primary-foreground/25 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground font-semibold text-sm mb-8 border border-primary-foreground/20">
            <Sparkles size={16} />
            <span>Start Your Journey Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 leading-tight">
            Ready to Start Your{" "}
            <span className="relative">
              Crypto Journey
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8C50 2 150 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4"/>
              </svg>
            </span>
            ?
          </h2>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Join thousands of learners who are discovering blockchain technology the smart way—by 
            earning while they learn. ESI L1 is free, beginner-friendly, and designed to give 
            you real skills with real tokens.
          </p>

          <p className="text-lg font-bold mb-10 px-6 py-3 rounded-full bg-primary-foreground/10 inline-block backdrop-blur-sm border border-primary-foreground/20">
            No risk. No cost. Just knowledge and opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="xl" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl hover:shadow-2xl" 
              asChild
            >
              <a href="https://systeme.io" target="_blank" rel="noopener noreferrer">
                Start Learning for Free
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm opacity-70">
            Have questions? Reach out to us at{" "}
            <a href="mailto:admin@thecanvassing.xyz" className="underline hover:opacity-100 font-medium">
              admin@thecanvassing.xyz
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
