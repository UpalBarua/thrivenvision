"use client";

import React from "react";
import Link from "next/link";
import { InstagramEmbed } from "react-social-media-embed";
import { Button } from "@nextui-org/react";
import { SectionHeading } from "./ui/section-heading";
import { SectionSubheading } from "./ui/section-subheading";

const Portfolio = () => {
  const AllPortfolios = [
    {
      id: 1,
      url: "https://www.instagram.com/p/CojXYdJpcwz/",
    },
    {
      id: 1,
      url: "https://www.instagram.com/p/CojXYdJpcwz/",
    },
    {
      id: 1,
      url: "https://www.instagram.com/p/CojXYdJpcwz/",
    },
  ];

  return (
    <section className="portfolio | mt-32 rounded-[2.5em] px-4 py-8 shadow-2xl backdrop-blur-lg">
      <div className="pb-14 pt-8 text-center">
        <SectionHeading className="text-white/90">
          Portfolio Spotlight: Witness Our Impact
        </SectionHeading>
        <SectionSubheading className="max-w-2xl text-white/80">
          Our achievements speak for themselves. Explore our portfolio to see
          how we have helped clients achievetheir goals and surpass their
          expectations.
        </SectionSubheading>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-4 lg:max-w-6xl lg:grid-cols-3">
        {AllPortfolios?.map((portfolio) => (
          <div key={portfolio?.id} className="rounded-[2.5em]">
            <InstagramEmbed
              className="rounded-2xl"
              url="https://www.instagram.com/p/CojXYdJpcwz/"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-14">
        <Link href="all-portfolio">
          <Button color="primary" size="lg">
            View All
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
