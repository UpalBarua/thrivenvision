/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Image } from "@nextui-org/react";

const MailChimp = () => {
  return (
    <section className="mx-auto mt-[20px]  rounded-md  bg-primary p-4 lg:-mt-[760px] lg:max-w-5xl">
      <div className="flex flex-col items-center gap-24 lg:flex-row">
        <div>
          <Image
            isBlurred
            // width={240}
            src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="NextUI Album Cover"
            className="m-5 pr-5"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            Stay Ahead of the Curve Join Our Exclusive Newsletter!
          </h1>
          <p className="pt-6 text-[18px]">
            Dive into the latest trends, insights, and tips in the digital world
            with <span className="font-semibold">thrivenvision's</span>{" "}
            newsletter. Signing up is quick and easy! Just enter your email
            below, and let us bring the future of digital innovation straight to
            you.
          </p>
          <div className="flex flex-row pt-4">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5  rounded-l-lg bg-gray-800 p-3 sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 rounded-r-lg p-3 font-semibold dark:bg-pink-500 dark:text-gray-900 sm:w-1/3"
            >
              Subscribe
            </button>
          </div>
          <p className="pt-8 text-[18px]">
            Your privacy is paramount to us. We promise to keep your email safe
            and never spam. Unsubscribe at any time with just a click.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MailChimp;
