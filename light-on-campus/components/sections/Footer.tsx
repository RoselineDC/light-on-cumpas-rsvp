import Link from "next/link";
import { SOCIAL_LINKS, CONTACT } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1b2a] text-white/70 pt-16 pb-8 px-4 text-sm">
      <div className="max-w-8xl mx-auto py-10 px-20">
        {/* Top grid */}
        <div className="grid gap-10 mb-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="font-sora font-bold text-[1.3rem] text-white mb-3">
              Light<span className="text-gold">On</span>Campus
            </div>
            <p className="text-[0.85rem] leading-relaxed text-white/50">
              Raising grounded, well-rounded, all-round successful young people
              on campuses across South Africa.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sora text-[0.82rem] font-semibold tracking-widest uppercase text-white/40 mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href={`tel:${CONTACT.phoneTel}`}
                className="text-white/65 no-underline hover:text-gold transition-colors text-[0.9rem]"
              >
                📞 {CONTACT.phone}
              </Link>
              <Link
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/65 no-underline hover:text-gold transition-colors text-[0.9rem]"
              >
                💬 WhatsApp us
              </Link>
              <Link
                href={`mailto:${CONTACT.email}`}
                className="text-white/65 no-underline hover:text-gold transition-colors text-[0.9rem]"
              >
                ✉️ {CONTACT.email}
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sora text-[0.82rem] font-semibold tracking-widest uppercase text-white/40 mb-4">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 no-underline bg-white/7 border border-white/10 text-white/65 text-[0.8rem] px-3.5 py-1.5 rounded-full hover:bg-gold/15 hover:text-gold transition-all"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[0.8rem] text-white/30">
          <p>© {year} Light on Campus Ministry. All rights reserved.</p>
          <p>Christian Student Conference · 1 August 2026 · Pretoria</p>
        </div>
      </div>
    </footer>
  );
}
