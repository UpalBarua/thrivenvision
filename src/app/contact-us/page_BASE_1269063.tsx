"use client";
import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button, Input, Textarea } from "@nextui-org/react";

const contract = () => {
  const iconSize = 48;
  const applyGradientBorder = (icon) => (
    <div className="relative rounded-full  p-1">
      {React.cloneElement(icon, {
        size: iconSize,
        className: `absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600`,
      })}
    </div>
  );

  return (
    <section className="mx-auto mt-24 max-w-5xl">
      <div className="flex flex-col gap-14 lg:flex-row">
        <div className="mt-6 flex-1 p-8  lg:p-2">
          <h3 className="pb-2 text-2xl">Contract us</h3>
          <h1 className="pb-4 text-3xl font-bold">
            Reach our Customer service
          </h1>
          <p className="pb-6">
            Our team try to communicate you as soon as possible. please mail us
            and try to know us a good. Welcome in our company .We always try to
            give you a great service.
          </p>
          <p className=" w-72 rounded-md border-2 border-pink-600 p-4 font-bold ">
            Call Now Us: +88018356237
          </p>

          <div className="flex gap-6  pt-10">
            <div className="rounded-full bg-gray-900 p-2">
              <p className="text-primary">
                {React.cloneElement(<Facebook />, { size: 40 })}
              </p>
            </div>
            <div className="rounded-full bg-gray-900 p-2">
              <p className="text-primary">
                {React.cloneElement(<Instagram />, { size: 40 })}
              </p>
            </div>
            <div className="rounded-full bg-gray-900 p-2">
              <p className="text-primary">
                {React.cloneElement(<Linkedin />, { size: 40 })}
              </p>
            </div>
          </div>
        </div>
        <div className="m-8 flex flex-1 flex-col gap-6 rounded-md bg-gray-700 p-8 lg:p-8">
          <Input className="max-w-xl" type="email" label="Name" />
          <Input className="max-w-xl" type="email" label="Email" />
          <Input className="max-w-xl" type="email" label="Nobile" />
          <Textarea
            label="Description"
            placeholder="Enter your message"
            className="max-w-xl"
          />

          <Button className=" max-w-full bg-gray-500 px-8 py-6 text-white">
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default contract;
