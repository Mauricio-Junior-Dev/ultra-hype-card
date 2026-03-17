import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeader({ badge, title, highlight, subtitle, dark = false }) {
  return (
    <motion.div
      className="section-container text-center mb-12 md:mb-16"
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4 md:mb-5 border-primary/30 bg-primary/5 text-primary">
        {badge}
      </div>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="text-primary">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl mx-auto text-sm sm:text-base ${
            dark ? "text-white/60" : "text-black/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeader;

