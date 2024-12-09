import { FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineDetails } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
// card section
import { FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";

//courses section
import Ccard1 from "../assets/category1.png";
import Ccard2 from "../assets/category2.png";
import Ccard3 from "../assets/category3.png";
import Ccard4 from "../assets/category4.png";
import Ccard5 from "../assets/category5.png";
import Ccard6 from "../assets/category6.png";

export const headerNavigation = [
  { icons: <FaHome />, title: "Home", link: "/" },

  { icons: <FaShoppingBag />, title: "Course", link: "/course" },
  { icons: <FaShoppingBag />, title: "Shop", link: "/shop" },

  { icons: <MdOutlineDetails />, title: "Blog", link: "/blog" },

  { icons: <BiSolidUserDetail />, title: "Pages", link: "/pages" },

  { icons: <FaShoppingCart />, title: "Events", link: "/events" },
];

//card section
export const cardData=[
  {
    title:"Motion Graphics: Create a Nice Typography Animation",
    price:"$33.99",
    students:'5,957 Students',
    cartIcon:<IoCartOutline />,
    image: card1,
    date:"Nov 20, 2022"

  },
  {
    title:"Motion Graphics: Create a Nice Typography Animation",
    price:"$33.99",
    students:'5,957 Students',
    cartIcon:<IoCartOutline />,
    image: card2,
     date:"Nov 20, 2022"

  },
  {
    title:"Motion Graphics: Create a Nice Typography Animation",
    price:"$33.99",
    students:'5,957 Students',
    cartIcon:<IoCartOutline />,
    image: card3,
     date:"Nov 20, 2022"

  },
  {
    title:"Motion Graphics: Create a Nice Typography Animation",
    price:"$33.99",
    students:'5,957 Students',
    cartIcon:<IoCartOutline />,
    image: card4,
     date:"Nov 20, 2022"

  },
  {
    title:"Motion Graphics: Create a Nice Typography Animation",
    price:"$33.99",
    students:'5,957 Students',
    cartIcon:<IoCartOutline />,
    image: card5,
     date:"Nov 20, 2022"

  },
  {
    title:"Motion Graphics: Create a Nice Typography Animation",
    price:"$33.99",
    students:'5,957 Students',
    cartIcon:<IoCartOutline />,
    image: card6,
     date:"Nov 20, 2022"

  },
  {
    title:"Motion Graphics: Create a Nice Typography Animation",
    price:"$33.99",
    students:'5,957 Students',
    cartIcon:<IoCartOutline />,
    image: card1,
    date:"Nov 20, 2022"

  },
  {
    title:"Motion Graphics: Create a Nice Typography Animation",
    price:"$33.99",
    students:'5,957 Students',
    cartIcon:<IoCartOutline />,
    image: card2,
     date:"Nov 20, 2022"

  },
  {
    title:"Motion Graphics: Create a Nice Typography Animation",
    price:"$33.99",
    students:'5,957 Students',
    cartIcon:<IoCartOutline />,
    image: card3,
     date:"Nov 20, 2022"

  },
]
//courses section
export const cardData2=[
  {
    image: Ccard1,
    title: "Digta ",
    title2:"Marketing",
    courses:"25 Courses"
  },
  {
    image: Ccard2,
    title: "Web ",
    title2:"Development",
    courses:"16 Courses"
  },
  {
    image: Ccard3,
    title: "Art & ",
    title2:"Humanities",
    courses:"76 Courses"
  },
  {
    image: Ccard4,
    title: "Personal ",
    title2:"Development",
    courses:"25 Courses",
  },
  {
    image: Ccard5,
    title: "IT and ",
    title2:"Software",
    courses:"125 Courses"
  },
  {
    image: Ccard6,
    title: "Graphic ",
    title2:"Design",
    courses:"215 Courses"
  },
]