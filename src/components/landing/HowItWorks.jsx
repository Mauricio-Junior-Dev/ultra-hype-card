import { motion } from "framer-motion";
import {
  MessageCircle,
  Camera,
  FileText,
  CalendarCheck
} from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

const steps = [
  {
    label: "Passo 01",
    title: "Chame no WhatsApp",
    icon: MessageCircle,
    description: "Entre em contato de forma rápida e fácil."
  },
  {
    label: "Passo 02",
    title: "Envie fotos",
    icon: Camera,
    description: "Mande fotos dos seus estofados para avaliação."
  },
  {
    label: "Passo 03",
    title: "Receba o orçamento",
    icon: FileText,
    description: "Enviamos orçamento justo sem compromisso."
  },
  {
    label: "Passo 04",
    title: "Agendamento rápido",
    icon: CalendarCheck,
    description: "Escolha o melhor dia, vamos até você!"
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

function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <SectionHeader
        badge="Simples e rápido"
        title="Como"
        highlight="funciona"
      />

      <motion.div
        className="section-container relative"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="hidden lg:block pointer-events-none absolute left-0 right-0 top-10 mx-auto h-px w-full max-w-4xl bg-border" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <motion.div
              key={step.label}
              variants={item}
              className="relative text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-background bg-secondary text-primary">
                <step.icon className="h-8 w-8" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {step.label}
              </p>
              <h3 className="mt-1 text-lg font-bold text-neutral-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default HowItWorks;

