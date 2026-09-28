import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaCalendar, FaTag } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import DonateCTA from "@/components/DonateCTA";
import { POSTS } from "@/lib/data";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  return { title: p ? p.title : "Blog" };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <PageHero eyebrow={p.category} title={p.title} desc={`${p.date} • Utkarsh Charitable Trust, Moradabad`} image={p.image} />
      <article className="py-14">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span className="inline-flex items-center gap-2"><FaCalendar className="text-amber-500" /> {p.date}</span>
            <span className="inline-flex items-center gap-2"><FaTag className="text-teal-600" /> {p.category}</span>
          </div>
          <div className="img-zoom mt-6 overflow-hidden rounded-[2rem] shadow-xl">
            <Image src={p.image} alt={p.title} width={1200} height={700} className="w-full aspect-video object-cover" />
          </div>
          <p className="font-display mt-8 text-xl md:text-2xl font-medium leading-relaxed text-slate-800 dark:text-slate-100 italic border-l-4 border-amber-500 pl-5">
            {p.excerpt}
          </p>
          <div className="mt-6 grid gap-5 text-slate-600 dark:text-slate-300 leading-[1.9]">
            {p.content.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/donate" className="btn-lux rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3.5 font-bold text-white">Support This Mission</Link>
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 font-bold"><FaArrowLeft /> All Stories</Link>
          </div>
        </div>
      </article>
      <DonateCTA />
    </>
  );
}
