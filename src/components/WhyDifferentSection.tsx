import { Check, DollarSign, Shield, Wrench, Users, Globe } from "lucide-react";

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
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              No Investment Required.{" "}
              <span className="text-primary-glow">No Risk.</span>{" "}
              Just Learning.
            </h2>
            <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-8">
              Most crypto education asks you to invest money to "learn by doing." 
              ESI L1 flips that model. We give you real tokens to learn with, 
              so you gain experience without any financial risk.
            </p>

            <div className="space-y-4">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="text-primary-glow" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-foreground">{feature.title}</h3>
                    <p className="text-secondary-foreground/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
            <h3 className="text-xl font-bold mb-6 text-secondary-foreground">Why ESI L1?</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="text-primary-foreground" size={14} />
                  </div>
                  <span className="text-secondary-foreground">{feature.title}</span>
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
