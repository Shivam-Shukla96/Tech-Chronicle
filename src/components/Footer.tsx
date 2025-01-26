import React from "react";
import Image from "next/image";
import Link from "next/link";
import UPI from "../../public/footer/payment-systems/Upi.svg";
import googlePlay from "../../public/footer/PlayStore.png";
import appleStore from "../../public/footer/AppStore.png";
import { company, navlinks } from "@/utils/data/footerLinks";
import { socialIcons } from "@/utils/data/footerSocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-[#FFFFFF] flex flex-col gap-10  sm:py-16 py-4 px-2 sm:px-[60px]  lg:px-20">
      <div className="flex gap-9 ">
        <div className="flex justify-center gap-9 flex-wrap text-center sm:text-start">
          {navlinks.map((link, index) => (
            <div className="min-w-[109px] max-w-[210px] w-[203px]">
              <h5
                key={index}
                className="font-medium  text-[18px] md:text-[22px]  text-primaryText  mb-2"
              >
                {link === company ? "Company" : "Support"}
              </h5>
              <ul className="flex flex-col gap-2">
                {link.map((item, index) => (
                  <li
                    className="text-secondaryText font-medium text-[16px] "
                    key={index}
                  >
                    <Link href="">{item.item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border-[#E2E2E2]" />
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between ">
        <div className="mb-6 space-y-3 md:mb-0">
          <h4 className="font-medium text-[18px] md:text-[22px]  text-primaryText">
            Get Your App Now
          </h4>
          <div className=" w-full flex gap-4">
            <Link
              href="https://play.google.com/store/apps/details"
              className="w-[129px] md:w-[150px] h-[50px] cursor-pointer"
            >
              <Image src={googlePlay} alt="" className="w-full h-full"></Image>
            </Link>
            <Link
              href="https://apps.apple.com/in/app"
              className="w-[129px] md:w-[150px] h-[50px] cursor-pointer"
            >
              <Image src={appleStore} alt="" className="w-full h-full"></Image>
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-[18px] md:text-[22px]  text-primaryText">
            Subscribe to our Newsletter
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <input
              type="email"
              placeholder="Enter Email"
              className="border border-[#C8D4D9] text-tertiaryText p-2 rounded-[4px] sm:rounded-l-[4px] focus:outline-none"
            />
            <button className="bg-accent text-white py-2 px-4 rounded hover:bg-opacity-90">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row items-center justify-between ">
        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-[18px] md:text-[22px]  text-primaryText">
            We accept following payment systems
          </h4>
          <div className="flex gap-4 ">
            <div className="rounded-[4px] p-[6px]">
              <Image src={UPI} width={80} height={50} alt="UPI" />
            </div>
            <div className="rounded-[4px] p-[6px]">
              <Image src={UPI} width={80} height={50} alt="UPI" />
            </div>
            <div className="rounded-[4px] p-[6px]">
              <Image src={UPI} width={80} height={50} alt="UPI" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-center md:text-start text-[18px] md:text-[22px]  text-primaryText">
            Follow Us
          </h4>
          <div className="flex gap-5">
            {socialIcons.map((icon, index) => {
              return (
                <Link key={index} href="" className="">
                  <Image
                    src={icon.src}
                    width={30}
                    height={30}
                    alt={icon.name}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-tertiaryText font-normal text-[14px] flex flex-col md:flex-row items-center justify-between ">
        <p>© 2025 Chronicles. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
