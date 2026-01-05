import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
              <a 
                href="https://tally.so/r/RGx79K?utm_source=website" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).ttq) {
                    (window as any).ttq.track('ClickButton', {
                      contents: [{ content_name: 'Start Learning for Free - CTA' }]
                    });
                  }
                }}
              >
                Start Learning for Free
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button 
              variant="hero" 
              size="xl" 
              asChild
            >
              <a href="https://chat.whatsapp.com/ErzJIN3kvxu1CnAp2qK6F0" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={20} />
                Join WhatsApp Group
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
