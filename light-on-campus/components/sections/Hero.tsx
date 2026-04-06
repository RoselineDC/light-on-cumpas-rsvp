import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-24 text-center"
      style={{
        background:
          "linear-gradient(160deg, #0b4f47 0%, #0d6e62 40%, #0f9e8e 75%, #1ab5a3 100%)",
      }}
    >
      {/* Light cone from top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Gold glow mid */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 300,
          background:
            "radial-gradient(ellipse, rgba(245,166,35,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Light rays */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="ray" />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full border border-white/30 bg-white/15 text-white text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse2" />
          Saturday · 1 August 2026
        </div>

        {/* Heading */}
        <h1
          className="font-sora font-extrabold text-white leading-[1.05] tracking-tight mb-3"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.2rem)" }}
        >
          Christian Student
          <br />
          <em className="not-italic text-gold">Conference</em>
        </h1>

        {/* Subtitle */}
        <p
          className="font-sora font-semibold text-white/88 uppercase tracking-widest mb-4"
          style={{ fontSize: "clamp(1.1rem, 3vw, 1.7rem)" }}
        >
          Light on Campus
        </p>

        {/* Verse */}
        <p className="text-[1.05rem] text-white/75 italic mb-10">
          &ldquo;Be the light of the world.&rdquo; — Matthew 5:14
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="#register"
            className="no-underline inline-block bg-gold text-navy font-sora font-bold text-base px-10 py-4 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all"
            style={{ boxShadow: "0 6px 24px rgba(245,166,35,0.35)" }}
          >
            Register Free
          </Link>
          <Link
            href="#video"
            className="no-underline inline-block border-2 border-white/50 text-white font-sora font-semibold text-base px-10 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all"
          >
            Watch Promo
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 text-[0.7rem] tracking-widest uppercase">
        Scroll
        <div
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-scrollLine"
        />
      </div>
    </section>
  );
}
