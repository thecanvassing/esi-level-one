import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is ESI L1 really free?",
    answer: "Yes, completely free. There are no hidden fees, no premium upgrades, and no payments required. The tokens you earn during the program are yours to keep.",
  },
  {
    question: "Do I need to invest any money?",
    answer: "No. You never need to spend your own money. The entire program is designed around free tokens provided by GoodDollar and Canvassing's reward systems.",
  },
  {
    question: "What is GoodDollar?",
    answer: "GoodDollar is the world's largest crypto Universal Basic Income project. It distributes free G$ tokens daily to verified users. ESI L1 teaches you how to claim and use these tokens.",
  },
  {
    question: "What is MiniPay?",
    answer: "MiniPay is a dollar stablecoin wallet designed for simplicity. It lets you store, send, and receive crypto using just your phone number. It's one of the easiest wallets to use in Africa.",
  },
  {
    question: "What are G$ tokens worth?",
    answer: "G$ tokens can be swapped for stablecoins like cUSD or USDT. The approximate exchange rate is 1,000 G$ = 0.1 USD. While the amounts are small, they're real and can be used for purchases like airtime.",
  },
  {
    question: "Do I need any prior crypto experience?",
    answer: "Not at all. ESI L1 is designed for complete beginners. We explain everything from scratch in plain, simple language.",
  },
  {
    question: "What do I need to participate?",
    answer: "You need a smartphone (Android or iOS), a Google account, and internet access. That's it.",
  },
  {
    question: "How long does the program take?",
    answer: "ESI L1 is self-paced. Most learners complete all five modules within a few hours spread over a week. You can go faster or slower depending on your schedule.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Yes. The identity verification process (face verification) stores your data anonymously with no link to your personal profile. You can delete your data at any time.",
  },
  {
    question: "What happens after I complete ESI L1?",
    answer: "You'll have real tokens in your wallet and the skills to keep earning. You can continue claiming daily UBI, completing tasks on Pax, and exploring the broader crypto ecosystem with confidence.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-hero">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. Here's everything you need to know about ESI L1.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
