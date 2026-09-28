"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp, FaHeart, FaWhatsapp } from "react-icons/fa";
import { BRAND } from "@/lib/data";

function ripple(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = document.createElement("span");
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  r.className = "ripple";
  r.style.width = r.style.height = size + "px";
  r.style.left = e.clientX - rect.left - size / 2 + "px";
  r.style.top = e.clientY - rect.top - size / 2 + "px";
  el.appendChild(r);
  setTimeout(() => r.remove(), 700);
}

export default function FloatingButtons() {
  const [top, setTop] = useState(false);
  useEffect(() => {
    const fn = () => setTop(window.scrollY > 600);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Namaste! I want to support Utkarsh Charitable Trust.")}`}
        target="_blank"
        onClick={ripple}
        className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50 grid h-13 w-13 sm:h-14 sm:w-14 place-items-center rounded-full bg-[#25D366] text-white text-2xl shadow-2xl hover:scale-110 active:scale-95 transition"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Desktop pill */}
      <Link
        href="/donate"
        onClick={ripple}
        className="fixed bottom-6 right-6 z-50 hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3.5 font-bold text-white shadow-2xl animate-floaty"
      >
        <FaHeart className="animate-pulse" /> Donate
      </Link>

      {/* Mobile compact donate bubble */}
      <Link
        href="/donate"
        aria-label="Donate now"
        className="fixed bottom-5 right-4 z-50 md:hidden grid h-13 w-13 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-xl shadow-2xl animate-pulse-ring"
      >
        <FaHeart className="animate-pulse" />
      </Link>

      <AnimatePresence>
        {top && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 grid h-11 w-11 place-items-center rounded-full glass-card text-teal-700 dark:text-amber-400 hover:scale-110 active:scale-95 transition"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
