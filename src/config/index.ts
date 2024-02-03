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
