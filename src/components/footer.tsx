/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@nextui-org/react";

const Footer = () => {
  return (
    <section className="mt-8 dark:bg-[#000a14]">
      <div className="mx-auto flex max-w-7xl flex-col-reverse  lg:flex-col ">
        <div className="shadow-2xl  dark:text-gray-100 ">
          <footer className="pb-4 ">
            <div className="mb-14 ml-6 grid grid-cols-1 gap-4 pt-14 lg:grid-cols-4">
              <div className=" space-y-6">
                <h2 className="text-[25px]">
                  'Embrace the unknown,<br></br>let your dreams take flight’
                </h2>

                <Button color="primary">
                  {" "}
                  <h1>Contact now</h1>
                </Button>
              </div>
              <div>
                <h2 className="pb-4 text-[24px]">Services</h2>

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
                <h2 className=" pb-4 text-[24px]">Contacts</h2>

                <ul className="space-y-6 text-gray-400">
                  <li className="flex items-center gap-4">
                    <PhoneCall size={26} /> +8801686113364
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail size={26} /> contact@thrivenvision.studio
                  </li>
                  <li className="flex gap-4">
                    <Facebook size={30} />
                    <Instagram size={30} />
                    <Linkedin size={30} />
                  </li>
                </ul>
              </div>
              <div>
                <h1 className=" pb-4 text-[24px]">Office Address</h1>

                <ul className="flex items-center gap-4 text-gray-400">
                  <MapPin size={30} />
                  <ul>
                    <li> Address: 27/20A, Babor Road,</li>
                    <li> Block #F, Mohammadpur,</li>
                    <li>Dhaka, Bangladesh</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="pt-6 text-center">
              <div className="text-center">
                <p>thrivenvision Copyright © 2023 thrivenvision.studio</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Footer;
