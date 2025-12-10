import { Button } from "@/components/ui/button";
import { UserPlus, BookOpen, Coins, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Register for Free",
    description: "Sign up using the registration form. You'll receive access to all five modules through our learning platform.",
  },
  {
    number: 2,
    icon: BookOpen,
    title: "Follow the Modules",
    description: "Work through each module at your own pace. Each lesson includes clear instructions, screenshots, and practical exercises.",
  },
  {
    number: 3,
    icon: Coins,
    title: "Earn While You Learn",
    description: "As you progress, you'll claim UBI, unlock achievements, and earn tokens. By the end, you'll have real crypto in your wallet.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Three Simple Steps to{" "}
            <span className="text-gradient-hero">Get Started</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with ESI L1 is easy. Follow these simple steps 
            and begin your crypto education journey today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 z-10">
                  <ArrowRight className="text-border" size={32} />
                </div>
              )}

              <div className="text-center">
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-hero mb-6 mx-auto">
                  <step.icon className="text-primary-foreground" size={36} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="xl" asChild>
            <a href="#register">
              Register Now – It's Free
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
