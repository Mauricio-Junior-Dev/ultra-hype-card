import { motion } from "framer-motion";
import { Bug, Droplets, Wind, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

const benefits = [
  {
    title: "Elimina ácaros e bactérias",
    icon: Bug,
    description:
      "Reduza alergias e problemas respiratórios com uma higienização profunda e segura."
  },
  {
    title: "Remove manchas e odores",
    icon: Droplets,
    description:
      "Tratamento específico para manchas difíceis e odores fortes, deixando tudo como novo."
  },
  {
    title: "Secagem rápida",
    icon: Wind,
    description:
      "Processo otimizado para que seus estofados fiquem prontos para uso em poucas horas."
  },
  {
    title: "Atendimento a domicílio",
    icon: MapPin,
    description:
      "Vamos até você com toda a estrutura necessária para um serviço completo e prático."
  }
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function Benefits() {
  return (
    <section className="section-padding bg-white">
      <SectionHeader
        badge="Por que escolher a gente?"
        title="Benefícios que fazem a"
        highlight="diferença"
      />

      <motion.div
        className="section-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <motion.div key={benefit.title} variants={item}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 mb-2 text-lg font-bold text-neutral-900">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 max-w-xs mx-auto">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;

