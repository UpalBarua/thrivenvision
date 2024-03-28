import { trustedCompanines } from "@/config";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import Image from "next/image";

export default function TrustedCompaniesSlider() {
  return (
    <div>
      <ScrollShadow
        hideScrollBar
        visibility="both"
        orientation="horizontal"
        size={25}
      >
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex items-center justify-center gap-x-4 whitespace-nowrap">
            {trustedCompanines?.map((company) => (
              <div key={company} className="mx-6">
                <Image
                  src={company}
                  alt="trusted company"
                  height={100}
                  width={120}
                  className="object-fit min-w-[10rem] object-center"
                  quality={95}
                />
              </div>
            ))}
          </div>
          <div className="animate-marquee2 absolute top-0 flex items-center justify-center gap-x-4 whitespace-nowrap">
            {trustedCompanines?.map((company, i) => (
              <div key={company + i} className="mx-6">
                <Image
                  src={company}
                  alt="trusted company"
                  height={100}
                  width={120}
                  className="object-fit min-w-[10rem] object-center"
                  quality={95}
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollShadow>
    </div>
  );
}
