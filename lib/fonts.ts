import {
  Playfair_Display,
  Raleway,
  Source_Sans_3,
  Inter,
} from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})
export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  preload: true,
})
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
})
export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  preload: false,
})

export const fontVariables = `${inter.variable} ${sourceSans.variable} ${playfair.variable} ${raleway.variable}`
