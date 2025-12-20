import { Check, DollarSign, Shield, Wrench, Users, Globe } from "lucide-react";
import gooddollarLogo from "@/assets/gooddollar-logo.png";
import minipayLogo from "@/assets/minipay-logo.png";
import canvassingLogo from "@/assets/canvassing-logo.png";

const features = [
  {
    icon: DollarSign,
    title: "Completely Free",
    description: "The program costs nothing. The tokens you earn are yours to keep.",
  },
  {
    icon: Shield,
    title: "Risk-Free Learning",
    description: "You never spend your own money. Every token is given to you for free.",
  },
  {
    icon: Wrench,
    title: "Practical, Not Theoretical",
    description: "Every module includes hands-on activities. You're not watching—you're doing.",
  },
  {
    icon: Users,
    title: "Built for Beginners",
    description: "We explain everything in plain language. No prior crypto knowledge required.",
  },
  {
    icon: Globe,
    title: "UN SDG Aligned",
    description: "Supports SDG 4 (Quality Education) by making blockchain knowledge accessible to everyone.",
  },
];

const WhyDifferentSection = () => {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary blob blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary blob blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              No Investment Required.{" "}
              <span className="text-primary">No Risk.</span>{" "}
              <span className="text-secondary">Just Learning.</span>
            </h2>
            <p className="text-background/70 text-lg leading-relaxed mb-10">
              Most crypto education asks you to invest money to "learn by doing." 
              ESI L1 flips that model. We give you real tokens to learn with, 
              so you gain experience without any financial risk.
            </p>

            <div className="space-y-5">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <feature.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-background text-lg">{feature.title}</h3>
                    <p className="text-background/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inspired by section */}
            <div className="mt-10 pt-8 border-t border-background/10">
              <p className="text-sm text-background/50 mb-4 font-medium uppercase tracking-wider">Inspired by</p>
              <div className="flex items-center gap-5">
                <img src={gooddollarLogo} alt="GoodDollar" className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform" />
                <img src={minipayLogo} alt="MiniPay" className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform" />
                <img src={canvassingLogo} alt="Canvassing" className="w-12 h-12 rounded-xl shadow-lg hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          <div className="bg-background/5 backdrop-blur-sm rounded-3xl p-10 border border-background/10">
            <h3 className="text-2xl font-bold mb-8 text-background">Why ESI L1?</h3>
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center shrink-0 shadow-lg">
                    <Check className="text-primary-foreground" size={16} />
                  </div>
                  <span className="text-background font-medium group-hover:text-primary transition-colors">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
