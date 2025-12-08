import { Sparkles } from "lucide-react";
import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-carbon/50 border cyber-border backdrop-blur-sm">
      <Sparkles className="w-4 h-4 text-cyber" />
      <span className="text-xs font-orbitron font-semibold text-cyber uppercase">
        {children}
      </span>
    </div>
  );
}
