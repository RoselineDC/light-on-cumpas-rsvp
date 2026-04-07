import { FadeIn } from "@/components/ui/FadeIn";
import { YOUTUBE_EMBED_ID } from "@/lib/constants";

export function VideoSection() {
  return (
    <section id="video" className="bg-navy py-20 px-4 text-center">
      <div className="w-full">
        <span className="inline-block bg-white/10 text-white/70 text-xs font-semibold tracking-widest uppercase px-1 py-1.5 rounded-full mb-4">
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
          <div className="relative w-full aspect-video overflow-hidden md:rounded-2xl shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/DSoPU0YkwfA?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=1"
              className="absolute inset-0 w-full h-full"
              title="New Life Embassy"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
