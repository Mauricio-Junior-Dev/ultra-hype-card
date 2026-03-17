import { motion } from "framer-motion";
import {
  Sofa,
  BedDouble,
  Car,
  Armchair,
  Layers,
  MessageCircle
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { getWhatsAppUrl } from "./WhatsAppButton.jsx";

const cards = [
  {
    title: "Sofás",
    icon: Sofa,
    description:
      "Higienização profunda para remover sujeira, manchas e odores, devolvendo o conforto do seu sofá.",
    message:
      "Olá, gostaria de um orçamento para higienização de sofá."
  },
  {
    title: "Colchões",
    icon: BedDouble,
    description:
      "Eliminação de ácaros e bactérias para noites de sono mais saudáveis e tranquilas.",
    message:
      "Olá, gostaria de um orçamento para higienização de colchão."
  },
  {
    title: "Bancos Automotivos",
    icon: Car,
    description:
      "Limpeza profissional dos bancos do seu carro, removendo manchas e odores indesejados.",
    message:
      "Olá, gostaria de um orçamento para higienização de bancos automotivos."
  },
  {
    title: "Cadeiras",
    icon: Armchair,
    description:
      "Ideal para cadeiras de escritório e jantar, deixando seu ambiente mais limpo e apresentável.",
    message:
      "Olá, gostaria de um orçamento para higienização de cadeiras."
  },
  {
    title: "Carpetes e Tapetes",
    icon: Layers,
    description:
      "Remoção de poeira acumulada, manchas e odores para um ambiente mais agradável e seguro.",
    message:
      "Olá, gostaria de um orçamento para higienização de carpetes e tapetes."
  }
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

function Services() {
  return (
    <section className="section-padding bg-white">
      <SectionHeader
        badge="Nossos Serviços"
        title="Soluções completas em"
        highlight="higienização"
        subtitle="Oferecemos serviços profissionais para residências e veículos com qualidade garantida."
      />

      <motion.div
        className="section-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <motion.article
              key={card.title}
              variants={cardVariant}
              className="group flex flex-col rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <card.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                {card.title}
              </h3>
              <p className="mt-2 mb-6 text-sm leading-relaxed text-neutral-600">
                {card.description}
              </p>
              <div className="mt-auto">
                <a
                  href={getWhatsAppUrl(card.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-xs sm:text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Solicitar orçamento
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;

