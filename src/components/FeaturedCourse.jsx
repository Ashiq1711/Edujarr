import React, { useState } from "react";
import Container from "./Container";
import Title from "./Title";
import { cardData } from "../constant";
const FeaturedCourse = () => {
  const [visivle, setVisivle] = useState(6);
  const showMore = () => {
    setVisivle((prevValue) => prevValue + 3);
  };
  return (
    <div className="bg-custom2">
      <Container>
        <div className="text-center w-[500px] mx-auto py-10">
          <Title text1={"Featured"} text2={"Course"} />
          <p className="text-base font-font1 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporidunt ut labore veniam...
          </p>
        </div>

        {/* <!-- Product Card --> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 gap-y-10 mt-14">
          {cardData?.slice(0, visivle).map((item, index) => (
            <div
              key={index}
              className="w-full cursor-pointer rounded-lg max-w-sm hover:scale-110 transition ease-in-out duration-300 bg-white border "
            >
              <a href="#">
                <img className=" " src={item?.image} alt="product image" />
              </a>
              <div className="px-4  py-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-font1 text-gray-900 dark:text-white">
                    {item?.students}
                  </span>
                  <a href="#" className="text-sm font-font1">
                    {item?.date}
                  </a>
                </div>
                <a href="#">
                  <h5 className="text-xl py-4 font-semibold font-font1 tracking-tight text-gray-900 dark:text-white">
                    {item?.title}
                  </h5>
                </a>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item?.price}
                  </span>
                  <a href="#" className="text-2xl">
                    {item?.cartIcon}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center w-full">
          <button
            onClick={showMore}
            className="px-4 py-2 bg-custom-gradient  mx-auto text-white rounded-md  transition ease-in-out duration-300 transform hover:scale-110"
          >
            Explore courses
          </button>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedCourse;
