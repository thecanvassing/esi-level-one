import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ModulesSection from "@/components/ModulesSection";
import OutcomesSection from "@/components/OutcomesSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ESI L1 – Free Cryptocurrency Education | Learn Crypto, Earn Crypto, Risk Nothing</title>
        <meta 
          name="description" 
          content="ESI L1 is a free 5-module program teaching blockchain and cryptocurrency through hands-on learning. Earn real tokens with GoodDollar and MiniPay—no investment required." 
        />
        <meta name="keywords" content="free crypto education, learn cryptocurrency beginners, GoodDollar UBI, MiniPay wallet, blockchain education Africa, earn crypto free, universal basic income crypto, ESI L1, Canvassing blockchain" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ESI L1 – Learn Crypto. Earn Crypto. Risk Nothing." />
        <meta property="og:description" content="A free program teaching cryptocurrency through real earnings. No investment required." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ESI L1 – Learn Crypto. Earn Crypto. Risk Nothing." />
        <meta name="twitter:description" content="A free program teaching cryptocurrency through real earnings. No investment required." />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <ModulesSection />
          <OutcomesSection />
          <WhyDifferentSection />
          <HowItWorksSection />
          <FAQSection />
          <AboutSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
