import type { Metadata } from "next";
import Wrapper from "@/components/Layouts/Wrapper";
import { fonts } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deltaware Solution - Next Generation Web Solution",
  description:
    "Deltaware Solutions is a leading provider of AI-powered solutions for the financial services industry. Our team of experts is dedicated to helping our clients succeed in a data-driven world.",

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
