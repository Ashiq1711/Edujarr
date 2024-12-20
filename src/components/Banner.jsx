import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import bannerBG from "../assets/banner.BG.png";
import Container from "./Container";
import { IoSearch } from "react-icons/io5";
import coma from "../assets/coma.png";
import girl from "../assets/girl.png";
const imageData = [
  {
    title: "Successful coaches are visionaries",
    description: "Good coaching is good teaching & nothing else.",
    title2: "Ronald Richards",
    description2:
      "In a coaching role, you ask the questions and rely more on your staff, who become the experts, to provide the information",
    image: bannerBG,
  },
];
const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul
          style={{
            margin: "0",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            cursor: "pointer",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "50px",
                height: "15px",
                borderRadius: "20px",
                backgroundColor: "#262626",
              }
            : {
                width: "15px",
                height: "15px",
                borderRadius: "20px",
                backgroundColor: "white",
              }
        }
      ></div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        {imageData?.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item?.image}
              alt=""
              className="h-[300px] md:h-[700px] w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full md:py-10">
              <Container
                className={
                  "flex py-4 md:py-10   justify-center gap-2 md:gap-3 h-full"
                }
              >
                <div className="md:w-1/2 h-full">
                  <p className="font-font1 md:font-semibold text-white">
                    {item?.title}
                  </p>
                  <p className="font-font2 md:text-[80px] leading-tight text-white">
                    {item?.description}
                  </p>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-3 md:mt-8">
                    <button className="rounded-md hover:bg-primary duration-300  border border-slate-400 text-white md:py-2 md:px-4">
                      View Courses
                    </button>
                    <button className="rounded-md hover:bg-primary duration-300  border border-slate-400 text-white py-2 px-4">
                      Get Free Consultation
                    </button>
                  </div>
                  <div className="md:mt-10 mt-3 md:w-[500px] relative">
                    <input
                      className="w-[100%]  top-0 right-0 rounded-md duration-300  border border-slate-400 border-none outline-none py-2 px-2 md:py-3 md:px-4"
                      type="text"
                      placeholder="What do you want to learn today?"
                    />

                    <button className="md:px-4 px-2 md:py-2 flex items-center gap-2 absolute right-2 md:right-4 top-[50%] -translate-y-[50%] bg-custom-gradient text-white rounded-md  ">
                      <IoSearch />
                      Signup
                    </button>
                  </div>
                </div>
                <div className="md:mt-20 relative bottom-0">
                  <img src={coma} alt="" />
                </div>
                <div className="w-1/2 h-full flex items-center">
                  <div className="md:w-1/2 h-full hidden md:block">
                    <div className="md:mt-20">
                      <p className="text-white font-font1">{item?.title2}</p>
                      <p className="text-white tracking-tight">
                        {item?.description2}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className=" text-xl text-primary">4.8</p>
                        <p className=" text-2xl text-primary">*</p>
                        <p className=" text-2xl text-primary">*</p>
                        <p className=" text-2xl text-primary">*</p>
                        <p className=" text-2xl text-primary">*</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 h-full">
                    <img
                      src={girl}
                      alt=""
                      className="w-full h-full md:h-[610px] object-cover"
                    />
                  </div>
                </div>
              </Container>
            </div>
          </div>
        ))}
        {imageData?.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item?.image}
              alt=""
              className="h-[300px] md:h-[700px] w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full md:py-10">
              <Container
                className={
                  "flex py-4 md:py-10   justify-center gap-2 md:gap-3 h-full"
                }
              >
                <div className="md:w-1/2 h-full">
                  <p className="font-font1 md:font-semibold text-white">
                    {item?.title}
                  </p>
                  <p className="font-font2 md:text-[80px] leading-tight text-white">
                    {item?.description}
                  </p>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-3 md:mt-8">
                    <button className="rounded-md hover:bg-primary duration-300  border border-slate-400 text-white md:py-2 md:px-4">
                      View Courses
                    </button>
                    <button className="rounded-md hover:bg-primary duration-300  border border-slate-400 text-white py-2 px-4">
                      Get Free Consultation
                    </button>
                  </div>
                  <div className="md:mt-10 mt-3 md:w-[500px] relative">
                    <input
                      className="w-[100%]  top-0 right-0 rounded-md duration-300  border border-slate-400 border-none outline-none py-2 px-2 md:py-3 md:px-4"
                      type="text"
                      placeholder="What do you want to learn today?"
                    />

                    <button className="md:px-4 px-2 md:py-2 flex items-center gap-2 absolute right-2 md:right-4 top-[50%] -translate-y-[50%] bg-custom-gradient text-white rounded-md  ">
                      <IoSearch />
                      Signup
                    </button>
                  </div>
                </div>
                <div className="md:mt-20 relative bottom-0">
                  <img src={coma} alt="" />
                </div>
                <div className="w-1/2 h-full flex items-center">
                  <div className="md:w-1/2 h-full hidden md:block">
                    <div className="md:mt-20">
                      <p className="text-white font-font1">{item?.title2}</p>
                      <p className="text-white tracking-tight">
                        {item?.description2}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className=" text-xl text-primary">4.8</p>
                        <p className=" text-2xl text-primary">*</p>
                        <p className=" text-2xl text-primary">*</p>
                        <p className=" text-2xl text-primary">*</p>
                        <p className=" text-2xl text-primary">*</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 h-full">
                    <img
                      src={girl}
                      alt=""
                      className="w-full h-full md:h-[610px] object-cover"
                    />
                  </div>
                </div>
              </Container>
            </div>
          </div>
        ))}
        {imageData?.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item?.image}
              alt=""
              className="h-[300px] md:h-[700px] w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full md:py-10">
              <Container
                className={
                  "flex py-4 md:py-10   justify-center gap-2 md:gap-3 h-full"
                }
              >
                <div className="md:w-1/2 h-full">
                  <p className="font-font1 md:font-semibold text-white">
                    {item?.title}
                  </p>
                  <p className="font-font2 md:text-[80px] leading-tight text-white">
                    {item?.description}
                  </p>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-3 md:mt-8">
                    <button className="rounded-md hover:bg-primary duration-300  border border-slate-400 text-white md:py-2 md:px-4">
                      View Courses
                    </button>
                    <button className="rounded-md hover:bg-primary duration-300  border border-slate-400 text-white py-2 px-4">
                      Get Free Consultation
                    </button>
                  </div>
                  <div className="md:mt-10 mt-3 md:w-[500px] relative">
                    <input
                      className="w-[100%]  top-0 right-0 rounded-md duration-300  border border-slate-400 border-none outline-none py-2 px-2 md:py-3 md:px-4"
                      type="text"
                      placeholder="What do you want to learn today?"
                    />

                    <button className="md:px-4 px-2 md:py-2 flex items-center gap-2 absolute right-2 md:right-4 top-[50%] -translate-y-[50%] bg-custom-gradient text-white rounded-md  ">
                      <IoSearch />
                      Signup
                    </button>
                  </div>
                </div>
                <div className="md:mt-20 relative bottom-0">
                  <img src={coma} alt="" />
                </div>
                <div className="w-1/2 h-full flex items-center">
                  <div className="md:w-1/2 h-full hidden md:block">
                    <div className="md:mt-20">
                      <p className="text-white font-font1">{item?.title2}</p>
                      <p className="text-white tracking-tight">
                        {item?.description2}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className=" text-xl text-primary">4.8</p>
                        <p className=" text-2xl text-primary">*</p>
                        <p className=" text-2xl text-primary">*</p>
                        <p className=" text-2xl text-primary">*</p>
                        <p className=" text-2xl text-primary">*</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 h-full">
                    <img
                      src={girl}
                      alt=""
                      className="w-full h-full md:h-[610px] object-cover"
                    />
                  </div>
                </div>
              </Container>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
