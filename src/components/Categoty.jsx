import React from "react";
import Container from "./Container";
import Title from "./Title";
import { cardData2 } from "../constant";
import Slider from "react-slick";



const Categoty = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,

  };
  return (
    <div className="bg-custom2">
      <Container>
        <div className="text-center w-[550px] mx-auto ">
          <Title text1="Top" text2="Categories" />
          <p className="text-[20px] py-3 text-secondary font-medium font-font1">
            12,000+ unique online course list designs
          </p>
        </div>
        <div className=" my-16">
          <Slider {...settings}>
            {cardData2?.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer px-20 max-w-sm bg-white border rounded-xl border-gray-200 "
              >
                <div className="flex flex-col py-10 items-center pb-10">
                  <img className="w-14" src={item?.image} alt="" />
                  <div className="my-5 text-center">

                  <h5 className=" text-[20px] font-font1 font-semibold text-gray-900 ">
                    {item?.title}
                  </h5>
                  <p className=" text-[20px] font-font1 font-semibold text-gray-900 ">{item?.title2}</p>
                  </div>
                  <span className="text-sm font-font1 text-gray-500 ">
                    {item?.courses}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Categoty;
