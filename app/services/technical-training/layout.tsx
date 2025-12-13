import React from "react";

export const metadata = {
  title: "Technical Training - Deltaware Solution",
  description:
    "Deltaware Solution is a leading provider of AI-powered Solution for the financial services industry. Our team of experts is dedicated to helping our clients succeed in a data-driven world.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}
