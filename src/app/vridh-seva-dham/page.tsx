import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaHeartbeat, FaPrayingHands, FaLeaf, FaUtensils, FaBookOpen, FaHeart, FaCheckCircle } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import DonateCTA from "@/components/DonateCTA";
import Counter from "@/components/Counter";
import { Reveal, SectionHeading } from "@/components/ui";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = { title: "Hanumant Vridh Seva Dham" };

export default function VridhDhamPage() {
  return (
    <>
      <PageHero eyebrow="Hanumant Vridh Seva Dham" title="A home where no elder is ever alone" desc="50 rooms • Medical centre • Bhajan hall • Gaushala • Organic garden — Bhoomi Pujan done, construction in progress. Donate a brick today." image={IMAGES.elderly} />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="img-zoom overflow-hidden rounded-[2rem] shadow-2xl">
              <Image src={IMAGES.elderly} alt="Bhoomi Pujan" width={900} height={1000} className="aspect-[4/5] object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Bhoomi Pujan" title="Blessed beginning, sacred dream" desc="With Vedic chants, saints' blessings and hundreds of supporters, the foundation of the Dham was laid in Moradabad — a home for abandoned and lonely senior citizens." />
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[{ v: 50, s: "", l: "Rooms Planned" }, { v: 100, s: "+", l: "Elders Capacity" }, { v: 60, s: "%", l: "Phase-1 Done" }].map((x) => (
                <div key={x.l} className="glass-card rounded-2xl p-4">
                  <p className="text-2xl font-black text-teal-700 dark:text-amber-400"><Counter value={x.v} suffix={x.s} /></p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{x.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-b from-amber-50/70 to-white dark:from-white/5 dark:to-transparent">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Vision & Facilities" title="More than a building — a family" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <FaBed />, t: "50 Comfortable Rooms", d: "Attached washroom, bed, cooler/heater and personal care for every elder." },
              { icon: <FaHeartbeat />, t: "Medical Centre", d: "Daily doctor visit, free medicines, physiotherapy and emergency care." },
              { icon: <FaPrayingHands />, t: "Bhajan & Yoga Hall", d: "Morning prayers, bhajan evenings, yoga and satsang for peace of mind." },
              { icon: <FaUtensils />, t: "Annapurna Bhojnalaya", d: "Hot satvik meals 3 times a day. Sponsor a day's meal in parents' memory." },
              { icon: <FaLeaf />, t: "Gaushala & Garden", d: "Desi cows, organic vegetables and green park for morning walks." },
              { icon: <FaBookOpen />, t: "Library & Skill Room", d: "Ramayan, newspapers, grandchildren visits and storytelling sessions." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={(i % 3) * 0.08}>
                <div className="glass-card rounded-3xl p-7 h-full hover:-translate-y-2 transition">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-teal-600 to-amber-500 text-white text-2xl h-14 w-14">{f.icon}</div>
                  <h3 className="font-display mt-4 text-xl font-bold">{f.t}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading eyebrow="Construction Progress" title="From foundation to family home" />
          <div className="mt-8 grid gap-4">
            {[
              ["Land & Bhoomi Pujan", "Completed with saints' blessings", true],
              ["Foundation & Structure", "60% complete — pillars and halls rising", true],
              ["Rooms & Medical Centre", "In progress — needs your support", false],
              ["Gaushala, Garden & Opening", "Phase-2 — opening soon with your love", false],
            ].map(([t, d, done], i) => (
              <Reveal key={t as string} delay={i * 0.06}>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 dark:border-white/10 p-5 bg-white dark:bg-slate-900">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-black text-white ${done ? "bg-emerald-500" : "bg-amber-500"}`}>
                    {done ? <FaCheckCircle /> : `${i + 1}`}
                  </span>
                  <div><p className="font-bold text-slate-900 dark:text-white">{t}</p><p className="text-sm text-slate-500 dark:text-slate-400">{d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-center text-white">
            <h3 className="font-display text-2xl md:text-3xl font-bold">Donate a Brick — ₹1,100 | Sponsor a Room — ₹2,51,000 | One Day Meal — ₹11,000</h3>
            <Link href="/donate" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-orange-600 hover:scale-105 transition"><FaHeart /> Contribute to Dham</Link>
          </div>
        </div>
      </section>

      <DonateCTA />
    </>
  );
}
