"use client";

import Marquee from "react-fast-marquee";
import { trustedCompanines } from "@/config";
import Image from "next/image";

export default function TrustedCompaniesSlider() {
  return (
    <Marquee className="lg:!hidden">
      {trustedCompanines?.map((company) => (
        <div key={company} className="mx-6">
          <Image
            src={company}
            alt="trusted company"
            height={80}
            width={120}
            className="object-fit object-center"
            quality={95}
          />
        </div>
      ))}
    </Marquee>
  );
}
