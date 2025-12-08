"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
