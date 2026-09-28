import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaCheckCircle, FaHeart } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import DonateCTA from "@/components/DonateCTA";
import { Reveal } from "@/components/ui";
import { ACTIVITIES } from "@/lib/data";

export async function generateStaticParams() {
  return ACTIVITIES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = ACTIVITIES.find((x) => x.slug === slug);
  return { title: a ? a.title : "Activity" };
}

export default async function ActivityDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = ACTIVITIES.find((x) => x.slug === slug);
  if (!a) notFound();
  const others = ACTIVITIES.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={a.tagline} title={a.title} desc={a.description} image={a.image} />
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="img-zoom overflow-hidden rounded-[2rem] shadow-xl">
              <Image src={a.image} alt={a.title} width={1200} height={700} className="w-full object-cover aspect-video" />
            </div>
            <div className="mt-6 rounded-3xl border border-slate-100 dark:border-white/10 p-7 bg-white dark:bg-slate-900">
              <h2 className="font-display text-2xl font-bold">What we do in {a.title}</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 font-medium text-slate-700 dark:text-slate-200">
                    <FaCheckCircle className="mt-1 text-emerald-500 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-teal-50 dark:bg-white/5 p-5 font-bold text-teal-800 dark:text-amber-300">
                Impact so far: {a.stats}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/donate" className="btn-lux inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3.5 font-bold text-white"><FaHeart /> Support This Cause</Link>
                <Link href="/volunteer" className="rounded-full border-2 border-teal-700 px-7 py-3.5 font-bold text-teal-700 dark:text-teal-300">Volunteer</Link>
              </div>
            </div>
          </Reveal>
          <div>
            <h3 className="font-display text-xl font-bold">Other Missions</h3>
            <div className="mt-4 grid gap-4">
              {others.map((o) => (
                <Link key={o.slug} href={`/activities/${o.slug}`} className="flex gap-3 rounded-2xl border border-slate-100 dark:border-white/10 p-3 hover:shadow-lg transition bg-white dark:bg-slate-900">
                  <Image src={o.image} alt={o.title} width={120} height={90} className="h-20 w-24 rounded-xl object-cover" />
                  <div><p className="font-bold text-sm text-slate-900 dark:text-white">{o.title}</p><p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{o.tagline}</p></div>
                </Link>
              ))}
            </div>
            <Link href="/activities" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-700 dark:text-amber-400"><FaArrowLeft /> All Activities</Link>
          </div>
        </div>
      </section>
      <DonateCTA />
    </>
  );
}
