import React from "react";

import { LayoutPanelTop } from "lucide-react";
import ServicesCard from "./servicesCard";
const Services = () => {
  const allServices = [
    {
      id: 1,
      icon: <LayoutPanelTop />,
      name: "Video Editing",
      service:
        "We specialize in crafting video sales letters where we showcase the unique features and benefits of your product or service. Our expertise lies in creating compelling narratives that effectively communicate your value proposition, addressing the specific needs of your target audience and motivating them to take action.",
    },
    {
      id: 1,
      icon: <LayoutPanelTop />,
      name: "Video Editing",
      service:
        "We specialize in crafting video sales letters where we showcase the unique features and benefits of your product or service. Our expertise lies in creating compelling narratives that effectively communicate your value proposition, addressing the specific needs of your target audience and motivating them to take action.",
    },
    {
      id: 1,
      icon: <LayoutPanelTop />,
      name: "Video Editing",
      service:
        "We specialize in crafting video sales letters where we showcase the unique features and benefits of your product or service. Our expertise lies in creating compelling narratives that effectively communicate your value proposition, addressing the specific needs of your target audience and motivating them to take action.",
    },
    {
      id: 1,
      icon: <LayoutPanelTop />,
      name: "Video Editing",
      service:
        "We specialize in crafting video sales letters where we showcase the unique features and benefits of your product or service. Our expertise lies in creating compelling narratives that effectively communicate your value proposition, addressing the specific needs of your target audience and motivating them to take action.",
    },
    {
      id: 1,
      icon: <LayoutPanelTop />,
      name: "Video Editing",
      service:
        "We specialize in crafting video sales letters where we showcase the unique features and benefits of your product or service. Our expertise lies in creating compelling narratives that effectively communicate your value proposition, addressing the specific needs of your target audience and motivating them to take action.",
    },
    {
      id: 1,
      icon: <LayoutPanelTop />,
      name: "Video Editing",
      service:
        "We specialize in crafting video sales letters where we showcase the unique features and benefits of your product or service. Our expertise lies in creating compelling narratives that effectively communicate your value proposition, addressing the specific needs of your target audience and motivating them to take action.",
    },
    {
      id: 1,
      icon: <LayoutPanelTop />,
      name: "Video Editing",
      service:
        "We specialize in crafting video sales letters where we showcase the unique features and benefits of your product or service. Our expertise lies in creating compelling narratives that effectively communicate your value proposition, addressing the specific needs of your target audience and motivating them to take action.",
    },
    {
      id: 1,
      icon: <LayoutPanelTop />,
      name: "Video Editing",
      service:
        "We specialize in crafting video sales letters where we showcase the unique features and benefits of your product or service. Our expertise lies in creating compelling narratives that effectively communicate your value proposition, addressing the specific needs of your target audience and motivating them to take action.",
    },
  ];
  return (
    <section>
      <div className="mt-24 text-center">
        <h1 className="pb-4 text-5xl font-bold">What we offer !</h1>
        <p className="mx-auto w-[40ch] pb-8 text-[18px] lg:w-[75ch]">
          We take pride in offering a diverse range of editing services tailored
          to meet your unique needs. With our commitment to quality and
          creativity, we are your go-to partner for a wise spactrum of
          professional editing services.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {allServices?.map((services) => (
          <ServicesCard key={services?.id} services={services} />
        ))}
      </div>
    </section>
  );
};

export default Services;
