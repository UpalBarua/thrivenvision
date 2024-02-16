"use client";
import { Button } from "@nextui-org/react";
import { UserIcon } from "lucide-react";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const AdminAllPortfolio = () => {
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
    <section className="mx-auto  mt-14 max-w-6xl ">
      <h1 className="pb-8 text-5xl font-bold ">Here is All Portfolio </h1>
      <div className="grid grid-cols-1 gap-24 lg:grid-cols-3">
        {AllPortfolios?.map((portfolio) => (
          <div key={portfolio?.id}>
            <InstagramEmbed url="https://www.instagram.com/p/CojXYdJpcwz/" />{" "}
            <div className="flex gap-2">
              <Button
                color="danger"
                variant="bordered"
                startContent={<UserIcon />}
              >
                Delete Portfolio
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminAllPortfolio;
