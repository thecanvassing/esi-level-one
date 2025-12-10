import { BookOpen, Wallet, Coins, Smartphone, Trophy } from "lucide-react";

const modules = [
  {
    number: 1,
    icon: BookOpen,
    title: "Introduction to ESI L1",
    description: "Understand the mission behind Education for Social Impact and how this program aligns with the UN Sustainable Development Goals.",
    color: "bg-primary/10 text-primary",
  },
  {
    number: 2,
    icon: Wallet,
    title: "Getting Started with MiniPay",
    description: "Set up your first crypto wallet using MiniPay—the simplest, most user-friendly wallet in Africa. Learn what stablecoins are.",
    color: "bg-secondary/20 text-secondary",
  },
  {
    number: 3,
    icon: Coins,
    title: "Understanding GoodDollar & UBI",
    description: "Discover GoodDollar, the world's largest crypto UBI project. Complete identity verification and start claiming free G$ tokens daily.",
    color: "bg-primary/10 text-primary",
  },
  {
    number: 4,
    icon: Smartphone,
    title: "Testing Apps on MiniPay",
    description: "Unlock developer mode and learn how to test decentralized applications. Earn 3,000 G$ just for engaging with The Good Pax App.",
    color: "bg-accent/10 text-accent",
  },
  {
    number: 5,
    icon: Trophy,
    title: "Earning with Pax by Canvassing",
    description: "Complete micro tasks for token rewards. Learn to withdraw earnings, swap G$ for stablecoins, and make real purchases.",
    color: "bg-primary/10 text-primary",
  },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            From Zero to Confident in{" "}
            <span className="text-gradient-hero">5 Modules</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured, step-by-step program designed for complete beginners. 
            Each module builds on the last, giving you practical skills you can use immediately.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-8">
            {modules.map((module, index) => (
              <div
                key={module.number}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-hover transition-shadow duration-300 border border-border/50">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${module.color} mb-4`}>
                      <module.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>

                {/* Number Circle */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-hero text-primary-foreground font-bold text-xl shadow-lg shrink-0">
                  {module.number}
                </div>

                {/* Empty space for alignment */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
