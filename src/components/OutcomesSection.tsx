import { CalendarCheck, ArrowRightLeft, Phone, TestTube, ClipboardList, Wallet } from "lucide-react";

const outcomes = [
  {
    icon: CalendarCheck,
    title: "Claim Daily UBI",
    description: "Receive free tokens from GoodDollar every single day, just for being human.",
  },
  {
    icon: ArrowRightLeft,
    title: "Swap Tokens",
    description: "Convert G$ to stablecoins like cUSD and USDT with real-world value.",
  },
  {
    icon: Phone,
    title: "Buy Airtime",
    description: "Make real purchases using your crypto directly through MiniPay.",
  },
  {
    icon: TestTube,
    title: "Test dApps",
    description: "Earn rewards as an early tester of decentralized applications.",
  },
  {
    icon: ClipboardList,
    title: "Complete Tasks",
    description: "Turn small micro tasks into token earnings on the Pax platform.",
  },
  {
    icon: Wallet,
    title: "Manage Crypto",
    description: "Confidently store, send, and receive cryptocurrency.",
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
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <outcome.icon className="text-primary" size={24} />
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
