/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/cn";
import { Button } from "@nextui-org/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";

const Footer = ({ accentFont }) => {
  //  const componentRef = useRef<HTMLDivElement>(null);

  //  const { scrollXProgress } = useScroll({
  //    target: componentRef,
  //    offset: ["0 1", "1.2 1"],
  //  });

  //  const scaleValues = useTransform(scrollXProgress, [0, 1], [0.9, 1]);
  return (
    <section className="mt-8 dark:bg-[#000a14]">
      <div className="mx-auto flex max-w-7xl flex-col-reverse lg:flex-col ">
        <div className="shadow-2xl  dark:text-gray-100 ">
          <footer className="pb-4 ">
            <div className="mb-8 ml-6 grid grid-cols-1 gap-4 pt-14 lg:mb-14 lg:grid-cols-4">
              <div>
                <h2 className={cn(accentFont.className, "text-[29px]")}>
                  Embrace the unknown,
                </h2>
                <h3 className="pb-6 text-[20px] capitalize">
                  let your dreams take flight.
                </h3>

                <Button
                  color="primary"
                  size="lg"
                  className="!text-xl font-bold capitalize"
                >
                  Hire us now
                </Button>
              </div>
              <div>
                <h2 className="pb-4 text-[24px] font-bold">Services</h2>
                <ul className="space-y-4 text-gray-400">
                  <li>Brand Building</li>
                  <li>Digital Marketing</li>
                  <li>Graphics & Design</li>
                  <li>Programming & Tech</li>
                  <li>Video & Animation</li>
                  <li>Writing & Translation</li>
                </ul>
              </div>
              <div>
                <h2 className=" pb-4 text-[24px] font-bold">Contacts</h2>

                <ul className="space-y-6 text-gray-400">
                  <li className="flex items-center gap-4">
                    <PhoneCall size={26} /> +8801686113364
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail size={26} /> contact@thrivenvision.studio
                  </li>
                </ul>
              </div>
              <div>
                <h1 className=" pb-4 text-[24px] font-bold">Office Address</h1>

                <ul className="flex items-center gap-4 text-gray-400">
                  <MapPin size={30} />
                  <ul>
                    <li>27/20A, Babor Road, Block #F,</li>
                    <li>Mohammadpur, Dhaka, BD.</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <h4>thrivenvision</h4>
                <p>Copyright © 2024 thrivenvision.studio</p>
              </div>
              <div>
                <ul className="flex items-center gap-8 capitalize">
                  <li>privacy policy</li>
                  <li>terms of service</li>
                  <li>support</li>
                  <Facebook size={20} />
                  <Instagram size={20} />
                  <Linkedin size={20} />
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Footer;
