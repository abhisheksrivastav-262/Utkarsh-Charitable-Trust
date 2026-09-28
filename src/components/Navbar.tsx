"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHeart,
  FaSun,
  FaMoon,
  FaChevronDown,
  FaChevronRight,
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaThLarge,
  FaPrayingHands,
  FaImages,
  FaNewspaper,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { ACTIVITIES, BRAND, NAV } from "@/lib/data";

const MOBILE_LINKS = [
  { label: "Home", href: "/", Icon: FaHome },
  { label: "About", href: "/about", Icon: FaInfoCircle },
  { label: "Leadership", href: "/leadership", Icon: FaUsers },
  { label: "Activities", href: "/activities", Icon: FaThLarge },
  { label: "Vridh Seva Dham", href: "/vridh-seva-dham", Icon: FaPrayingHands },
  { label: "Gallery", href: "/gallery", Icon: FaImages },
  { label: "Blog", href: "/blog", Icon: FaNewspaper },
  { label: "Contact", href: "/contact", Icon: FaEnvelope },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <div className="hidden md:block bg-gradient-to-r from-teal-900 via-teal-700 to-emerald-700 text-white text-xs md:text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-3">
          <p className="truncate font-medium tracking-wide">
            {BRAND.tagline} • Estd. {BRAND.estd}
          </p>
          <div className="hidden md:flex items-center gap-4">
            <span>{BRAND.phone}</span>
            <span className="opacity-40">|</span>
            <span>{BRAND.email}</span>
          </div>
        </div>
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white dark:bg-[#03211d] border-b border-slate-200 dark:border-white/10 transition-shadow duration-300 ${
          scrolled ? "shadow-xl shadow-teal-900/10" : "shadow-sm"
        }`}
      >
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r from-teal-600 via-emerald-500 to-amber-500"
        />
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-[72px] items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-teal-600 via-emerald-600 to-amber-500 text-white text-2xl font-black shadow-lg shadow-teal-600/30 group-hover:rotate-6 transition-transform">
                उ
                <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-amber-400 border-2 border-white animate-pulse" />
              </div>
              <div className="leading-tight min-w-0">
                <p className="font-display text-base sm:text-lg md:text-xl font-bold text-black dark:text-white truncate">
                  Utkarsh <span className="text-teal-700 dark:text-teal-300">Charitable</span> Trust
                </p>
                <p className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-amber-600 dark:text-amber-400 font-bold">
                  Seva • Shiksha • Samarpan
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 text-[15px] font-semibold">
              {NAV.slice(0, 4).map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  data-active={pathname === n.href}
                  className={`nav-link px-3 py-2 rounded-full transition hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-white/10 ${
                    pathname === n.href ? "text-teal-700 dark:text-amber-400" : "text-slate-700 dark:text-slate-100"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
              <div
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 rounded-full text-slate-700 dark:text-slate-100 hover:bg-teal-50 dark:hover:bg-white/10">
                  More <FaChevronDown className={`text-xs transition ${mega ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mega && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px]"
                    >
                      <div className="glass-card rounded-3xl p-5 grid grid-cols-2 gap-2">
                        {ACTIVITIES.slice(0, 8).map((a) => (
                          <Link
                            key={a.slug}
                            href={`/activities/${a.slug}`}
                            className="rounded-2xl px-4 py-3 hover:bg-teal-600 hover:text-white transition group"
                          >
                            <p className="font-bold text-sm">{a.title}</p>
                            <p className="text-xs opacity-70 line-clamp-1">{a.tagline}</p>
                          </Link>
                        ))}
                        <Link
                          href="/activities"
                          className="col-span-2 mt-1 rounded-2xl bg-gradient-to-r from-teal-600 to-amber-500 px-4 py-3 text-center text-white font-bold text-sm"
                        >
                          View All 10 Activities →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {NAV.slice(4).map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  data-active={pathname === n.href}
                  className={`nav-link px-3 py-2 rounded-full transition hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-white/10 ${
                    pathname === n.href ? "text-teal-700 dark:text-amber-400" : "text-slate-700 dark:text-slate-100"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 dark:border-white/15 text-slate-700 dark:text-amber-300 hover:scale-105 transition"
                  aria-label="Toggle theme"
                  suppressHydrationWarning
                >
                  <FaSun className="hidden dark:block" />
                  <FaMoon className="dark:hidden" />
                </button>
              <Link
                href="/donate"
                className="btn-lux hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-2.5 font-bold text-white"
              >
                <FaHeart className="animate-pulse" /> Donate
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-teal-700 text-white"
                aria-label="Menu"
              >
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-in sidebar */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-[60] bg-black/60 lg:hidden"
              />
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 34 }}
                className="fixed right-0 top-0 bottom-0 z-[61] flex w-[86%] max-w-sm flex-col bg-white dark:bg-slate-950 shadow-2xl lg:hidden"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal-600 via-emerald-600 to-amber-500 text-white text-xl font-black">
                      उ
                    </div>
                    <div className="leading-tight">
                      <p className="font-display font-bold text-black dark:text-white">
                        Utkarsh Trust
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                        Navigation Menu
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 dark:bg-white/10 text-lg text-black dark:text-white active:scale-90 transition"
                  >
                    <FaTimes />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 py-4 grid gap-2 content-start">
                  {MOBILE_LINKS.map((n, i) => {
                    const active = pathname === n.href;
                    return (
                      <motion.div
                        key={n.href}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                      >
                        <Link
                          href={n.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 font-bold ${
                            active
                              ? "bg-gradient-to-r from-teal-700 to-emerald-600 text-white shadow-lg"
                              : "bg-slate-100 dark:bg-white/10 text-black dark:text-white"
                          }`}
                        >
                          <span
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg ${
                              active
                                ? "bg-white/20 text-white"
                                : "bg-white dark:bg-white/10 text-teal-700 dark:text-amber-400 shadow-sm"
                            }`}
                          >
                            <n.Icon />
                          </span>
                          <span className="text-[15px]">{n.label}</span>
                          <FaChevronRight className="ml-auto text-xs opacity-60" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="border-t border-slate-200 dark:border-white/10 px-4 py-4 grid gap-2.5 bg-slate-50 dark:bg-white/5">
                  <Link
                    href="/donate"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3.5 font-bold text-white shadow-lg"
                  >
                    <FaHeart /> Donate Now
                  </Link>
                  <a
                    href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 rounded-2xl border-2 border-teal-700 px-4 py-3 font-bold text-teal-800 dark:text-teal-300"
                  >
                    <FaPhone /> {BRAND.phone}
                  </a>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer so fixed header never covers page content */}
      <div aria-hidden className="h-[72px] md:h-[108px]" />
    </>
  );
}
