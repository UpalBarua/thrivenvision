import {
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
    href: "/about-us",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
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
    title: "Proven Track Record",
    description:
      "With a track record of delivering measurable results and exceeding client expectations, we're the trusted choice for businesses seeking success in today's competitive landscape",
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
    title: " Dedicated Support",
    description:
      "Your success is our priority. Count on us for dedicated support and ongoing assistance, ensuring that you have the resources and guidance you need to thrive in today's dynamic business environment.",
  },
] as const;
