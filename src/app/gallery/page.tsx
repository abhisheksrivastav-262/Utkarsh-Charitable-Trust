"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaExpand } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import { SectionHeading } from "@/components/ui";
import { GALLERY, IMAGES } from "@/lib/data";

const CATS = ["All", "Child Welfare", "Road Safety", "Health Camp", "Education", "Vridh Seva Dham", "Festival", "Volunteers"];

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [light, setLight] = useState<number | null>(null);
  const list = GALLERY.filter((g) => cat === "All" || g.cat === cat);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments that melt hearts" desc="Real photos from our campaigns — children, elders, volunteers and celebrations." image={IMAGES.handsTogether} />
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Categories" title="Filter by mission" />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${cat === c ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg" : "bg-slate-100 dark:bg-white/10 hover:bg-teal-100 dark:hover:bg-white/20"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <motion.div layout className="masonry mt-10">
            <AnimatePresence>
              {list.map((g, i) => (
                <motion.button
                  layout
                  key={g.src + i}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setLight(i)}
                  className="img-zoom group relative block w-full overflow-hidden rounded-2xl text-left shadow"
                >
                  <Image src={g.src} alt={g.title} width={700} height={500} className="w-full object-cover" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-between p-4">
                    <span className="text-white text-sm font-bold">{g.title}<br /><span className="text-amber-300 text-xs">{g.cat}</span></span>
                    <FaExpand className="text-white" />
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {light !== null && list[light] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur grid place-items-center p-4"
            onClick={() => setLight(null)}
          >
            <button className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white" aria-label="Close"><FaTimes /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="max-w-4xl w-full">
              <Image src={list[light].src} alt={list[light].title} width={1200} height={800} className="w-full rounded-3xl object-cover max-h-[75vh]" />
              <p className="mt-4 text-center text-white font-bold">{list[light].title} • <span className="text-amber-400">{list[light].cat}</span></p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
