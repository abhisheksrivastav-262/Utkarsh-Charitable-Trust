"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/ui";
import { BRAND, IMAGES } from "@/lib/data";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Come, meet our family" desc="Moradabad centre open Mon–Sat 9 AM – 7 PM. Call, WhatsApp or just walk in with love." image={IMAGES.city} />
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8">
          <div className="grid gap-4 content-start">
            <SectionHeading align="left" eyebrow="Reach Us" title="We reply within 24 hours" />
            {[
              { icon: <FaMapMarkerAlt />, t: "Address", d: BRAND.address },
              { icon: <FaPhone />, t: "Phone / WhatsApp", d: `${BRAND.phone} • wa.me/${BRAND.whatsapp}` },
              { icon: <FaEnvelope />, t: "Email", d: BRAND.email },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.08}>
                <div className="flex gap-4 rounded-3xl border border-slate-100 dark:border-white/10 p-5 bg-white dark:bg-slate-900 shadow">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-700 text-white text-xl">{x.icon}</div>
                  <div><p className="font-bold text-slate-900 dark:text-white">{x.t}</p><p className="text-sm text-slate-500 dark:text-slate-400 mt-1 break-words">{x.d}</p></div>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow border border-slate-100 dark:border-white/10 bg-slate-100 dark:bg-white/5">
                <iframe title="map" src={BRAND.mapEmbed} className="h-72 w-full" loading="lazy" />
              </div>
              <a
                href="https://www.google.com/maps?q=Moradabad,Uttar+Pradesh,India"
                target="_blank"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-teal-700 dark:text-amber-400 hover:underline"
              >
                <FaMapMarkerAlt /> Open in Google Maps →
              </a>
            </Reveal>
          </div>
          <Reveal>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="glass-card rounded-[2rem] p-7 md:p-9 grid gap-4 h-fit">
              <h3 className="font-display text-2xl font-bold">Send a Message</h3>
              <AnimatePresence>
                {sent && (
                  <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 p-4 font-bold text-emerald-700 dark:text-emerald-300">
                    <FaCheckCircle /> Message sent! We will contact you soon. ❤
                  </motion.p>
                )}
              </AnimatePresence>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Your Name *" className="rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 px-5 py-3.5 outline-none focus:border-teal-500" />
                <input required placeholder="Mobile *" className="rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 px-5 py-3.5 outline-none focus:border-teal-500" />
              </div>
              <input placeholder="Email" type="email" className="rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 px-5 py-3.5 outline-none focus:border-teal-500" />
              <input placeholder="Subject (Donation / Volunteer / CSR…)" className="rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 px-5 py-3.5 outline-none focus:border-teal-500" />
              <textarea required rows={5} placeholder="Your message…" className="rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 px-5 py-3.5 outline-none focus:border-teal-500" />
              <button className="btn-lux rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-bold text-white inline-flex justify-center items-center gap-2">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
