"use client";
import { useState } from "react";
import Image from "next/image";
import { FaHeart, FaQrcode, FaUniversity, FaMobileAlt, FaHandshake, FaCheckCircle } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { IMAGES } from "@/lib/data";

const AMOUNTS = [100, 500, 1100, 5100, 11000, 51000];

export default function DonatePage() {
  const [amt, setAmt] = useState(1100);
  const [custom, setCustom] = useState("");
  const finalAmt = custom ? Number(custom) || 0 : amt;

  return (
    <>
      <PageHero eyebrow="Donate" title="Your kindness builds futures" desc="Education kits • Elder meals • Health camps • Vridh Seva Dham — 100% transparency with receipt." image={IMAGES.donation} />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-[2rem] bg-gradient-to-br from-[#032622] to-teal-800 p-8 md:p-10 text-white shadow-2xl">
              <h2 className="font-display text-3xl font-bold flex items-center gap-3"><FaHeart className="text-amber-400" /> Choose Your Seva</h2>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {AMOUNTS.map((a) => (
                  <button
                    key={a}
                    onClick={() => { setAmt(a); setCustom(""); }}
                    className={`rounded-2xl px-3 py-4 font-black transition ${amt === a && !custom ? "bg-amber-500 text-white scale-105 shadow-xl" : "bg-white/10 hover:bg-white/20"}`}
                  >
                    ₹{a.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
              <input
                value={custom}
                onChange={(e) => setCustom(e.target.value.replace(/\D/g, ""))}
                placeholder="Custom amount (₹)"
                inputMode="numeric"
                className="mt-4 w-full rounded-2xl bg-white/10 border border-white/20 px-5 py-4 font-bold outline-none placeholder:text-teal-100/50 focus:border-amber-400"
              />
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs font-bold">
                {["Education Kit", "Elder Meal", "Vridh Dham"].map((c) => (
                  <span key={c} className="rounded-full bg-white/10 px-3 py-2 text-center">{c}</span>
                ))}
              </div>
              <a
                href={`https://wa.me/919412200000?text=${encodeURIComponent(`Namaste! I want to donate Rs.${finalAmt} to Utkarsh Charitable Trust.`)}`}
                target="_blank"
                className="btn-lux mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-lg font-black"
              >
                <FaHeart /> Donate ₹{finalAmt.toLocaleString("en-IN")}
              </a>
              <p className="mt-3 text-center text-xs text-teal-100/70">UPI • Bank Transfer • CSR • 80G receipt on every donation</p>
            </div>
          </Reveal>

          <div className="grid gap-5 content-start">
            <Reveal>
              <div className="glass-card rounded-3xl p-7 text-center">
                <FaQrcode className="mx-auto text-4xl text-teal-700 dark:text-amber-400" />
                <h3 className="font-display mt-3 text-xl font-bold">Scan & Pay (UPI)</h3>
                <div className="mx-auto mt-4 grid h-44 w-44 place-items-center rounded-2xl border-2 border-dashed border-teal-300 bg-white p-3">
                  <Image src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent("upi://pay?pa=utkarshcharitabletrust@upi&pn=UtkarshCharitableTrust&cu=INR")}`} alt="Donate QR" width={160} height={160} unoptimized />
                </div>
                <p className="mt-3 font-mono text-sm font-bold">utkarshcharitabletrust@upi</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-100 dark:border-white/10 p-7 bg-white dark:bg-slate-900">
                <h3 className="font-bold flex items-center gap-2"><FaUniversity className="text-teal-600" /> Bank Details</h3>
                <div className="mt-3 grid gap-1.5 text-sm font-medium">
                  <p>Account: <strong>Utkarsh Charitable Trust</strong></p>
                  <p>A/c No: <strong>501002XXXXXXXX</strong></p>
                  <p>IFSC: <strong>HDFC0000000</strong> • Branch: Moradabad</p>
                </div>
                <h3 className="mt-5 font-bold flex items-center gap-2"><FaMobileAlt className="text-amber-500" /> Why Donate?</h3>
                <ul className="mt-2 grid gap-1.5 text-sm">
                  {["₹100 = school kit for 1 child", "₹500 = one month elder meals", "₹1,100 = one Dham brick in your name", "₹11,000 = full-day bhandara"].map((t) => (
                    <li key={t} className="flex gap-2"><FaCheckCircle className="mt-0.5 text-emerald-500 shrink-0" /> {t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-7 text-white">
                <h3 className="font-display text-xl font-bold flex items-center gap-2"><FaHandshake /> CSR Partnership</h3>
                <p className="mt-2 text-sm text-white/90">Schools, hospitals, Vridh Dham naming rights & district-wide campaigns. Full documentation & impact reports.</p>
                <a href="mailto:info@utkarshcharitabletrust.com" className="mt-4 inline-block rounded-full bg-white px-6 py-3 text-sm font-bold text-orange-600">csr@utkarshcharitabletrust.com</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
