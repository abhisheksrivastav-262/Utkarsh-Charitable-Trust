import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import DonateCTA from "@/components/DonateCTA";
import { Reveal, SectionHeading } from "@/components/ui";
import { ACTIVITIES, IMAGES } from "@/lib/data";

export const metadata: Metadata = { title: "Our Activities" };

export default function ActivitiesPage() {
  return (
    <>
      <PageHero eyebrow="Our Activities" title="10 missions changing Moradabad" desc="Click any mission to see its story, impact and how you can support it." image={IMAGES.childrenHappy} />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Programs" title="Choose your cause" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.08}>
                <Link href={`/activities/${a.slug}`} className="card-shine group block overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="img-zoom relative h-60 overflow-hidden">
                    <Image src={a.image} alt={a.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <p className="absolute bottom-3 left-4 right-4 text-white font-bold text-sm">{a.stats}</p>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-amber-400">{a.title}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{a.tagline}</p>
                    <ul className="mt-3 grid gap-1 text-sm text-slate-600 dark:text-slate-300">
                      {a.points.slice(0, 2).map((p) => <li key={p}>✓ {p}</li>)}
                    </ul>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-700 dark:text-amber-400">View Details <FaArrowRight className="group-hover:translate-x-1 transition" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <DonateCTA />
    </>
  );
}
