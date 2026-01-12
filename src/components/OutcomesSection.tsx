import { CalendarClock, Repeat2, Signal, FlaskConical, ListTodo, PiggyBank } from "lucide-react";

const outcomes = [
  {
    icon: CalendarClock,
    title: "Claim Daily UBI",
    description: "Receive free tokens from GoodDollar every single day, just for being human.",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: Repeat2,
    title: "Swap Tokens",
    description: "Convert G$ to stablecoins like cUSD and USDT with real-world value.",
    accent: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Signal,
    title: "Buy Airtime",
    description: "Make real purchases using your crypto directly through MiniPay.",
    accent: "from-accent/15 to-accent/5",
  },
  {
    icon: FlaskConical,
    title: "Test dApps",
    description: "Earn rewards as an early tester of decentralized applications.",
    accent: "from-primary/15 to-primary/5",
  },
  {
    icon: ListTodo,
    title: "Complete Tasks",
    description: "Turn small micro tasks into token earnings on the Pax platform.",
    accent: "from-secondary/20 to-secondary/5",
  },
  {
    icon: PiggyBank,
    title: "Manage Crypto",
    description: "Confidently store, send, and receive cryptocurrency.",
    accent: "from-accent/15 to-accent/5",
  },
];

const OutcomesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real Skills. Real Tokens.{" "}
            <span className="text-gradient-hero">Real Value.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            By the end of ESI L1, you won't just understand cryptocurrency—you'll be actively using it. 
            You'll finish with tokens in your wallet and knowledge to keep earning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border/50 hover:border-primary/30"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${outcome.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-border/30`}>
                <outcome.icon className="text-primary" size={22} strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {outcome.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
