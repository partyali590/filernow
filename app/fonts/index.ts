// src/fonts/index.ts
import localFont from "next/font/local";

export const inter = localFont({
    src: "./Inter-Variable.woff2",
    variable: "--font-inter",
    weight: "100 900", // variable range, not a fixed number
    display: "swap",
});

export const plusJakarta = localFont({
    src: "./PlusJakartaSans-Variable.woff2",
    variable: "--font-jakarta",
    weight: "200 800", // Plus Jakarta Sans variable range
    display: "swap",
});