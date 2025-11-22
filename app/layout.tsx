import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  weight: ["300", "500", "700"] 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  weight: ["400", "500"] 
});

export const metadata: Metadata = {
  title: "CreatoRocket | O Sistema Operacional do Creator",
  description: "Planeje, organize e otimize seu canal do YouTube com Inteligência Artificial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#030305] text-white antialiased selection:bg-[#00A2FF] selection:text-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}