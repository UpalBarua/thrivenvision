import Image from "next/image";
import React from "react";

export type TPortfolio = {
  project_name: string;
  project_image: string;
};

const PortfolioCard = ({ portfolio }: { portfolio: TPortfolio }) => {
  const { project_name, project_image } = portfolio;
  return (
    <div className="relative h-[380px] w-[250px]  lg:h-[420px] lg:w-[280px] ">
      <Image
        fill
        src={project_image}
        alt="NextUI Album Cover"
        className=" rounded-md object-cover object-center"
      />
      <div className="absolute inset-0  bg-black  bg-opacity-80   opacity-0 transition-opacity duration-300 hover:opacity-100">
        <p className=" pl-4 pt-6 text-center text-[24px] font-bold text-white">
          Project: {project_name}
        </p>
        <p className=" pl-4 pt-2 text-center text-gray-500">
          working a great project which show lot of title and want to div
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
