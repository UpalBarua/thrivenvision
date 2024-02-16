"use client";
import React from "react";

import { InstagramEmbed } from "react-social-media-embed";

const AllPortfolio = () => {
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
    {
      id: 1,
      url: "https://www.instagram.com/p/CojXYdJpcwz/",
    },
  ];
  return (
    <section className="mx-auto mb-32 mt-14 max-w-full lg:max-w-6xl">
      <h1 className="pb-8 text-4xl font-bold ">Portfolio Spotlight:</h1>
      <div className="grid grid-cols-1 gap-24 lg:grid-cols-3">
        {AllPortfolios?.map((portfolio) => (
          <div key={portfolio?.id}>
            <InstagramEmbed url={portfolio?.url} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllPortfolio;
