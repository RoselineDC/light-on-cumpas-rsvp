import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { QRIcon } from "@/components/ui/Icons";
import { REGISTER_FORM_URL } from "@/lib/constants";

export function Register() {
  return (
    <section id="register" className="bg-white py-20 px-4">
      <div className="max-w-8xl mx-auto py-10 px-20">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-[28px] border-2 border-gold/20 p-14 text-center"
            style={{
              background:
                "linear-gradient(135deg, #fff8ed 0%, #ffffff 60%)",
            }}
          >
            {/* Decorative circle */}
            <div
              className="absolute pointer-events-none rounded-full"
              style={{
                top: -80,
                right: -80,
                width: 300,
                height: 300,
                background: "rgba(245,166,35,0.07)",
              }}
            />

            <span className="inline-block bg-teal-light text-teal-dark text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              Free Registration
            </span>

            <h2
              className="font-sora font-extrabold text-[#0d1b2a] mb-3"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
            >
              Ready to Be the Light?
            </h2>
            <p className="text-[#7a96ab] text-[1.05rem] mb-10 max-w-xl mx-auto">
              Secure your spot at the Christian Student Conference — it&apos;s
              free and open to all campus students.
            </p>

            <div className="flex gap-6 justify-center items-center flex-wrap">
              <Link
                href={REGISTER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline inline-block bg-gold text-navy font-sora font-bold text-[1.05rem] px-11 py-4 rounded-full hover:-translate-y-1 transition-all"
                style={{ boxShadow: "0 6px 24px rgba(245,166,35,0.35)" }}
              >
                Register Now — It&apos;s Free
              </Link>

              {/* QR placeholder */}
              <div className="w-[100px] h-[100px] rounded-[10px] border-2 border-dashed border-gold/40 flex flex-col items-center justify-center gap-1 text-gold">
                <QRIcon />
                <span className="text-[0.7rem] font-semibold uppercase tracking-widest">
                  QR Code
                </span>
              </div>
            </div>

            <p className="text-[0.82rem] text-[#7a96ab] mt-6">
              Registration responses are collected via Google Forms · Seats are
              limited
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
