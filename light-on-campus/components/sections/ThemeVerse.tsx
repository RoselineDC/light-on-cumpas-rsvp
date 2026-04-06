export function ThemeVerse() {
  return (
    <section
      className="py-20 px-4 text-center"
      style={{
        background: "linear-gradient(135deg, #0b4f47 0%, #0f9e8e 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto relative">
          {/* Decorative quote mark */}
          <span
            className="absolute -top-12 -left-4 font-serif text-white/5 select-none pointer-events-none leading-none"
            style={{ fontSize: "10rem" }}
            aria-hidden
          >
            &ldquo;
          </span>

          <blockquote>
            <p
              className="font-sora font-bold text-white leading-snug mb-4"
              style={{ fontSize: "clamp(1.4rem, 4vw, 2.4rem)" }}
            >
              &ldquo;You are the{" "}
              <em className="not-italic text-gold">light of the world</em>.
              <br />A city set on a hill cannot be hidden.&rdquo;
            </p>
            <cite className="not-italic text-white/60 text-[0.95rem] tracking-widest uppercase font-medium">
              Matthew 5:14 — Conference Theme
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
