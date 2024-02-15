import { LucideIcon } from "lucide-react";

export type TPricingPackage = {
  id?: string;
  name: string;
  description: string;
  price: number;
  isPopular: boolean;
  keyPoints: string[];
};

export type TPicture = {
  id: string;
  imageUrl: string;
};

export type TTestimonial = {
  id?: string;
  comment: string;
  customer: {
    name: string;
    handle: string;
    picture: string;
  };
};

export type TServiceCategory = {
  category: string;
  categoryDescription: string;
  Icon: LucideIcon;
  services: {
    name: string;
    serviceDescription: string;
  }[];
};
export type TPortfolio = {
  id?: string;
  portfolio: string;
};
