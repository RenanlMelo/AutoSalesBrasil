import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auto Sales Brasil",
  description: "Created by @Reh_lmelo",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "#f8f8ff", fontFamily: "poppins" }} className={inter.className}>
        <style></style>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
