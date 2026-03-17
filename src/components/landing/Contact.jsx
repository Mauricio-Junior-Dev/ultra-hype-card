import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { getWhatsAppUrl } from "./WhatsAppButton.jsx";

const infoCards = [
  {
    title: "Região atendida",
    icon: MapPin,
    text: "São Paulo e região metropolitana"
  },
  {
    title: "Horário",
    icon: Clock,
    text: "Seg a Sáb: 8h às 18h"
  },
  {
    title: "Telefone",
    icon: Phone,
    text: "(00) 00000-0000"
  }
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function Contact() {
  return (
    <section className="relative section-padding bg-black text-white overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />

      <SectionHeader
        badge="Entre em contato"
        title="Fale conosco"
        highlight="agora"
        subtitle="Estamos prontos para transformar seus estofados. É rápido e fácil!"
        dark
      />

      <motion.div
        className="section-container relative"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {infoCards.map((item) => (
            <motion.div
              key={item.title}
              variants={card}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-whats px-10 py-4 text-lg font-bold text-white shadow-2xl shadow-green-500/20 hover:bg-emerald-500"
          >
            <MessageCircle className="h-6 w-6" />
            Chamar no WhatsApp
          </a>
          <p className="mt-3 text-sm text-white/40">
            Resposta rápida • Orçamento sem compromisso
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;

