import Link from "next/link";
import { FaHeart, FaHandsHelping } from "react-icons/fa";
import { Reveal } from "./ui";

export default function DonateCTA() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-800 via-emerald-700 to-teal-900 px-5 sm:px-6 py-12 md:p-16 text-center text-white shadow-2xl">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_15%_20%,#f59e0b,transparent_40%),radial-gradient(circle_at_85%_80%,#fff,transparent_30%)]" />
            <div className="animate-blob absolute -top-16 -left-16 h-64 w-64 rounded-full bg-amber-400/25 blur-3xl" />
            <div className="animate-blob-slow absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 sm:px-5 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em]">
                <FaHandsHelping /> Your ₹100 can feed a child
              </span>
              <h2 className="font-display mx-auto mt-4 max-w-3xl text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-balance">
                Be the reason someone smiles today
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-teal-50/90">
                Donate for education kits, elder meals, health camps and Hanumant Vridh Seva Dham
                construction. 100% transparency • 80G receipt • CSR welcome.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/donate"
                  className="btn-lux inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-9 py-4 font-bold text-lg text-white"
                >
                  <FaHeart /> Donate Now
                </Link>
                <Link
                  href="/volunteer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-9 py-4 font-bold hover:bg-white hover:text-teal-800 transition"
                >
                  Become Volunteer
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
