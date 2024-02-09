import {
  BadgePlus,
  Handshake,
  Headset,
  Lightbulb,
  Star,
  ThumbsUp,
  TimerReset,
} from "lucide-react";

export const navLinks = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Legal",
    href: "/legal",
  },
] as const;

export const pricingPackages = [
  {
    _id: "01",
    name: "Trial",
    description: "bo illum consectetur natus quod inventore error nemo",
    price: "Free",
    isPopular: false,
    keyPoints: [
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
    ],
  },
  {
    _id: "02",
    name: "Starter",
    description: "bo illum consectetur natus quod inventore error nemo",
    price: 50,
    isPopular: true,
    keyPoints: [
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
    ],
  },
  {
    _id: "03",
    name: "Professional",
    description: "bo illum consectetur natus quod inventore error nemo",
    price: 100,
    isPopular: false,
    keyPoints: [
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
    ],
  },
  {
    _id: "04",
    name: "Enterprise",
    description: "bo illum consectetur natus quod inventore error nemo",
    price: 200,
    isPopular: true,
    keyPoints: [
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
      "bo illum consectetur",
    ],
  },
] as const;

export const whyChooseUsData = [
  {
    id: 1,
    Icon: Star,
    title: "Top Rated On fiverr",
    description:
      "Our team has achieved top-rated seller status on Fiverr, garnering over 1000 reviews. This milestone reflects the collective dedication to delivering exceptional quality and client satisfaction.",
  },
  {
    id: 2,
    Icon: ThumbsUp,
    title: "Engagement Enhancement",
    description:
      "Capture and maintain audience attention with visually captivating edits, fostering higher viewer engagement.",
  },
  {
    id: 3,
    Icon: TimerReset,
    title: "Quick Turnaround",
    description:
      "Experience prompt delivery of edited content, meeting your deadlines without sacrificing quality.",
  },
  {
    id: 4,
    Icon: Headset,
    title: "24/7 Support",
    description:
      "Experience round-the-clock customer support from our team of industry-leading video editors, ensuring you have the best assistance whenever you need it",
  },
  {
    id: 5,
    Icon: Lightbulb,
    title: "Creative Collaboration",
    description:
      "Leverage our expertise in content creation and ideation, as we are content creators with a substantial following of 1.5 million across diverse social media platforms. We're here to help you shape and refine your content strategy.",
  },
  {
    id: 6,
    Icon: Handshake,
    title: "Conversion Driven",
    description:
      "Boost lead generation and secure clients with our compelling editing services designed to captivate and convert.",
  },
] as const;

