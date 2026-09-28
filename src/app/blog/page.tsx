import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/ui";
import { IMAGES, POSTS } from "@/lib/data";

export const metadata: Metadata = { title: "News & Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="News & Blog" title="Stories from the field" desc="Bhoomi Pujan, tributes, Pathshalas and celebrations — read what your support makes possible." image={IMAGES.community} />
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                <Link href={`/blog/${p.slug}`} className="group block h-full overflow-hidden rounded-3xl border border-slate-100 dark:border-white/10 bg-white dark:bg-slate-900 shadow hover:shadow-xl hover:-translate-y-1 transition">
                  <div className="img-zoom relative h-52 overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">{p.category} • {p.date}</p>
                    <h3 className="font-display mt-2 text-lg font-bold leading-snug text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-amber-400">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{p.excerpt}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-teal-700 dark:text-amber-400">Read Story <FaArrowRight /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <aside className="grid gap-6 content-start">
            <div className="rounded-3xl border border-slate-100 dark:border-white/10 p-6 bg-white dark:bg-slate-900">
              <h4 className="font-bold flex items-center gap-2"><FaSearch /> Search</h4>
              <input placeholder="Search stories…" className="mt-3 w-full rounded-xl border border-slate-200 dark:border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-teal-500" />
            </div>
            <div className="rounded-3xl border border-slate-100 dark:border-white/10 p-6 bg-white dark:bg-slate-900">
              <h4 className="font-display text-lg font-bold">Categories</h4>
              <ul className="mt-3 grid gap-2 text-sm font-semibold">
                {["Vridh Seva Dham", "Road Safety", "Education", "Festival", "Social Service"].map((c) => (
                  <li key={c} className="flex justify-between rounded-xl bg-slate-50 dark:bg-white/5 px-4 py-2.5"><span>{c}</span><span className="text-amber-600">→</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-teal-700 to-emerald-700 p-6 text-white">
              <h4 className="font-display text-lg font-bold">Recent Posts</h4>
              <ul className="mt-3 grid gap-3 text-sm">
                {POSTS.slice(0, 3).map((p) => (
                  <li key={p.slug}><Link href={`/blog/${p.slug}`} className="hover:text-amber-300 font-semibold">• {p.title}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
