import Image from "next/image";
import React from "react";

export type TPortfolio = {
  project_name: string;
  project_image: string;
};

const PortfolioCard = ({ portfolio }: { portfolio: TPortfolio }) => {
  const { project_name, project_image } = portfolio;
  return (
    <div className="relative h-full">
      <Image
        height={300}
        width={340}
        src={project_image}
        alt="NextUI Album Cover"
        className=" rounded-md"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-2xl opacity-0 transition-opacity duration-300 hover:opacity-100">
        <p className="text-center text-white">Project: {project_name}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
