import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

type TServices = {
  name: string;
  service: string;
  icon: React.ReactElement;
};

const ServicesCard = ({ services }: { services: TServices }) => {
  const { name, service, icon } = services;
  return (
    <div className="h-full rounded-md bg-background/70 p-6">
      <div className="flex items-center gap-4">
        <p className=" text-primary">
          {React.cloneElement(icon, { size: 24 })}
        </p>
        <h1 className="text-[24px] font-bold">{name}</h1>
      </div>

      <p className="pt-6">{service}</p>
    </div>
  );
};

export default ServicesCard;
<h1>Card he</h1>;
