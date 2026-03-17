import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

const testimonials = [
  {
    name: "Ana Souza",
    initials: "AS",
    text: "Meu sofá ficou irreconhecível! Atendimento super pontual, explicaram todo o processo e o resultado foi incrível."
  },
  {
    name: "Carlos Lima",
    initials: "CL",
    text: "Achei que não teria solução para as manchas do carro, mas ficou realmente como novo. Recomendo demais."
  },
  {
    name: "Mariana Costa",
    initials: "MC",
    text: "Tenho rinite e senti muita diferença depois da higienização do colchão. Serviço rápido e muito cuidadoso."
  },
  {
    name: "Roberto Silva",
    initials: "RS",
    text: "Preço justo, equipe profissional e caprichosa. Já indiquei para toda a família depois de ver o resultado no meu sofá."
  },
  {
    name: "Fernanda Oliveira",
    initials: "FO",
    text: "Atendimento excelente do início ao fim. Enviaram fotos do antes e depois e sempre responderam rápido no WhatsApp."
  },
  {
    name: "João Pedro",
    initials: "JP",
    text: "Os bancos do meu carro nunca ficaram tão limpos. Odor totalmente eliminado e secagem bem rápida."
  }
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function Testimonials() {
  return (
    <section className="section-padding bg-secondary">
      <SectionHeader
        badge="Depoimentos"
        title="O que nossos clientes"
        highlight="dizem"
      />

      <motion.div
        className="section-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              variants={card}
              className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Quote className="h-4 w-4" />
                </div>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-neutral-700">
                {item.text}
              </p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200 text-xs font-semibold text-neutral-800">
                    {item.initials}
                  </div>
                  <span className="text-sm font-semibold text-neutral-900">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-star-yellow text-star-yellow"
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials;

