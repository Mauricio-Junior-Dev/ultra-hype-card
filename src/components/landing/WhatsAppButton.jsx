import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5500000000000"; // ajuste para o número real
const DEFAULT_MESSAGE =
  "Olá, gostaria de um orçamento para higienização de estofados";

export function getWhatsAppUrl(message = DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-whats px-5 py-4 text-white shadow-2xl shadow-green-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-400 focus-visible:ring-offset-background"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Abrir WhatsApp para orçamento"
    >
      <MessageCircle className="w-6 h-6 fill-white text-white" />
      <span className="hidden sm:inline text-sm font-semibold">
        WhatsApp
      </span>
    </motion.a>
  );
}

export default WhatsAppButton;
