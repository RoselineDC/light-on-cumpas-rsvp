import type { NavItem, DetailCard, ExpectCard, SocialLink } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Details", href: "#details" },
  { label: "Programme", href: "#expect" },
  { label: "Watch", href: "#video" },
  { label: "Register", href: "#register" },
];

export const DETAIL_CARDS: DetailCard[] = [
  {
    label: "Date",
    value: "Saturday, 1 August 2026",
    sub: "One unforgettable day",
    icon: "calendar",
  },
  {
    label: "Time",
    value: "08:00 AM – 03:00 PM",
    sub: "Full day programme",
    icon: "clock",
  },
  {
    label: "Venue",
    value: "New Life Embassy Auditorium",
    sub: "Pretoria · Free entry",
    icon: "location",
  },
  {
    label: "Transportation",
    value: "Transport provided",
    sub: "From key campuses in Gauteng",
    icon: "transportation",
  },
];

export const EXPECT_CARDS: ExpectCard[] = [
  {
    num: "01",
    title: "Inspiring Word & Worship",
    desc: "Powerful messages and vibrant worship sessions crafted for the campus generation.",
  },
  {
    num: "02",
    title: "Real Conversations About Faith",
    desc: "Honest, relevant discussions on navigating faith and identity in today's campus culture.",
  },
  {
    num: "03",
    title: "Connect With Other Students",
    desc: "Build lasting friendships with like-minded students from campuses across the region.",
  },
  {
    num: "04",
    title: "Purpose, Identity & Growth",
    desc: "Practical sessions to help you discover your calling and walk in it with confidence.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/lightoncampusministry?igsh=azdzN2hwZnhuNzFw",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100084610977889",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nlelightoncampus?_t=ZS-8xqqjKeZUQc&_r=1 ",
  },
];

export const CONTACT = {
  phone: "061 435 8998",
  phoneTel: "0745663399",
  whatsapp: "https://wa.me/27614358998",
  email: "Email connect@lightoncampus.com",
};

export const YOUTUBE_EMBED_ID = "DSoPU0YkwfA";
export const REGISTER_FORM_URL = "https://forms.gle/LightOnCampusRegister";
