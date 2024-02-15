"use client";
import React from "react";

import Link from "next/link";
import { InstagramEmbed } from "react-social-media-embed";
import { Button } from "@nextui-org/react";

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
  //   dark:bg-[#9F8082]
  //   bg-purple-500
  return (
    <section className="mt-24 rounded-md bg-purple-900 px-4 py-8  ">
      <div className="pb-14 pt-8 text-center">
        <h1 className="pb-6 text-5xl font-bold text-white dark:text-white">
          Portfolio Spotlight: Witness Our Impact
        </h1>
        <p className="text-white">
          Our achievements speak for themselves. Explore our portfolio to see
          how we have helped clients achieve<br></br> their goals and surpass
          their expectations.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-24  lg:max-w-6xl lg:grid-cols-3">
        {AllPortfolios?.map((portfolio) => (
          <div key={portfolio?.id}>
            <InstagramEmbed url="https://www.instagram.com/p/CojXYdJpcwz/" />{" "}
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-14">
        <Link href="all-portfolio">
          <Button color="danger" className="text-[20px] font-bold">
            All Portfolio
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
