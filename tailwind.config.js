/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        appBg: "#0a0e1a",
        cardBg: "#111827",
        surfaceBg: "#151c2c",
        accent: {
          50: "#e6f9ff",
          100: "#b3efff",
          200: "#80e5ff",
          300: "#4ddbff",
          400: "#1ad1ff",
          500: "#00C6FF",
          600: "#0072FF",
          700: "#005ecc",
          800: "#004a99",
          900: "#003566",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0, 198, 255, 0.08), 0 8px 32px rgba(0, 0, 0, 0.4)",
        "glow-lg": "0 0 0 1px rgba(0, 198, 255, 0.12), 0 20px 60px rgba(0, 0, 0, 0.5)",
        "glow-accent": "0 0 20px rgba(0, 198, 255, 0.15), 0 0 60px rgba(0, 114, 255, 0.08)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.04)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)",
        "gradient-accent-hover": "linear-gradient(135deg, #1ad1ff 0%, #1a85ff 100%)",
        "gradient-dark": "radial-gradient(ellipse at top, #111827 0%, #0a0e1a 50%, #060810 100%)",
        "gradient-card": "linear-gradient(145deg, rgba(17,24,39,0.8) 0%, rgba(15,23,42,0.6) 100%)",
        "gradient-radial": "radial-gradient(circle at 50% 0%, rgba(0,198,255,0.06) 0%, transparent 60%)",
      },
      animation: {
        pulseSlow: "pulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        slideUp: "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        slideDown: "slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        fadeIn: "fadeIn 0.6s ease-out both",
        scaleIn: "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 6s ease-in-out infinite",
        glow: "glowPulse 3s ease-in-out infinite",
        scan: "scan 2s ease-in-out infinite",
        progressFill: "progressFill 1.2s cubic-bezier(0.16, 1, 0.3, 1) both",
        countUp: "countUp 1.5s ease-out both",
        typing: "typing 1.5s steps(20) infinite",
        orbit: "orbit 8s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 198, 255, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 198, 255, 0.2), 0 0 80px rgba(0, 114, 255, 0.1)" },
        },
        scan: {
          "0%, 100%": { opacity: "0.3", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(100%)" },
        },
        progressFill: {
          from: { width: "0%" },
          to: { width: "var(--target-width)" },
        },
        typing: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.3" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(24px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(24px) rotate(-360deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
