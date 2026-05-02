import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function fixPaymentScrollTarget() {
  return {
    name: "fix-payment-scroll-target",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith("/src/App.jsx")) return null;

      let updated = code;

      // Make Card forward id/props if the source uses <Card id="payment">.
      updated = updated.replace(
        'function Card({ children, className = "" }) {',
        'function Card({ children, className = "", id }) {'
      );

      updated = updated.replace(
        '<div className={`rounded-[2rem] border border-[#d9e2f2] bg-white p-7 shadow-[0_20px_60px_rgba(7,26,61,0.08)] ${className}`}>',
        '<div id={id} className={`scroll-mt-28 rounded-[2rem] border border-[#d9e2f2] bg-white p-7 shadow-[0_20px_60px_rgba(7,26,61,0.08)] ${className}`}> '
      );

      // Extra-safe anchor target: even if Card props are not forwarded, #payment exists.
      updated = updated.replace(
        '<section id="fees" className="px-5 py-20">',
        '<section id="fees" className="px-5 py-20"><div id="payment" className="scroll-mt-28"></div>'
      );

      // Replace temporary review placeholder text with a professional parent-focused line.
      updated = updated.replace(
        'text="මෙම අදහස් sample ලෙස දමා ඇත. පසුව සැබෑ reviews ලැබුණු විට ඒවාට replace කළ හැක."',
        'text="දරුවාගේ විශ්වාසය, සිතීමේ හැකියාව සහ ප්‍රශ්න විසඳීමේ පුහුණුව වර්ධනය වීම පිළිබඳ දෙමාපියන්ගේ අදහස්."'
      );

      return updated;
    },
  };
}

export default defineConfig({
  plugins: [fixPaymentScrollTarget(), react()],
});
