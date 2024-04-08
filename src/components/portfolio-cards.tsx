"use client";

import { getAllPortfolios } from "@/lib/services";
import { TPortfolio } from "@/types";
import { useEffect, useState } from "react";
import { PortfolioPost } from "./portfolio-post";

export function PortfolioCards() {
  const [portfolios, setPortfolios] = useState<TPortfolio[]>();

  useEffect(() => {
    const fetchPortfolios = async () => {
      const portfolios = await getAllPortfolios();
      setPortfolios(portfolios.slice(0, 3));
    };

    fetchPortfolios();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 px-0 pt-4 md:grid-cols-2 lg:grid-cols-3 lg:px-4">
      {portfolios?.map(({ id, instagramURL }) => (
        <PortfolioPost key={id} url={instagramURL} />
      ))}
    </div>
  );
}
