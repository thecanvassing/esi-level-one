import { TrendingDown, AlertTriangle, Target, CheckCircle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive font-medium text-sm">
              <AlertTriangle size={14} />
              <span>The Problem</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Cryptocurrency Shouldn't Be a Gamble
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Right now, millions of people are losing money in crypto because they jump in 
              without understanding what they're doing. They buy tokens they know nothing about, 
              follow hype instead of knowledge, and end up worse off than when they started.
            </p>

            <div className="flex items-start gap-4 p-4 bg-destructive/5 rounded-xl border border-destructive/10">
              <TrendingDown className="text-destructive mt-1 shrink-0" size={24} />
              <div>
                <p className="font-semibold text-foreground">Most beginners lose money</p>
                <p className="text-sm text-muted-foreground">Because they invest before they understand</p>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Target size={14} />
              <span>Our Solution</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Learn by Earning, Not Spending
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              ESI L1 takes a different approach. We teach you cryptocurrency by giving you 
              free tokens to learn with. You gain real experience with real assets—without 
              putting your own money at risk.
            </p>

            <div className="space-y-3">
              {[
                "Real tokens, zero investment",
                "Hands-on practical experience",
                "Skills you can use immediately",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg font-semibold text-primary">
              This isn't theory. This is learning by doing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
