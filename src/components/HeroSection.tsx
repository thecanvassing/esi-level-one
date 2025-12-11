import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Coins } from "lucide-react";
import gooddollarLogo from "@/assets/gooddollar-logo.png";
import minipayLogo from "@/assets/minipay-logo.png";
import canvassingLogo from "@/assets/canvassing-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-up">
              <span>✨</span>
              <span>100% Free Crypto Education</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Learn Crypto.{" "}
              <span className="text-gradient-hero">Earn Crypto.</span>{" "}
              Risk Nothing.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
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
            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield size={18} className="text-primary" />
                <span className="text-sm font-medium">No Investment Required</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Coins size={18} className="text-primary" />
                <span className="text-sm font-medium">Earn Real Tokens</span>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="mt-8 pt-6 border-t border-border animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-sm text-muted-foreground mb-3">Powered by</p>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <img src={gooddollarLogo} alt="GoodDollar" className="w-10 h-10 rounded-full" />
                <img src={minipayLogo} alt="MiniPay" className="w-10 h-10 rounded-xl" />
                <img src={canvassingLogo} alt="Canvassing" className="w-10 h-10 rounded-xl" />
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Phone Mockup */}
              <div className="relative bg-gradient-hero rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-background rounded-[2rem] p-6 min-h-[400px] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4 animate-float">
                    <Coins size={32} className="text-primary-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-2">Daily UBI Claimed!</p>
                  <p className="text-4xl font-extrabold text-gradient-hero mb-2">+50 G$</p>
                  <p className="text-muted-foreground text-sm">Keep learning to earn more</p>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-3 mt-8 w-full">
                    <div className="bg-muted rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-foreground">5</p>
                      <p className="text-xs text-muted-foreground">Modules</p>
                    </div>
                    <div className="bg-muted rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-primary">Free</p>
                      <p className="text-xs text-muted-foreground">Forever</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                ✓ Beginner Friendly
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-float" style={{ animationDelay: "1s" }}>
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
