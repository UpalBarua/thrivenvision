import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|avatar|card|dropdown|input|modal|navbar|radio|scroll-shadow|select|switch|table|tabs|chip).js",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      addCommonColors: false,
      themes: {
        dark: {
          colors: {
            background: "#151515",
            foreground: "#F2EFEA",
            primary: {
              "100": "#EFCDFE",
              "200": "#DA9CFD",
              "300": "#BF6AF9",
              "400": "#A444F4",
              "500": "#f9b3d1",
              "600": "#5F07CC",
              "700": "#4605AB",
              "800": "#31038A",
              "900": "#230172",
              foreground: "#151515",
              DEFAULT: "#04f06a",
            },
            success: {
              "100": "#F0FCD0",
              "200": "#DEFAA3",
              "300": "#C3F173",
              "400": "#A7E34E",
              "500": "#7FD11B",
              "600": "#64B313",
              "700": "#4C960D",
              "800": "#377908",
              "900": "#286405",
              DEFAULT: "#7FD11B",
            },
            warning: {
              "100": "#FFFBCD",
              "200": "#FFF59B",
              "300": "#FFEF6A",
              "400": "#FFE845",
              "500": "#FFDE07",
              "600": "#DBBB05",
              "700": "#B79A03",
              "800": "#937A02",
              "900": "#7A6301",
              DEFAULT: "#FFDE07",
            },
            danger: {
              "100": "#FFEBD3",
              "200": "#FFD1A6",
              "300": "#FFB27A",
              "400": "#FF9359",
              "500": "#FF6123",
              "600": "#DB4219",
              "700": "#B72911",
              "800": "#93150B",
              "900": "#7A0706",
              DEFAULT: "#FF6123",
            },
            content1: "#151515",
          },
        },
        light: {
          colors: {
            background: "#e7e6ed",
            foreground: "#020007",
            primary: {
              "100": "#EFCDFE",
              "200": "#DA9CFD",
              "300": "#BF6AF9",
              "400": "#A444F4",
              "500": "#46B472",
              "600": "#5F07CC",
              "700": "#4605AB",
              "800": "#31038A",
              "900": "#230172",
              DEFAULT: "#7B0AEE",
            },
            success: {
              "100": "#F0FCD0",
              "200": "#DEFAA3",
              "300": "#C3F173",
              "400": "#A7E34E",
              "500": "#7FD11B",
              "600": "#64B313",
              "700": "#4C960D",
              "800": "#377908",
              "900": "#286405",
              DEFAULT: "#7FD11B",
            },
            warning: {
              "100": "#FFFBCD",
              "200": "#FFF59B",
              "300": "#FFEF6A",
              "400": "#FFE845",
              "500": "#FFDE07",
              "600": "#DBBB05",
              "700": "#B79A03",
              "800": "#937A02",
              "900": "#7A6301",
              DEFAULT: "#FFDE07",
            },
            danger: {
              "100": "#FFEBD3",
              "200": "#FFD1A6",
              "300": "#FFB27A",
              "400": "#FF9359",
              "500": "#FF6123",
              "600": "#DB4219",
              "700": "#B72911",
              "800": "#93150B",
              "900": "#7A0706",
              DEFAULT: "#FF6123",
            },
          },
        },
      },
    }),
  ],
};

export default config;
