import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import React from "react";

const AboutUs = () => {
  const AllEmployee = [
    {
      id: 1,
      name: "Mohammed Nazmul Hossain",
      title: "Chief Operating Officer,",
      image: "https://i.ibb.co/JRKHjhf/Nazmul.png",
    },
    {
      id: 2,
      name: "Robin M. Rahman",
      title: " Chief Executive Officer",
      image: "https://i.ibb.co/88mzwLt/Robin.png",
    },
    {
      id: 3,
      name: "Syed Hameem Bin Arshad",
      title: "Chief Business Officer",
      image: "https://i.ibb.co/9wQ1MTp/Hameem.png",
    },
  ];
  return (
    <section className="mx-auto mb-20  mt-14 max-w-6xl ">
      <h1 className="p-4 pb-8 text-5xl font-semibold lg:p-0">About us</h1>
      <p className="p-4 text-[20px]">
        <span className="font-semibold">thrivenvision</span> distinguishes
        itself as more than a digital agency by employing innovators, creators,
        and strategists who are committed to propelling your brand forward in
        the digital era. With a founding principle of flourishing and imagining
        the extraordinary, our organization provides a range of services
        tailored to enhance the online visibility and interaction of your brand
      </p>
      <div className="mb-8 mt-14 flex flex-col gap-14 lg:flex-row">
        <div className="mx-auto flex-1 ">
          <h1 className="pb-4 text-center text-4xl font-semibold">
            Our Vision
          </h1>
          <p className="p-4 text-[20px]">
            To be the game-changer in the industry , igniting brand stories that
            inspire, engage and connect with people on a deeper level.
          </p>
        </div>
        <div className="flex-1">
          <h1 className="pb-4 text-center text-4xl font-semibold">
            Our Mission
          </h1>
          <p className="p-4 text-[20px]">
            To thrive in the digital world by leveraging innovative strategies,
            data-driven insights, and cutting-edge technologies to drive growth,
            engagement, and brand success by delivering measurable results and
            exceeding client expectations.
          </p>
        </div>
      </div>
      <div className="mt-24 text-[20px]">
        <p className="p-4 pb-6">
          <span className="font-semibold ">thrivenvision</span> streamlines your
          digital projects, transforming them from concept to reality swiftly
          and efficiently. Our simplified submission process means your project
          starts in minutes, not days. With our expert team, expect rapid
          turnarounds without sacrificing quality—outperforming traditional
          freelance rates thanks to our extensive network and operational
          efficiencies
        </p>
        <p className="p-4 pb-6">
          We specialize in a wide range of digital services, including SEO,
          branding, website design, video editing, and animation, all tailored
          to boost your online presence. Our approach is not just about
          delivering projects but ensuring they resonate with your audience,
          leveraging the latest trends and techniques.
        </p>
        <p className="p-4 pb-6">
          Choose <span className="font-semibold">thrivenvision </span>for
          competitive pricing, fast delivery, and quality that elevates your
          brand above the rest. Partner with us to enhance your digital
          footprint efficiently and make your brand stand out in the digital
          landscape.
        </p>
      </div>
      <div className=" mt-20">
        <h1 className="pb-6 text-center text-5xl font-semibold">
          Meet the force behind the magic
        </h1>
        <p className="pb-14 text-center text-[20px]">
          A diverse group of dedicated professionals driven by collaboration,
          delivering innovative solutions to exceed client expectations
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {AllEmployee?.map((employee) => (
          <div key={employee?.id}>
            <Card className="bg-primary/5 py-4">
              <CardBody className="ml-6 flex justify-center overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="  w-full rounded-xl object-cover object-center lg:w-[300px]"
                  src={employee?.image}
                />
              </CardBody>
              <CardFooter className="flex-col items-center px-4 pb-6 pt-4">
                <h1 className="text-[20px] font-semibold">{employee?.name}</h1>
                <h1 className="text-[20px] font-semibold">{employee?.title}</h1>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
