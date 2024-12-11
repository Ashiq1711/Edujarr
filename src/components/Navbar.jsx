import React, { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Container from "../components/Container";
import logo from "../assets/logo.png";
import { headerNavigation } from "../constant";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import Title from "./Title";
import SocialIcons from "./SocialIcons";
const Navbar = () => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/90 ">
      <Container className="flex items-center justify-between py-5 md:py-4 gap-x-3 md:gap-x-7 ">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt=""
          className="md:w-[190px] w-36 cursor-pointer"
        />
        <div className="hidden md:inline-flex items-center gap-10 lg:gap-10 text-start uppercase border p-4 rounded-full ">
          {headerNavigation.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.link}
                className="relative group overflow-hidden font-font1  text-center inline-flex gap-1  items-center font-medium text-secondary hover:text-primary duration-300"
              >
                {item.title} <FaAngleDown className="text-sm" />
                <span className="absolute bottom-0 left-0 w-full -translate-x-[110%] group-hover:translate-x-0 inline-block  h-0.5 bg-primary transition-all duration-300 ease-in-out"></span>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5 md:gap-7">
          <button className="relative group text-2xl cursor-pointer hover:text-primary transition ease-in-out duration-300 transform hover:scale-110">
            <AiTwotoneDelete />
            <span className="group-hover:bg-primary w-3.5 h-3.5 bg-primary rounded-full transition ease-in-out duration-300 text-[9px] flex justify-center items-center absolute -top-1 -right-2 text-white ">
              0
            </span>
          </button>
          <FaRegCircleUser className="text-2xl cursor-pointer hover:text-primary transition ease-in-out duration-300 transform hover:scale-110" />
          <IoIosSearch className="text-2xl cursor-pointer hover:text-primary transition ease-in-out duration-300 transform hover:scale-110" />
          <RiMenuLine
            onClick={() => setIsOpen(true)}
            className="md:hidden block font-bold text-2xl cursor-pointer hover:text-primary transition ease-in-out duration-300 transform hover:scale-110"
          />

          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 md:hidden bg-black/70 flex items-center justify-center p-4">
              <DialogPanel className="w-[94%] space-y-4 border-secondary border  bg-black/80 text-white p-8">
                <div className="flex items-center justify-between">
                  <Title text1={"Menu"} />
                  <IoMdClose
                    onClick={() => setIsOpen(false)}
                    className="text-3xl hover:text-red-600 hoverEffect cursor-pointer"
                  />
                </div>
                <div>
                  {headerNavigation?.map((item, index) => (
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      to={item?.link}
                      key={index}
                      className="flex  duration-300 relative group  items-center gap-3 py-3"
                    >
                      <p>{item?.icons}</p>

                      <p className="text-lg">{item?.title}</p>
                      <span className="absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-white duration-300" />
                    </NavLink>
                  ))}
                  <div className="mt-4">
                    <NavLink
                      to="/signin"
                      onClick={() => setIsOpen(false)}
                      className="text-lg flex  duration-300 relative group items-center gap-3"
                    >
                      <FaSignInAlt />
                      Signin
                      <span className="absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-white duration-300" />
                    </NavLink>
                  </div>
                </div>
                <div>
                  <SocialIcons />
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        </div>

        <div className="md:flex hidden md:block font-font1 items-center gap-8">
          <button className="relative group overflow-hidden text-xl font-medium hover:text-primary  text-secondary duration-300">
            Login
            <span className="absolute bottom-0 left-0 w-full -translate-x-[110%] group-hover:translate-x-0 inline-block  h-0.5 bg-primary transition-all duration-300 ease-in-out"></span>
          </button>
          <button className="px-4 py-2 bg-custom-gradient text-white rounded-md  transition ease-in-out duration-300 transform hover:scale-110">
            Signup
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
