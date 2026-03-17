/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        secondary: "hsl(var(--secondary))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        whats: "#22c55e",
        "hero-dark": "#000000",
        "hero-darker": "#111111",
        "hero-deep": "#1a1a1a",
        "star-yellow": "#facc15"
      },
      borderRadius: {
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 2px)",
        "2xl": "1.25rem"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

