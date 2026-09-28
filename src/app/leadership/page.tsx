import type { Metadata } from "next";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import DonateCTA from "@/components/DonateCTA";
import { Reveal, SectionHeading } from "@/components/ui";
import { IMAGES, LEADERS } from "@/lib/data";

export const metadata: Metadata = { title: "Leadership" };

export default function LeadershipPage() {
  return (
    <>
      <PageHero eyebrow="Leadership" title="Hearts that lead the mission" desc="Founder, President, General Secretary and Treasurer — the family guiding 100+ volunteers." image={IMAGES.volunteers} />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Core Team" title="Meet our changemakers" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERS.map((l, i) => (
              <Reveal key={l.name} delay={(i % 4) * 0.1}>
                <div className="group overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="img-zoom relative h-80 overflow-hidden">
                    <Image src={l.image} alt={l.name} fill className="object-cover" />
                    <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white">{l.role}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold">{l.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{l.bio}</p>
                    <p className="mt-3 flex gap-2 text-sm italic text-teal-700 dark:text-amber-400"><FaQuoteLeft className="mt-1 shrink-0" /> {l.quote}</p>
                    <div className="mt-4 flex gap-2">
                      {[FaFacebook, FaInstagram, FaLinkedin].map((Icon, j) => (
                        <a key={j} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 dark:bg-white/10 hover:bg-teal-600 hover:text-white transition"><Icon className="text-sm" /></a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <DonateCTA />
    </>
  );
}
