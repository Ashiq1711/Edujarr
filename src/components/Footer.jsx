import React from "react";
import logo from "../assets/bottom_logo.png";
import Container from "./Container";

import { Link } from "react-router-dom";
import Title from "./Title";
import SocialIcons from "./SocialIcons";
const ShopData = [
  {
    name: "Accesories",
    link: "/shop",
  },
  {
    name: "Clothes",
    link: "/shop",
  },
  {
    name: "Electronics",
    link: "/shop",
  },
  {
    name: "Home & Garden",
    link: "/shop",
  },
  {
    name: "New Arrivals",
    link: "/shop",
  },
];
const Youraccount = [
  {
    name: "Profile",
    link: "/shop",
  },
  {
    name: "Orders",
    link: "/shop",
  },
  {
    name: "Addresses",
    link: "/shop",
  },
  {
    name: "Account Details",
    link: "/shop",
  },
  {
    name: "Payment Options",
    link: "/shop",
  },
];
const Footer = () => {
  return (
    <div className="w-full bg-custom-gradient  text-white/80">
      <Container >
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 ">
  <div className="col-span-2">
          <div className="flex flex-col gap-6">
            <img className="w-32" src={logo} alt="" />
            <p className="text-base font-font1 w h-full lg:w-[80%]">
              Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <Title text1={"Quicl Link"} />
          <div>
            {ShopData?.map((item, index) => (
              <div key={index} className="my-4">
                <Link className="font-font1 hover:underline" to={item?.link}>
                  {item?.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <Title text1={"Contact Us"} />
          <div>
            {Youraccount?.map((item, index) => (
              <div key={index} className="my-4">
                <Link className="font-font1 hover:underline" to={item?.link}>
                  {item?.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-6">
            <Title text1={"Subscribe to our newsletter."} />
            <p className="text-base font-font1 w h-full lg:w-[80%]">
              A at pellentesque et mattis porta enim elementum.
            </p>
            <div className="flex gap-2 w-full">
              <input
                className="boreder-b outline-none rounded-md bg-black pl-3 border-white"
                type="email"
                placeholder="Enter your email"
              />
              <button className="hover:bg-white text-white border border-1  hover:text-black py-2 px-4 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  </div>
<div className="h-[1px] my-8 w-full bg-white"></div>
         <div className="flex justify-between items-center w-full">
          <p>Copyright 2023 | All Rights Reserved</p>
          <SocialIcons/>
         </div>
      </Container>
    </div>
  );
};

export default Footer;
