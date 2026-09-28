import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaAward, FaCheckCircle, FaHeart, FaArrowRight } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import DonateCTA from "@/components/DonateCTA";
import { Reveal, SectionHeading } from "@/components/ui";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = { title: "About Us" };

const TIMELINE = [
  { year: "2022", title: "The Beginning", desc: "Trust registered on 24 May 2022. First Signal Pathshala and slum evening classes begin in Moradabad." },
  { year: "2023", title: "250+ Campaigns", desc: "Road safety, health camps, women skill centres and festival sevas expand to 15+ districts of UP." },
  { year: "2024", title: "Begging to School", desc: "300 signal children enrolled in schools. 5000+ children and 1000+ elders served overall." },
  { year: "2025", title: "Vridh Seva Dham", desc: "Bhoomi Pujan of Shri Hanumant Vridh Seva Dham — a 50-room old-age home. Construction begins with public donations." },
  { year: "2026", title: "Vision 10000", desc: "Target: 10,000 saplings, 1000 school enrollments and completion of Vridh Dham Phase-1." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A family of 5000+ smiles and counting" desc="Registered on 24 May 2022 — education, healthcare, child welfare, women empowerment and elder seva across India." image={IMAGES.community} />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="img-zoom overflow-hidden rounded-[2rem] shadow-2xl">
              <Image src={IMAGES.handsTogether} alt="Founder story" width={900} height={1000} className="aspect-[4/5] object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Founder Story" title="One man, one signal, one mission" />
            <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">
              Mukesh Kumar Kashyap would stop at Moradabad traffic signals and see small children
              begging instead of studying. One evening he carried a blackboard to a slum and taught
              12 children under a streetlight. That night, Utkarsh was born.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Today that blackboard has grown into 10 missions — Signal Pathshala, slum schools,
              women skill centres, health camps and the dream project{" "}
              <strong>Shri Hanumant Vridh Seva Dham</strong>.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Education first", "Zero-hunger drives", "Women-led change", "Respect for elders"].map((t) => (
                <p key={t} className="flex items-center gap-2 font-semibold"><FaCheckCircle className="text-emerald-500" /> {t}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-teal-50/60 dark:bg-white/5">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Objectives" title="What we promise every day" />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["Shiksha", "No child out of school in our reach areas."],
              ["Swasthya", "Free health access for slums & villages."],
              ["Suraksha", "Road-safety education saving lives."],
              ["Sammaan", "Dignity for women and senior citizens."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="glass-card rounded-3xl p-6 text-center h-full">
                  <p className="font-display text-2xl font-bold text-teal-700 dark:text-amber-400">{t}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 rounded-3xl bg-gradient-to-r from-teal-700 to-emerald-700 text-white px-8 py-6">
              <FaAward className="text-4xl text-amber-400" />
              <p className="text-center md:text-left font-semibold">
                Registered Social Organization • Estd. 24 May 2022 • Moradabad, Uttar Pradesh • 80G & CSR documentation ready
              </p>
              <Link href="/donate" className="btn-lux rounded-full bg-amber-500 px-7 py-3 font-bold whitespace-nowrap">Support Us <FaArrowRight className="inline" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Journey" title="Our timeline of seva" />
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-teal-600 via-amber-500 to-emerald-600 md:-translate-x-1/2 rounded" />
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={0.05 * i}>
                <div className={`relative flex gap-6 pb-10 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-teal-600 to-amber-500 text-white font-black text-xs border-4 border-white dark:border-slate-950 shadow">
                    {t.year.slice(2)}
                  </div>
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 ? "md:pl-14 md:text-left" : "md:pr-14 md:text-right"}`}>
                    <div className="glass-card rounded-3xl p-6">
                      <p className="font-black text-amber-600 text-xl">{t.year}</p>
                      <h3 className="font-display text-xl font-bold mt-1">{t.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link href="/volunteer" className="inline-flex items-center gap-2 rounded-full bg-teal-700 text-white px-8 py-4 font-bold hover:bg-teal-800">
              <FaHeart /> Be Part of Next Chapter
            </Link>
          </div>
        </div>
      </section>

      <DonateCTA />
    </>
  );
}
