import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auto Sales Brasil",
  description: "Created by @Reh_lmelo",
};

const scrollbarStyle = `

* {
  scrollbar-width: thin; /* Largura fina da barra de rolagem */
  scrollbar-color: #262233 transparent; /* Cor da barra de rolagem e fundo transparente */
}

*::-webkit-scrollbar {
  width: 8px; /* Largura da barra de rolagem no Chrome */
}

*::-webkit-scrollbar-track {
  background: transparent; /* Fundo transparente da barra de rolagem no Chrome */
}

*::-webkit-scrollbar-thumb {
  background-color: #262233; /* Cor da alça da barra de rolagem no Chrome */
}
;
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "#f8f8ff", fontFamily: "poppins" }} className={inter.className}>
        <style>{scrollbarStyle}</style>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
