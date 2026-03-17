import { Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-white">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-center md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold">
            Ultra<span className="text-primary">Hype</span>
          </span>
        </div>
        <p className="text-xs sm:text-sm text-white/40">
          © 2024 UltraHype Higienização. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

