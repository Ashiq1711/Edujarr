import React from "react";

const Title = ({ text1, text2, text3, className }) => {
  return (
    <>
      <p
        className={`${className} text-3xl md:mt-10 font-bold font-font2 md:text-4xl`}
      >
        {text1} <span className="text-primary">{text2}</span>
        {text3} <span></span>
      </p>
    </>
  );
};

export default Title;
