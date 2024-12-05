import React from "react";
import Marquee from "react-fast-marquee";
import Container from "./Container";
import amazon from "../assets/amazon.png";
import amd from "../assets/amd.png";
import cisco from "../assets/cisco.png";
import dropcam from "../assets/dropcam.png";
import logitech from "../assets/logitech.png";
import spotify from "../assets/spotify.png";
const BrandAnimation = () => {
  return (
    <div className=" w-full  bg-custom"> 
      <Container className="px-0 py-0 md:py-4">
        <Marquee  speed={60} gradientColor={[255, 255, 255]} pauseOnHover>
          <div className="flex items-center gap-2 md:gap-32">
            <img src={amazon} alt="Item 1" className="mx-4 w-12 md:w-24" />
          
          
            <img src={amd} alt="Item 1" className="mx-4 w-12 md:w-24" />
          
   
            <img src={cisco} alt="Item 1" className="mx-4 w-12 md:w-24" />
        
      
            <img src={dropcam} alt="Item 1" className="mx-4 w-12 md:w-24" />
         
            <img src={logitech} alt="Item 1" className="mx-4 w-12 md:w-24" />
         
         
            <img src={spotify} alt="Item 1" className="mx-4 w-12 md:w-24" />
          </div>
        </Marquee>
      </Container>
    </div>
  );
};

export default BrandAnimation;
