import Link from "next/link";
import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  desc,
  image,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022c22]/95 via-teal-900/80 to-slate-950/50" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:py-28">
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-amber-400">
          {eyebrow}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.12] sm:leading-tight text-balance">
          {title}
        </h1>
        {desc && <p className="mt-4 max-w-2xl text-slate-200 text-[0.95rem] sm:text-base md:text-lg leading-relaxed">{desc}</p>}
        <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <span>/</span>
          <span className="text-amber-400">{eyebrow}</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
    </section>
  );
}
