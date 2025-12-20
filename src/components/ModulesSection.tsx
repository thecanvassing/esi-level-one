import { BookOpen, Wallet, Coins, Smartphone, Trophy } from "lucide-react";

const modules = [
  {
    number: 1,
    icon: BookOpen,
    title: "Introduction to ESI L1",
    description: "Understand the mission behind Education for Social Impact and how this program aligns with the UN Sustainable Development Goals.",
    gradient: "bg-gradient-hero",
    iconBg: "bg-primary/15 text-primary",
  },
  {
    number: 2,
    icon: Wallet,
    title: "Getting Started with MiniPay",
    description: "Set up your first crypto wallet using MiniPay—the simplest, most user-friendly wallet in Africa. Learn what stablecoins are.",
    gradient: "bg-gradient-warm",
    iconBg: "bg-secondary/20 text-secondary-foreground",
  },
  {
    number: 3,
    icon: Coins,
    title: "Understanding GoodDollar & UBI",
    description: "Discover GoodDollar, the world's largest crypto UBI project. Complete identity verification and start claiming free G$ tokens daily.",
    gradient: "bg-gradient-hero",
    iconBg: "bg-primary/15 text-primary",
  },
  {
    number: 4,
    icon: Smartphone,
    title: "Testing Apps on MiniPay",
    description: "Unlock developer mode and learn how to test decentralized applications. Earn 3,000 G$ just for engaging with The Good Pax App.",
    gradient: "bg-gradient-purple",
    iconBg: "bg-accent/15 text-accent",
  },
  {
    number: 5,
    icon: Trophy,
    title: "Earning with Pax by Canvassing",
    description: "Complete micro tasks for token rewards. Learn to withdraw earnings, swap G$ for stablecoins, and make real purchases.",
    gradient: "bg-gradient-warm",
    iconBg: "bg-secondary/20 text-secondary-foreground",
  },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Curriculum</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            From Zero to Confident in{" "}
            <span className="text-gradient-hero">5 Modules</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A structured, step-by-step program designed for complete beginners. 
            Each module builds on the last, giving you practical skills you can use immediately.
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full -translate-x-1/2" />

          <div className="space-y-10">
            {modules.map((module, index) => (
              <div
                key={module.number}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500 border border-border/50 hover:border-primary/30 relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 ${module.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${module.iconBg} mb-5 transition-transform group-hover:scale-110 duration-300`}>
                      <module.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>

                {/* Number Circle with gradient */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${module.gradient} text-primary-foreground font-bold text-xl shadow-xl shrink-0 ring-4 ring-background`}>
                  <span className="font-mono">{module.number}</span>
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
