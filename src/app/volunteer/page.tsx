"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle, FaHandsHelping } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/ui";
import { IMAGES } from "@/lib/data";

export default function VolunteerPage() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "", email: "", city: "", profession: "", skills: "", availability: "Weekends" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageHero eyebrow="Volunteer" title="Give time, get blessings" desc="100+ volunteers already serve — teachers, doctors, students, drivers, artists. One hour a week can change a life." image={IMAGES.volunteers} />
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Application" title="Join the seva family" />
          <Reveal className="mt-8">
            <form onSubmit={submit} className="glass-card rounded-[2rem] p-7 md:p-10 grid gap-4">
              <AnimatePresence>
                {done && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 p-5 flex gap-3 items-center text-emerald-700 dark:text-emerald-300 font-bold">
                    <FaCheckCircle className="text-3xl" /> Dhanyavaad {form.name || "Volunteer"}! Application received — our team will call you within 48 hours. ❤
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  ["name", "Full Name *", "text"],
                  ["mobile", "Mobile Number *", "tel"],
                  ["email", "Email", "email"],
                  ["city", "City *", "text"],
                  ["profession", "Profession", "text"],
                  ["skills", "Skills (teaching, medical…)", "text"],
                ].map(([k, ph, t]) => (
                  <input
                    key={k}
                    required={ph.includes("*")}
                    type={t}
                    placeholder={ph}
                    value={(form as Record<string, string>)[k]}
                    onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                    className="rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 px-5 py-3.5 outline-none focus:border-teal-500 font-medium"
                  />
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <select value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })} className="rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-900 px-5 py-3.5 font-medium">
                  <option>Weekends</option>
                  <option>Evenings</option>
                  <option>Full-time</option>
                  <option>Online only</option>
                </select>
                <label className="rounded-2xl border border-dashed border-teal-400 px-5 py-3.5 text-sm font-bold text-slate-500 dark:text-slate-300 cursor-pointer hover:bg-teal-50 dark:hover:bg-white/5">
                  📷 Upload Photo (optional)
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>
              <button className="btn-lux mt-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-8 py-4 font-bold text-white text-lg inline-flex justify-center items-center gap-2">
                <FaHandsHelping /> Submit Application
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
