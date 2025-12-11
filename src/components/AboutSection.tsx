import { Users } from "lucide-react";
import gooddollarLogo from "@/assets/gooddollar-logo.png";
import minipayLogo from "@/assets/minipay-logo.png";
import canvassingLogo from "@/assets/canvassing-logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Users size={14} />
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Built by <span className="text-gradient-hero">Canvassing</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Canvassing is a blockchain-based project founded in 2024 by Andrew Kim and 
              Benedictors Ogada. Our mission is to make cryptocurrency education accessible, 
              practical, and beneficial for everyday people.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe that blockchain technology has the power to reduce inequality—but 
              only if people understand how to use it. That's why we created ESI L1: to 
              bridge the knowledge gap and give everyone the tools to participate in the 
              digital economy.
            </p>

            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">Powered by</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-full">
                  <img src={gooddollarLogo} alt="GoodDollar" className="w-6 h-6 rounded-full" />
                  <span className="text-sm font-medium text-foreground">GoodDollar</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-full">
                  <img src={minipayLogo} alt="MiniPay" className="w-6 h-6 rounded-lg" />
                  <span className="text-sm font-medium text-foreground">MiniPay</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <blockquote className="text-lg leading-relaxed opacity-90 mb-6">
                "To make cryptocurrency education accessible, practical, and beneficial 
                for everyday people—especially those in emerging markets who stand to 
                benefit most from blockchain technology."
              </blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-primary-foreground/20">
                <img src={canvassingLogo} alt="Canvassing" className="w-12 h-12 rounded-xl" />
                <div>
                  <p className="font-semibold">Canvassing</p>
                  <p className="text-sm opacity-80">Established 2024</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
