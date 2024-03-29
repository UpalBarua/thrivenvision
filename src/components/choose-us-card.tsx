import React, { useRef } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";

type TChoose = {
  icon: React.ReactElement;
  work_headline: string;
  work_details: string;
};

const ChooseUsCard = ({ choose }: { choose: TChoose }) => {
  const { icon, work_headline, work_details } = choose;
  const componentRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.2 1"],
  });

  const scaleValues = useTransform(scrollXProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div ref={componentRef} style={{ scale: scaleValues }}>
      <Card
        isHoverable
        classNames={{
          base: [
            "data-[hover=true]:bg-background/80",
            "dark:data-[hover=true]:bg-background/40",
            "bg-background/40",
            "dark:bg-background/70",
            "backdrop-blur-md",
            "backdrop-saturate-150",
          ],
        }}
        className="h-full px-4 py-4 shadow-lg"
      >
        <CardHeader className="flex-col items-start pb-0 pt-2">
          <div className="rounded-full bg-background/40 p-2">
            <p className="text-primary">
              {React.cloneElement(icon, { size: 48 })}
            </p>
          </div>

          <h4 className="pt-2 text-[1.5rem]  font-bold">{work_headline}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <p className=" text-justify">{work_details}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default ChooseUsCard;
