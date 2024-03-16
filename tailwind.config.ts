import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "loading": {
          from: { rotate: "0deg"},
          to: { rotate: "360deg"}
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "loading": "loading 1.15s ease-out infinite",
      },
      boxShadow: {
        carousel: "inset 0 0 100px 10px rgba(0, 0, 0, .2)",
        anuncios: "5px 5px 10px 0px rgba(0, 0, 0, .3)",
        servicos: "0 0 10px 0 rgba(255, 255, 255, .6)",
        logoFooter: "0 0 12px rgba(41, 134, 255, .5)",
        servicosHover: "0 0 10px 4px rgba(200, 200, 200, .8)",
        whatsappHover: "0 0 10px 4px rgba(36, 201, 36, .6)",
        menu: "inset 0 40px 20px -24px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .3)",
        menuitems: "0 0 20px -10px rgba(0,0,0,1)",
        line: "0 0 10px 0 rgba(41, 134, 255, .2)",
        socMed: "0 0 10px 2px rgba(0, 0, 0, .4)",
        box: "inset 0 0 10px 0 rgba(41, 134, 255, .5), inset 0 0 100px 0 rgba(41, 134, 255, .5)",
        division: "0 0 40px 0 rgba(0, 0, 0, 1)",
        send: "0 0 40px 0 rgba(24, 100, 199, .5)",
        under: "0 0 50px 5px rgba(41, 134, 255, 1)"
      },
      fontFamily: {
        poppins: ['Poppins'],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config