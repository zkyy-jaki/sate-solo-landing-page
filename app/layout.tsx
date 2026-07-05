import type { Metadata } from "next";
import { Inter,Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter ({
  subsets :  ["latin"],
  variable : "--font inter",
  display :  "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
export const metadata: Metadata = {
  title:{
    default : "Warung Sate Solo",
    template : "%s | Warung Sate Solo",
  },
  description:
    "Nikmati cita rasa autentik Sate Solo dengan resep turun-temurun. Tersedia sate ayam, sate kambing, tongseng, dan berbagai hidangan khas Solo.",
  keywords: [
    "Sate Solo",
    "Warung Sate",
    "Kuliner Solo",
    "Sate Ayam",
    "Sate Kambing",
    "Tongseng",
    "Restaurant",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-text"
      >{children}</body>
    </html>
  );
}
