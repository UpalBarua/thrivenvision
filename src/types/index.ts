export type TPricingPackage = {
  id?: string;
  name: string;
  description: string;
  price: number;
  isPopular: boolean;
  keyPoints: string[];
};

export type TTestimonial = {
  id?: string;
  comment:string; 
  customer: {
    name: string;
    handle: string;
    picture: string;
  };
};
