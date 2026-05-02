import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function enableCardIds() {
  return {
    name: "enable-card-ids",
    transform(code, id) {
      if (!id.endsWith("/src/App.jsx")) return null;

      let updated = code.replace(
        'function Card({ children, className = "" }) {',
        'function Card({ children, className = "", ...props }) {'
      );

      updated = updated.replace(
        '<div className={`rounded-[2rem] border border-[#d9e2f2] bg-white p-7 shadow-[0_20px_60px_rgba(7,26,61,0.08)] ${className}`}>',
        '<div {...props} className={`rounded-[2rem] border border-[#d9e2f2] bg-white p-7 shadow-[0_20px_60px_rgba(7,26,61,0.08)] ${className}`}> '
      );

      return updated;
    },
  };
}

export default defineConfig({
  plugins: [enableCardIds(), react()],
});
