import Header from "../components/landing/Header.jsx";
import Hero from "../components/landing/Hero.jsx";
import Services from "../components/landing/Services.jsx";
import BeforeAfter from "../components/landing/BeforeAfter.jsx";
import Benefits from "../components/landing/Benefits.jsx";
import Testimonials from "../components/landing/Testimonials.jsx";
import HowItWorks from "../components/landing/HowItWorks.jsx";
import Contact from "../components/landing/Contact.jsx";
import Footer from "../components/landing/Footer.jsx";
import WhatsAppButton from "../components/landing/WhatsAppButton.jsx";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="servicos" className="bg-white">
          <Services />
        </section>
        <section id="antes-depois" className="bg-black">
          <BeforeAfter />
        </section>
        <section className="bg-white">
          <Benefits />
        </section>
        <section id="depoimentos" className="bg-secondary">
          <Testimonials />
        </section>
        <section className="bg-white">
          <HowItWorks />
        </section>
        <section id="contato" className="bg-black">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Home;

