import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section id="register" className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-6">
            <Sparkles size={16} />
            <span>Start Your Journey Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Crypto Journey?
          </h2>

          <p className="text-xl opacity-90 leading-relaxed mb-8">
            Join thousands of learners who are discovering blockchain technology the smart way—by 
            earning while they learn. ESI L1 is free, beginner-friendly, and designed to give 
            you real skills with real tokens.
          </p>

          <p className="text-lg font-semibold mb-8 opacity-90">
            No risk. No cost. Just knowledge and opportunity.
          </p>

          <Button variant="cta" size="xl" className="bg-accent hover:bg-accent/90" asChild>
            <a href="https://systeme.io" target="_blank" rel="noopener noreferrer">
              Start Learning for Free
              <ArrowRight size={20} />
            </a>
          </Button>

          <p className="mt-6 text-sm opacity-70">
            Have questions? Reach out to us at{" "}
            <a href="mailto:support@canvassing.org" className="underline hover:opacity-100">
              support@canvassing.org
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
