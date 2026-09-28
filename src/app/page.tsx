"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHeart, FaHandsHelping, FaPlay, FaQuoteLeft, FaCheckCircle, FaArrowRight, FaEye, FaBookOpen, FaFemale, FaHeartbeat, FaRoad } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Counter from "@/components/Counter";
import DonateCTA from "@/components/DonateCTA";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/ui";
import { ACTIVITIES, BRAND, COUNTERS, GALLERY, IMAGES, LEADERS, POSTS } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[94svh] flex items-center overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <Image
            src={IMAGES.hero}
            alt="Smiling children supported by Utkarsh Charitable Trust"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </motion.div>
        <div className="animate-blob absolute -top-20 -right-24 h-96 w-96 rounded-full bg-amber-500/25 blur-3xl" />
        <div className="animate-blob-slow absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-teal-400/25 blur-3xl" />
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24 w-full"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full glass px-4 sm:px-5 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-amber-300 border border-white/20"
            >
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              Regd. NGO • Moradabad • Since 2022
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display mt-5 sm:mt-6 text-[2.5rem] leading-[1.08] sm:text-6xl md:text-7xl font-bold text-white text-balance"
            >
              Empowering Lives,
              <br />
              <span className="animate-gradient-text bg-gradient-to-r from-amber-200 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                Educating Children,
              </span>
              <br />
              Serving Humanity
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 sm:mt-6 text-base sm:text-lg text-teal-50/90 max-w-xl leading-relaxed"
            >
              Utkarsh Charitable Trust brings education, health, road-safety and elder-care to
              thousands across 15+ districts — and is now building{" "}
              <strong className="text-amber-300">Shri Hanumant Vridh Seva Dham</strong>, a home for
              abandoned elders.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link href="/donate" className="btn-lux animate-pulse-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-bold text-white text-base sm:text-lg">
                <FaHeart /> Donate Now
              </Link>
              <Link href="/volunteer" className="inline-flex items-center justify-center gap-2 rounded-full glass border border-white/30 px-8 py-4 font-bold text-white hover:bg-white hover:text-teal-800 transition">
                <FaHandsHelping /> Join as Volunteer
              </Link>
              <Link href="/vridh-seva-dham" className="inline-flex items-center justify-center sm:justify-start gap-2 rounded-full px-2 py-3 sm:py-4 font-bold text-amber-300 hover:text-amber-200">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15 border border-white/30"><FaPlay className="text-sm" /></span>
                Vridh Dham Story
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl">
              {COUNTERS.map((c) => (
                <div key={c.label} className="glass rounded-2xl border border-white/20 px-3 sm:px-4 py-3 sm:py-4 text-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                    <Counter value={c.value} suffix={c.suffix} />
                  </p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-teal-100/80 font-bold mt-1">{c.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/70 text-[10px] tracking-[0.25em] uppercase hidden sm:flex">
          <span>Scroll</span>
          <span className="animate-scroll-hint block h-10 w-[2px] bg-gradient-to-b from-amber-400 to-transparent" />
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <div className="border-y border-slate-100 dark:border-white/10 bg-amber-50/60 dark:bg-white/5 py-4 overflow-hidden">
        <div className="flex animate-marquee gap-10 whitespace-nowrap w-max">
          {Array(2).fill(["Traffic Police Moradabad", "District Administration", "CSR Partners", "Volunteer Network", "Health Dept.", "Education Dept.", "Gaushala Samiti", "Youth Clubs"]).flat().map((p, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              <span className="h-2 w-2 rounded-full bg-amber-500" /> {p}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <div className="img-zoom overflow-hidden rounded-[2rem] shadow-2xl">
                <Image src={IMAGES.volunteers} alt="Volunteers of Utkarsh Charitable Trust" width={900} height={1100} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover aspect-[4/3] sm:aspect-[4/5] w-full" />
              </div>
              <div className="absolute -bottom-6 right-4 md:right-8 glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 animate-floaty">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white text-2xl"><FaHandsHelping /></div>
                <div>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">Since 2022</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-600">Registered Trust</p>
                </div>
              </div>
              <div className="absolute -top-5 left-4 md:left-6 rounded-2xl bg-amber-500 text-white px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-bold shadow-xl rotate-[-4deg]">
                ❤ 5000+ Lives Touched
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="About the Trust" title="Seva with heart, change with action" desc="Utkarsh Charitable Trust was established on 24 May 2022 as a registered social organization dedicated to education, healthcare, child welfare, women empowerment and humanitarian services across India." />
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Registered NGO (2022)", "80G & CSR eligible", "100+ active volunteers", "15+ districts served"].map((t) => (
                <p key={t} className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
                  <FaCheckCircle className="text-emerald-500" /> {t}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 font-bold text-white hover:bg-teal-800 transition">
                Our Full Story <FaArrowRight />
              </Link>
              <Link href="/leadership" className="inline-flex items-center gap-2 rounded-full border-2 border-teal-700 px-7 py-3.5 font-bold text-teal-700 dark:text-teal-300 hover:bg-teal-700 hover:text-white transition">
                Meet Leadership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="py-16 bg-gradient-to-b from-teal-50/70 to-white dark:from-white/5 dark:to-transparent">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Mission & Vision" title="Why we exist" />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: <FaEye />, t: "Our Vision", d: "An India where no child begs, no elder is abandoned and no woman is helpless — every life lives with dignity.", c: "from-teal-600 to-emerald-600" },
              { icon: <FaBookOpen />, t: "Our Mission", d: "Education for slum children, safety on roads, skills for women, health for villages and a loving home for elders.", c: "from-amber-500 to-orange-500" },
              { icon: <FaHeart />, t: "Our Values", d: "Transparency in every rupee, love in every seva, discipline in every campaign — Seva • Shiksha • Samarpan.", c: "from-emerald-600 to-teal-600" },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.12}>
                <div className="glass-card rounded-3xl p-8 h-full hover:-translate-y-2 transition-transform duration-500">
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${x.c} text-white text-2xl shadow-lg`}>{x.icon}</div>
                  <h3 className="font-display mt-5 text-2xl font-bold">{x.t}</h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="What we do" title="10 missions, one heart of seva" desc="Child welfare to elder care — explore our flagship programs running across Moradabad and 15+ districts." />
          <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" gap={0.09}>
            {ACTIVITIES.slice(0, 6).map((a) => (
              <StaggerItem key={a.slug}>
                <Link href={`/activities/${a.slug}`} className="card-shine group block h-full overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="img-zoom relative h-52 sm:h-56 overflow-hidden">
                    <Image src={a.image} alt={a.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                    <span className="absolute left-4 top-4 rounded-full bg-black/55 backdrop-blur px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300 border border-white/20">{a.stats}</span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-amber-400 transition">{a.title}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{a.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-bold text-teal-700 dark:text-amber-400 text-sm">Explore <FaArrowRight className="group-hover:translate-x-1 transition" /></span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="text-center mt-10">
            <Link href="/activities" className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white dark:text-slate-900 px-8 py-4 font-bold text-white hover:scale-105 transition">
              View All 10 Activities <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CHAIRMAN */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-[2rem] grid lg:grid-cols-2 bg-gradient-to-br from-[#032622] to-teal-800 text-white">
            <div className="relative min-h-[380px]">
              <Image src={LEADERS[0].image} alt={LEADERS[0].name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#032622]/60" />
            </div>
            <div className="p-8 md:p-14">
              <FaQuoteLeft className="text-4xl text-amber-400" />
              <h3 className="font-display mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">“Seva is not charity — it is our duty towards humanity.”</h3>
              <p className="mt-5 text-teal-50/85 leading-relaxed">
                When I saw children begging at signals and elders sleeping on footpaths, I decided
                my life would be for them. From one Signal Pathshala to 250+ campaigns — this
                journey belongs to every volunteer and donor of Utkarsh.
              </p>
              <div className="mt-6">
                <p className="font-bold text-lg">Mukesh Kumar Kashyap</p>
                <p className="text-amber-400 text-sm font-bold uppercase tracking-widest">Founder, Utkarsh Charitable Trust</p>
              </div>
              <Link href="/leadership" className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 font-bold hover:bg-amber-400 transition text-white">
                Meet All Leaders <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-16 bg-slate-50 dark:bg-white/5">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Moments of love" title="Glimpses of our seva" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.slice(0, 8).map((g, i) => (
              <Reveal key={i} delay={(i % 4) * 0.08}>
                <div className="img-zoom relative overflow-hidden rounded-2xl h-56 md:h-64 group">
                  <Image src={g.src} alt={g.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
                    <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-bold">{g.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 font-bold text-teal-700 dark:text-amber-400">Open Full Gallery <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading eyebrow="Love & trust" title="What people say" />
          <Reveal className="mt-10">
            <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 4000 }} pagination={{ clickable: true }} loop className="pb-12">
              {[
                { n: "Ramesh Gupta, Donor", t: "I sponsored 10 education kits. The trust shared photos, receipts and progress of every child. Fully transparent — best NGO in Moradabad." },
                { n: "Dr. Sunita Sharma, Health Partner", t: "Their health camps are perfectly organised — doctors, medicines, follow-ups. 12,000+ patients served with genuine care." },
                { n: "Amit Verma, Volunteer", t: "Signal Pathshala changed my life. Teaching slum kids every evening is the most peaceful part of my day. Join them once!" },
                { n: "Smt. Kamla Devi, Beneficiary", t: "My son now goes to school instead of begging. Utkarsh gave him books, uniform and hope. Bhagwan inhe lambi umar de." },
              ].map((x) => (
                <SwiperSlide key={x.n}>
                  <div className="glass-card rounded-3xl px-8 py-10 text-center mx-2">
                    <FaQuoteLeft className="mx-auto text-3xl text-amber-500" />
                    <p className="font-display mt-4 text-xl md:text-2xl leading-relaxed italic">“{x.t}”</p>
                    <p className="mt-5 font-bold text-teal-700 dark:text-amber-400">— {x.n}</p>
                    <p className="text-amber-500 tracking-widest">★★★★★</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Reveal>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="News & stories" title="Latest from the field" />
          <div className="mt-10 grid md:grid-cols-3 gap-5 sm:gap-6">
            {POSTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link href={`/blog/${p.slug}`} className="card-shine group block h-full overflow-hidden rounded-3xl border border-slate-100 dark:border-white/10 bg-white dark:bg-slate-900 shadow hover:shadow-xl hover:-translate-y-1 transition">
                  <div className="img-zoom relative h-48 sm:h-52 overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">{p.category} • {p.date}</p>
                    <h3 className="font-display mt-2 text-base sm:text-lg font-bold leading-snug text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-amber-400">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DonateCTA />

      {/* CONTACT STRIP */}
      <section className="pb-20">
        <Stagger className="mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5" gap={0.1}>
          {[
            { icon: <FaRoad />, t: "Visit Us", d: BRAND.address },
            { icon: <FaHeartbeat />, t: "Call / WhatsApp", d: `${BRAND.phone} • Mon–Sat 9–7` },
            { icon: <FaFemale />, t: "Email", d: BRAND.email },
          ].map((x) => (
            <StaggerItem key={x.t}>
              <div className="flex gap-4 h-full rounded-3xl border border-slate-100 dark:border-white/10 p-5 sm:p-6 bg-white dark:bg-slate-900 shadow hover:shadow-xl hover:-translate-y-1 transition">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-700 text-white text-xl">{x.icon}</div>
                <div className="min-w-0"><p className="font-bold text-slate-900 dark:text-white">{x.t}</p><p className="text-sm text-slate-500 dark:text-slate-400 mt-1 break-words">{x.d}</p></div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
