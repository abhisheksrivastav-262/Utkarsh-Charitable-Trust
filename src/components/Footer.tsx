import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaHeart,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { ACTIVITIES, BRAND } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#032622] text-slate-200">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#14b8a6,transparent_40%),radial-gradient(circle_at_80%_10%,#f59e0b,transparent_35%),radial-gradient(circle_at_50%_100%,#16a34a,transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-amber-500 text-white text-2xl font-black">
                उ
              </div>
              <div>
                <p className="font-display text-xl font-bold text-white">Utkarsh Charitable Trust</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-bold">(Regd.) Moradabad</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {BRAND.tagline}. Registered social organization since {BRAND.estd} — education,
              healthcare, child welfare, women empowerment & elder seva across India.
            </p>
            <div className="mt-5 flex gap-2">
              {[FaFacebook, FaInstagram, FaYoutube, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-amber-500 hover:text-white hover:-translate-y-1 transition"
                  aria-label="social"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-white">Our Activities</h4>
            <div className="gold-divider my-3 w-16 !bg-none bg-amber-500 h-[2px]" />
            <ul className="grid gap-2 text-sm">
              {ACTIVITIES.slice(0, 7).map((a) => (
                <li key={a.slug}>
                  <Link href={`/activities/${a.slug}`} className="hover:text-amber-400 transition">
                    → {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-white">Quick Links</h4>
            <div className="my-3 w-16 h-[2px] bg-amber-500" />
            <ul className="grid gap-2 text-sm">
              {[
                ["About Us", "/about"],
                ["Leadership", "/leadership"],
                ["Hanumant Vridh Seva Dham", "/vridh-seva-dham"],
                ["Gallery", "/gallery"],
                ["News & Blog", "/blog"],
                ["Donate", "/donate"],
                ["Volunteer", "/volunteer"],
                ["Contact", "/contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="hover:text-amber-400 transition">
                    → {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-white">Contact</h4>
            <div className="my-3 w-16 h-[2px] bg-amber-500" />
            <ul className="grid gap-3 text-sm">
              <li className="flex gap-2"><FaMapMarkerAlt className="mt-1 text-amber-400" /> {BRAND.address}</li>
              <li className="flex gap-2"><FaPhone className="mt-1 text-amber-400" /> {BRAND.phone}</li>
              <li className="flex gap-2"><FaEnvelope className="mt-1 text-amber-400" /> {BRAND.email}</li>
              <li className="flex gap-2"><FaClock className="mt-1 text-amber-400" /> Mon–Sat: 9 AM – 7 PM</li>
            </ul>
            <Link
              href="/donate"
              className="btn-lux mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-bold text-white"
            >
              <FaHeart /> Donate Now
            </Link>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-white/5 border border-white/10 px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} {BRAND.name} • All Rights Reserved • 80G & CSR Ready</p>
          <p className="text-slate-400">Made with <span className="text-amber-400">❤</span> for humanity in Moradabad, India</p>
        </div>
      </div>
    </footer>
  );
}
