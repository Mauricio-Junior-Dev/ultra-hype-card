import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  MessageCircle,
  Shield,
  Star
} from "lucide-react";
import { getWhatsAppUrl } from "./WhatsAppButton.jsx";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-hero-dark via-hero-darker to-hero-deep text-white">
      {/* círculos decorativos */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/10 to-transparent" />

      <div className="section-container section-padding relative pt-24 md:pt-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Coluna esquerda */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* badges */}
            <motion.div
              className="mb-6 flex flex-wrap items-center gap-3"
              variants={item}
            >
              {[
                { label: "Profissional", icon: Shield },
                { label: "Secagem rápida", icon: Clock },
                { label: "5 estrelas", icon: Star }
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <badge.icon className="h-3 w-3" />
                  </span>
                  <span className="text-white/80">{badge.label}</span>
                </div>
              ))}
            </motion.div>

            {/* título */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight"
            >
              Seu sofá{" "}
              <span className="text-primary">limpo</span>, cheiroso e como{" "}
              <span className="relative inline-block">
                novo!
                <svg
                  className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-primary"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8 C 20 2, 45 2, 98 8"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </svg>
              </span>
            </motion.h1>

            {/* subtítulo */}
            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base sm:text-lg text-white/65"
            >
              Higienização profissional de estofados residenciais e automotivos.
              Transforme seus ambientes com qualidade e segurança.
            </motion.p>

            {/* botões */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-primary/40 transition hover:bg-[#90070f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <MessageCircle className="h-5 w-5" />
                Solicitar orçamento agora
              </a>

              <button
                type="button"
                onClick={() => {
                  const el = document.querySelector("#servicos");
                  if (!el) return;
                  const y =
                    el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-sm sm:text-base font-semibold text-white transition hover:bg-white/10"
              >
                Nossos serviços
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* social proof */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {["A", "B", "C", "D"].map((letter) => (
                    <div
                      key={letter}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-hero-dark/80 bg-gradient-to-br from-white/10 to-white/5 text-xs font-semibold text-white"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div className="ml-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-star-yellow text-star-yellow"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-medium text-white/60">
                    +200 clientes satisfeitos
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna direita - imagem */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl">
              <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616628188460-8fea8daa16fb?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* card flutuante */}
              <motion.div
                className="absolute -left-8 bottom-16 w-64 rounded-2xl bg-white p-4 shadow-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      100% Seguro
                    </p>
                    <p className="mt-1 text-xs text-neutral-600">
                      Produtos antialérgicos e seguros para crianças e pets.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
