import {
  Facebook,
  Handshake,
  Headset,
  Instagram,
  Lightbulb,
  Linkedin,
  Star,
  ThumbsUp,
  TimerReset,
} from "lucide-react";

export const navLinks = [
  {
    label: "About us",
    href: "/about-us",
  },
  {
    label: "Packages",
    href: "/pricing",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact us",
    href: "/contact-us",
  },
] as const;

export const whyChooseUsData = [
  {
    id: 1,
    Icon: Star,
    title: "Proven Track Record",
    description:
      "With a track record of delivering measurable results and exceeding client expectations, we're the trusted choice for businesses seeking success in today's competitive landscape.",
  },
  {
    id: 2,
    Icon: ThumbsUp,
    title: "Expertise Across Industries",
    description:
      "Our team of seasoned professionals brings expertise across various industries, ensuring that we understand the unique challenges and opportunities specific to your business niche.",
  },
  {
    id: 3,
    Icon: TimerReset,
    title: "Customized Solutions",
    description:
      "We believe in personalized approaches tailored to each client's needs. Our customized solutions are designed to address your specific goals and drive sustainable growth.",
  },
  {
    id: 4,
    Icon: Headset,
    title: "Innovative Strategies",
    description:
      "Stay ahead of the curve with our innovative strategies. We continuously adapt to the ever-changing digital landscape, leveraging the latest tools and techniques to maximize your success.",
  },
  {
    id: 5,
    Icon: Lightbulb,
    title: "Value for Money",
    description:
      "We offer cost-effective solutions without compromising on quality. Get the most out of your investment with our competitive pricing and exceptional service.",
  },
  {
    id: 6,
    Icon: Handshake,
    title: "Dedicated Support",
    description:
      "Your success is our priority. Count on us for dedicated support and ongoing assistance, ensuring that you have the resources and guidance you need to thrive in today's dynamic business environment.",
  },
] as const;

export const socialLinks = [
  {
    platform: "Facebook",
    link: "facebook.com",
    Icon: Facebook,
  },
  {
    platform: "Instagram",
    link: "instagram.com",
    Icon: Instagram,
  },
  {
    platform: "LinkedIn",
    link: "linkedin.com",
    Icon: Linkedin,
  },
] as const;
