import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Menu, X, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "./WhatsAppButton.jsx";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#antes-depois", label: "Antes e Depois" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" }
];

function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="section-container flex h-16 md:h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#inicio");
          }}
          className="inline-flex items-center gap-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Sparkles className="w-5 h-5" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-white">
              Clean<span className="text-primary">Pro</span>
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
              Higienização
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:bg-[#90070f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <MessageCircle className="w-4 h-4" />
            Orçamento via WhatsApp
          </a>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-b border-white/10 bg-black/95 lg:hidden"
          >
            <div className="section-container flex flex-col gap-1 pb-4 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full rounded-lg px-2 py-3 text-left text-sm font-medium text-white/80 hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 hover:bg-[#90070f]"
              >
                <MessageCircle className="w-4 h-4" />
                Orçamento via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

