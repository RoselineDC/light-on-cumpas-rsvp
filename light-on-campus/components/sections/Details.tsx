import { FadeIn } from "@/components/ui/FadeIn";
import { CalendarIcon, ClockIcon, LocationIcon, TransportationIcon} from "@/components/ui/Icons";
import { DETAIL_CARDS } from "@/lib/constants";
import type { DetailCard } from "@/lib/types";
import type { SVGProps } from "react";

const ICON_MAP: Record<
  DetailCard["icon"],
  (props: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  calendar: CalendarIcon,
  clock: ClockIcon,
  location: LocationIcon,
  transportation: TransportationIcon,
 
};

export function Details() {
  return (
    <section id="details" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block bg-teal-light text-teal-dark text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Event Details
        </span>
        <h2
          className="font-sora font-bold leading-tight tracking-tight text-[#0d1b2a] mb-2"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
        >
          Mark Your <em className="not-italic text-teal">Calendar</em>
        </h2>
        <p className="text-[#7a96ab] text-[1.05rem] mb-10">
          Everything you need to know about the conference.
        </p>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {DETAIL_CARDS.map((card, i) => {
            const Icon = ICON_MAP[card.icon];
            return (
              <FadeIn key={card.label} delay={i * 100}>
                <div className="flex items-start gap-5 p-7 rounded-[18px] bg-[#f8fafb] border border-teal/10 hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(15,158,142,0.10)] transition-all cursor-default">
                  <div className="w-[52px] h-[52px] rounded-[14px] bg-teal-light flex items-center justify-center shrink-0 text-teal">
                    <Icon />
                  </div>
                  <div>
                    <div className="text-[0.78rem] font-semibold text-teal uppercase tracking-widest mb-1">
                      {card.label}
                    </div>
                    <div className="font-sora font-bold text-[1.15rem] text-[#0d1b2a] leading-snug">
                      {card.value}
                    </div>
                    <div className="text-[0.85rem] text-[#7a96ab] mt-0.5">
                      {card.sub}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
