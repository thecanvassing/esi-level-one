import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | ESI L1 - Education for Social Impact</title>
        <meta name="description" content="Terms of Service for ESI L1 cryptocurrency education program by Canvassing." />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16 min-h-screen bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg">
              <strong className="text-foreground">Last Updated:</strong> December 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using ESI L1 (Education for Social Impact Level 1) operated by Canvassing, 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Description of Service</h2>
              <p>
                ESI L1 is a free educational program that teaches cryptocurrency and blockchain concepts 
                through practical, hands-on learning. The program allows participants to earn real tokens 
                while learning, without requiring any financial investment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Eligibility</h2>
              <p>To use our services, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least 18 years of age or have parental consent</li>
                <li>Have access to a smartphone and internet connection</li>
                <li>Provide accurate and complete information during registration</li>
                <li>Comply with all applicable laws in your jurisdiction</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. User Responsibilities</h2>
              <p>As a user of ESI L1, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the platform for educational purposes only</li>
                <li>Not engage in fraudulent or abusive behavior</li>
                <li>Protect your account credentials and wallet information</li>
                <li>Not attempt to manipulate or exploit the reward systems</li>
                <li>Respect other users and maintain appropriate conduct</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Tokens and Rewards</h2>
              <p>
                The tokens earned through ESI L1 are provided by third-party services including GoodDollar. 
                Canvassing does not guarantee the value of any tokens earned. Token values may fluctuate, 
                and we are not responsible for any losses related to token value changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Third-Party Services</h2>
              <p>
                ESI L1 integrates with third-party services such as GoodDollar and MiniPay. 
                Your use of these services is subject to their respective terms and conditions. 
                Canvassing is not responsible for the actions or policies of third-party providers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Intellectual Property</h2>
              <p>
                All content, materials, and resources provided through ESI L1 are the property of 
                Canvassing or its licensors. You may not reproduce, distribute, or create derivative 
                works without our express written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Disclaimer of Warranties</h2>
              <p>
                ESI L1 is provided "as is" without warranties of any kind. We do not guarantee that 
                the service will be uninterrupted, error-free, or secure. This is an educational 
                program and should not be considered financial advice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Canvassing shall not be liable for any 
                indirect, incidental, special, or consequential damages arising from your use of 
                ESI L1 or any related services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to ESI L1 at any time, 
                with or without cause, and with or without notice. You may also discontinue your 
                use of the service at any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Changes to Terms</h2>
              <p>
                We may modify these Terms of Service at any time. Continued use of the service 
                after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">12. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:{" "}
                <a href="mailto:admin@thecanvassing.xyz" className="text-primary hover:underline">
                  admin@thecanvassing.xyz
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TermsOfService;
