import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Coins, Sparkles } from "lucide-react";
import gooddollarLogo from "@/assets/gooddollar-logo.png";
import minipayLogo from "@/assets/minipay-logo.png";
import canvassingLogo from "@/assets/canvassing-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Animated blobs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/10 blob animate-float blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-secondary/15 blob animate-float blur-3xl" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-accent/10 blob animate-float blur-3xl" style={{ animationDelay: "4s" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-8 animate-fade-up">
              <Sparkles size={16} className="animate-pulse-soft" />
              <span>100% Free Crypto Education</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Learn Crypto.{" "}
              <span className="text-gradient-hero">Earn Crypto.</span>{" "}
              <span className="text-gradient-warm">Risk Nothing.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              ESI L1 is a free program that teaches you blockchain and cryptocurrency 
              by letting you earn real tokens—without spending a single cent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="cta" size="xl" asChild>
                <a href="#register">
                  Start Learning Free
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#modules">View Modules</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-card border border-border shadow-sm">
                <Shield size={18} className="text-primary" />
                <span className="text-sm font-semibold text-foreground">No Investment Required</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-card border border-border shadow-sm">
                <Coins size={18} className="text-secondary" />
                <span className="text-sm font-semibold text-foreground">Earn Real Tokens</span>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="mt-10 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">Inspired by</p>
              <div className="flex items-center gap-5 justify-center lg:justify-start">
                <img src={gooddollarLogo} alt="GoodDollar" className="w-12 h-12 rounded-full shadow-md hover:scale-110 transition-transform" />
                <img src={minipayLogo} alt="MiniPay" className="w-12 h-12 rounded-xl shadow-md hover:scale-110 transition-transform" />
                <img src={canvassingLogo} alt="Canvassing" className="w-12 h-12 rounded-xl shadow-md hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Phone Mockup with enhanced styling */}
              <div className="relative bg-gradient-hero rounded-[2.5rem] p-1 shadow-glow">
                <div className="bg-gradient-hero rounded-[2.5rem] p-3">
                  <div className="bg-card rounded-[2rem] p-8 min-h-[420px] flex flex-col items-center justify-center shadow-inner">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 animate-float shadow-cta">
                      <Coins size={40} className="text-primary-foreground" />
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-2">Daily UBI Claimed!</p>
                    <p className="text-5xl font-extrabold text-gradient-hero mb-3 font-mono">+50 G$</p>
                    <p className="text-muted-foreground text-sm">Keep learning to earn more</p>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mt-10 w-full">
                      <div className="bg-gradient-subtle rounded-2xl p-5 text-center border border-border/50">
                        <p className="text-3xl font-bold text-foreground font-mono">5</p>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mt-1">Modules</p>
                      </div>
                      <div className="bg-gradient-subtle rounded-2xl p-5 text-center border border-border/50">
                        <p className="text-3xl font-bold text-primary font-mono">Free</p>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mt-1">Forever</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements with enhanced styling */}
              <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground px-5 py-2.5 rounded-full font-bold text-sm shadow-xl animate-float border-2 border-background" style={{ animationDelay: "0.5s" }}>
                ✓ Beginner Friendly
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-bold text-sm shadow-xl animate-float border-2 border-background" style={{ animationDelay: "1s" }}>
                🌍 Available Worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
