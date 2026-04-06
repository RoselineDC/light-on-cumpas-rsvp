import { FadeIn } from "@/components/ui/FadeIn";
import { YOUTUBE_EMBED_ID } from "@/lib/constants";

export function VideoSection() {
  return (
    <section id="video" className="bg-navy py-20 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Watch
        </span>
        <h2
          className="font-sora font-bold leading-tight tracking-tight text-white mb-2"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
        >
          See What We&apos;re{" "}
          <em className="not-italic text-gold">Building</em>
        </h2>
        <p className="text-white/55 text-[1.05rem] mb-10">
          Get a feel for the movement before you arrive.
        </p>

        <FadeIn>
          <div className="video-wrap">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}`}
              title="Light on Campus Promo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
