"use client";
import React from "react";
import PortfolioCard from "./portfolioCard";
import Link from "next/link";
import { InstagramEmbed } from "react-social-media-embed";

const Portfolio = () => {
  const allPortfolio = [
    {
      id: 1,
      project_name: "wellup",
      project_image:
        " https://images.unsplash.com/photo-1638981784814-e33e6910b1cf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      project_name: "wellup",
      project_image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      project_name: "wellup",
      project_image:
        "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      project_name: "wellup",
      project_image:
        "https://images.unsplash.com/photo-1644077633176-c7a4f8e35811?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // {
    //   id: 5,
    //   project_name: "wellup",
    //   project_image:
    //     "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   id: 6,
    //   project_name: "wellup",
    //   project_image:
    //     "https://images.unsplash.com/photo-1676238560626-45d35b63b38f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   id: 7,
    //   project_name: "wellup",
    //   project_image:
    //     "https://images.unsplash.com/photo-1601315488950-3b5047998b38?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   id: 8,
    //   project_name: "wellup",
    //   project_image:
    //     "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  //   dark:bg-[#9F8082]
  //   bg-purple-500
  return (
    <section className="mt-24 rounded-md bg-purple-900 px-4 py-8  ">
      <div className="pb-14 pt-8 text-center">
        <h1 className="pb-2 text-4xl font-bold text-white dark:text-white">
          Portfolio Spotlight: Witness Our Impact
        </h1>
        <p className="text-white">
          Our achievements speak for themselves. Explore our portfolio to see
          how we have helped clients achieve<br></br> their goals and surpass
          their expectations.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {/* {allPortfolio?.map((portfolio) => (
          <PortfolioCard
            key={portfolio?.id}
            portfolio={portfolio}
          ></PortfolioCard>
        ))} */}

        <div className="mx-auto ml-16 grid grid-cols-1 items-center justify-center gap-6 lg:grid-cols-3 lg:gap-96">
          <InstagramEmbed
            url="https://www.instagram.com/p/CojXYdJpcwz/"
            width={328}
          />

          <InstagramEmbed
            url="https://www.instagram.com/p/CojXYdJpcwz/"
            width={328}
          />

          <InstagramEmbed
            url="https://www.instagram.com/p/CojXYdJpcwz/"
            width={328}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
