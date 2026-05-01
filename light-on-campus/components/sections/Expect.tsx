import { FadeIn } from "@/components/ui/FadeIn";
import { EXPECT_CARDS } from "@/lib/constants";

export function Expect() {
  return (
    <section id="expect" className="bg-[#f8fafb] py-20 px-4">
      <div className="max-w-8xl mx-auto py-10 px-20">
        <span className="inline-block bg-teal-light text-teal-dark text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Programme
        </span>
        <h2
          className="font-sora font-bold leading-tight tracking-tight text-[#0d1b2a] mb-2"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
        >
          What to <em className="not-italic text-teal">Expect</em>
        </h2>
        <p className="text-[#7a96ab] text-[1.05rem] mb-10">
          A full day designed to ignite your purpose as a student.
        </p>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
        >
          {EXPECT_CARDS.map((card, i) => (
            <FadeIn key={card.num} delay={i * 100}>
              <div className="bg-white rounded-[18px] p-7 border border-teal/[0.09] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(15,158,142,0.10)] transition-all cursor-default h-full">
                <div className="font-sora font-extrabold text-[2.8rem] text-teal-light leading-none mb-4 select-none">
                  {card.num}
                </div>
                <div className="font-sora font-bold text-[1.05rem] text-[#0d1b2a] mb-2">
                  {card.title}
                </div>
                <div className="text-[0.88rem] text-[#7a96ab] leading-relaxed">
                  {card.desc}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
