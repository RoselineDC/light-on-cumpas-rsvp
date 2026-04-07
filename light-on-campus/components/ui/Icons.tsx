import { type SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  width: 26,
  height: 26,
};

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function LocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
export function TransportationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      {/* Bus body */}
      <rect x="3" y="5" width="18" height="11" rx="2" ry="2" />

      {/* Windows */}
      <line x1="3" y1="10" x2="21" y2="10" />

      {/* Wheels */}
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />

      {/* Door */}
      <line x1="15" y1="5" x2="15" y2="16" />
    </svg>
  );
}

export function QRIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} strokeWidth={1.5} width={36} height={36} {...props}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <line x1="14" y1="14" x2="14" y2="14" />
      <line x1="17" y1="14" x2="21" y2="14" />
      <line x1="14" y1="17" x2="14" y2="21" />
      <line x1="17" y1="17" x2="21" y2="17" />
    </svg>
  );
}
