import type { Metadata } from "next";
import Wrapper from "@/components/Layouts/Wrapper";
import { fonts } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deltaware Solution - Next Generation Web Solution",
  description: "Deltaware Solution is a next generation of web solution",
  keywords:
    "Deltaware Solution, Next Generation Web Solution, Web Development, Software Development, Digital Solution, Innovative Technology, Modern Web Solution, Deltaware Solution, Deltaware Solution, Deltaware Solution, Next Generation Web Solution",
  authors: [
    { name: "Deltaware Solution", url: "https://deltawaresolution.com" },
  ],
  publisher: "Deltaware Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonts.inter.variable} ${fonts.poppins.variable} ${fonts.orbitron.variable} ${fonts.firaCode.variable}`}
    >
      <body className="antialiased">
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
