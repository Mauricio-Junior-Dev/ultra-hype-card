import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { getWhatsAppUrl } from "./WhatsAppButton.jsx";

const items = [
  {
    label: "Sofá 3 lugares",
    before:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"
  },
  {
    label: "Colchão Queen",
    before:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80"
  },
  {
    label: "Banco automotivo",
    before:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=900&q=80"
  }
];

function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const current = items[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <section className="section-padding bg-black text-white">
      <SectionHeader
        badge="Resultados Reais"
        title="Antes e"
        highlight="Depois"
        subtitle="Veja a transformação com nossos olhos. Resultados que falam por si."
        dark
      />

      <div className="section-container">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            {current.label}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Antes */}
          <motion.div
            key={`${index}-before`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl bg-neutral-900"
          >
            <div
              className="h-64 sm:h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${current.before})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-900">
              ANTES
            </span>
          </motion.div>

          {/* Depois */}
          <motion.div
            key={`${index}-after`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl bg-neutral-900"
          >
            <div
              className="h-64 sm:h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${current.after})` }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              DEPOIS
            </span>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {items.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  active
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={getWhatsAppUrl(
              "Olá, vi os resultados de antes e depois e quero esse resultado para meus estofados."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-10 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-primary/40 transition hover:bg-[#90070f]"
          >
            Quero esse resultado!
          </a>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;

