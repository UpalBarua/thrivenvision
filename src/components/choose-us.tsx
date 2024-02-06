import React from "react";
import {
  BarChartHorizontalBig,
  Star,
  ThumbsUp,
  TimerReset,
  Headset,
  Lightbulb,
  Handshake,
} from "lucide-react";
import ChooseUsCard from "./choose-us-card";

const ChooseUs = () => {
  const allChooseUs = [
    {
      id: 1,
      icon: <Star />,
      work_headline: "Top Rated On fiverr",
      work_details:
        "Our team has achieved top-rated seller status on Fiverr, garnering over 1000 reviews. This milestone reflects the collective dedication to delivering exceptional quality and client satisfaction.",
    },
    {
      id: 2,
      icon: <ThumbsUp />,
      work_headline: "Engagement Enhancement",
      work_details:
        "Capture and maintain audience attention with visually captivating edits, fostering higher viewer engagement.",
    },
    {
      id: 3,
      icon: <TimerReset />,
      work_headline: "Quick Turnaround",
      work_details:
        "Experience prompt delivery of edited content, meeting your deadlines without sacrificing quality.",
    },
    {
      id: 4,
      icon: <Headset />,
      work_headline: "24/7 Support",
      work_details:
        "Experience round-the-clock customer support from our team of industry-leading video editors, ensuring you have the best assistance whenever you need it",
    },
    {
      id: 5,
      icon: <Lightbulb />,
      work_headline: "Creative Collaboration",
      work_details:
        "Leverage our expertise in content creation and ideation, as we are content creators with a substantial following of 1.5 million across diverse social media platforms. We're here to help you shape and refine your content strategy.",
    },
    {
      id: 6,
      icon: <Handshake />,
      work_headline: "Conversion Driven",
      work_details:
        "Boost lead generation and secure clients with our compelling editing services designed to captivate and convert.",
    },
  ];
  return (
    <section className="mt-10">
      <h1 className="pb-8 text-center text-5xl font-bold">Why Choose Us?</h1>
      <p className=" mx-auto w-[40ch] px-4 text-center text-[18px] lg:w-[60ch]">
        Lights, Camera, Satisfaction! Why Choose Us? Because Quality Video
        Editing Can Be Fun, Affordable, and Absolutely Fantastic!
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {allChooseUs?.map((choose) => (
          <ChooseUsCard key={choose?.id} choose={choose}></ChooseUsCard>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
