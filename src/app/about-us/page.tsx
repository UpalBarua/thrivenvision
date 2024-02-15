import { Image } from "@nextui-org/react";
import React from "react";

const AboutUs = () => {
  const textAbout = [
    {
      id: 1,
      title: "An idea was born...",
      description:
        "With more than 15 years of global investing experience, Hyunjae Lee was ready to embark on an adventure of his own and hoped to create a brand dedicated to solving problems faced by everyday creators and small businesses. Throughout the pandemic, he found himself picking up new hobbies, from cooking to home improvement, always with the aid of YouTube.",
    },
    {
      id: 1,
      title: "Our mission",
      description:
        "Double R Studios serves as the primary partner for content creators by providing high-quality editing that is affordable and on time. Our services reduce stress, save valuable time for creators, and increase views and watch time by their audience. Double R Studios is here to help you create captivating content through exceptional storytelling, graphics, enhanced audio and visual, and effective delivery of emotions.",
    },
    {
      id: 1,
      title: "Our approach",
      description:
        "Intrigued by the power and versatility of video, Hyunjae began speaking to content creators to learn about their process and where they continually fall short, eventually discovering the bottleneck of the video industry – editing. Most creators outsource or spend hours of their own time attempting to master the skill without much luck. And so Hyunjae began Double R Studios, an all-in-one editing platform to solve the needs of the creators he learned so much from.",
    },
    {
      id: 1,
      title: "Our differentiations",
      description:
        "If you were to approach video editing on your own or through an outsourced resource, you would likely be up against higher costs and longer turnarounds, as well as a lower quality product. If you go it alone, you could be looking at five months or longer to master video editing software. To outsource, you would need at least a week to find a freelancer and may battle consistency or communication issues.",
    },
  ];
  const AllEmployee = [
    {
      id: 1,
      name: "Hameem khan",
      title: "Founder",
      image:
        "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Najmul hossian",
      title: "Co Founder",
      image:
        "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Robin khan",
      title: "CPO",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "Ashik khan",
      title: "Video Editor",
      image:
        "https://images.unsplash.com/photo-1604822064782-86b012c1a8f7?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "Jishan Khan",
      title: "Graphics Designer",
      image:
        "https://images.unsplash.com/photo-1580518337843-f959e992563b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "Jaman Mahmud",
      title: "Web developer",
      image:
        "https://images.unsplash.com/photo-1591084728795-1149f32d9866?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="mx-auto mt-14 max-w-6xl">
      <div>
        <h1 className="pb-4 text-4xl font-bold">About Us</h1>
        <p className="pb-14 text-[18px]">
          A team of video editing enthusiasts who are passionate about creating
          amazing videos that help you tell your story in the most captivating
          and exciting way possible
        </p>
      </div>

      <div>
        {textAbout?.map((text) => (
          <div className="pb-8" key={text?.id}>
            <h1 className="pb-8 text-center text-4xl font-bold">
              {text?.title}
            </h1>
            <p className="text-[18px]">{text?.description}</p>
          </div>
        ))}
      </div>

      {/* employee section */}
      <div className="mt-24">
        <div className="text-center">
          <h1 className="pb-6 text-4xl font-bold">
            Meet the Force Behind the Magic
          </h1>
          <p className="pb-8 text-[18px]">
            A team of video editing enthusiasts who are passionate about
            creating amazing videos that help you tell your story in the most
            captivating and exciting way possible.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {AllEmployee?.map((employee) => (
            <div key={employee?.id}>
              <Image
                isZoomed
                width={240}
                src={employee?.image}
                alt="NextUI Album Cover"
              />
              <h1 className="pt-8 text-[18px] font-semibold">
                {employee?.name}
              </h1>
              <h1 className="text-[18px] font-semibold">{employee?.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
