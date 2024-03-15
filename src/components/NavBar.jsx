// import React, { useState } from "react";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const colors = {
//     green: ["text-green-400", "hover:text-green-500"],
//     orange: ["text-orange-400", "hover:text-orange-500"],
//     red: ["text-red-400", "hover:text-red-500"],
//     gray: [
//       "text-gray-800",
//       "bg-gray-300",
//       "hover:bg-gray-400",
//       "hover:bg-gray-500",
//     ],
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="fixed top-0 w-full z-10 shadow-md">
//       <div
//         className={`bg-gray-800 flex justify-between items-center p-6 rounded-lg h-13`}
//       >
//         <div className="mr-8 flex flex-row items-center">
//           <img
//             className="h-12 w-13"
//             src="/images/eventhubLogo.png"
//             alt="EventHub Logo"
//           />
//           <h1 className="text-white text-3xl mt-4 font-bold ml-2">EventHub</h1>
//         </div>
//         <div className="hidden md:flex md:items-center md:space-x-6 md:m-auto">
//           <a
//             href="#"
//             className={`${colors.green[0]} ${colors.green[1]} text-xl font-bold`}
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className={`${colors.orange[0]} ${colors.orange[1]} text-xl font-bold`}
//           >
//             About
//           </a>
//           <a
//             href="#"
//             className={`${colors.red[0]} ${colors.red[1]} text-xl font-bold`}
//           >
//             Contact
//           </a>
//         </div>
//         <div className="hidden md:block">
//           <button
//             className={`${colors.gray[1]} ${colors.gray[0]} ${colors.gray[3]} py-2 px-4 font-bold rounded-full`}
//           >
//             Sign Up
//           </button>
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={toggleDropdown}
//             className="text-gray-300 text-4xl focus:outline-none hover:text-green-400"
//           >
//             &#8801;
//           </button>
//         </div>
//       </div>
//       <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
//         <div className="p-4 ml-[60%] w-[35%] mr-[5%] rounded-lg shadow-lg bg-white">
//           <a href="#" className={`${colors.green[0]}  py-2 text-lg block mt-2`}>
//             Home
//           </a>
//           <a href="#" className={`${colors.orange[0]} py-2 text-lg block`}>
//             About
//           </a>
//           <a href="#" className={`${colors.red[0]} py-2 text-lg block`}>
//             Contact
//           </a>
//           <button
//             className={`${colors.gray[1]} ${colors.gray[0]} py-2 px-4 rounded-full mt-4 m-auto w-[80%]`}
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const colors = {
//     green: ["text-green-400", "hover:text-green-500"],
//     orange: ["text-orange-400", "hover:text-orange-500"],
//     red: ["text-red-400", "hover:text-red-500"],
//     gray: [
//       "text-gray-800",
//       "bg-gray-300",
//       "hover:bg-gray-400",
//       "hover:bg-gray-500",
//     ],
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="fixed top-0 w-full z-10 shadow-md">
//       <div
//         className={`bg-gray-800 flex justify-between items-center p-6 rounded-lg h-13`}
//       >
//         <div className="mr-8 flex flex-row items-center">
//           <img
//             className="h-12 w-13"
//             src="/images/eventhubLogo.png"
//             alt="EventHub Logo"
//           />
//           <h1 className="text-white text-3xl mt-4 font-bold ml-2">EventHub</h1>
//         </div>
//         <div className="hidden md:flex md:items-center md:space-x-6 md:m-auto">
//           <Link
//             to="/"
//             className={`${colors.green[0]} ${colors.green[1]} text-xl font-bold`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className={`${colors.orange[0]} ${colors.orange[1]} text-xl font-bold`}
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className={`${colors.red[0]} ${colors.red[1]} text-xl font-bold`}
//           >
//             Contact
//           </Link>
//         </div>
//         <div className="hidden md:block">
//           <button
//             className={`${colors.gray[1]} ${colors.gray[0]} ${colors.gray[3]} py-2 px-4 font-bold rounded-full`}
//           >
//             Sign Up
//           </button>
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={toggleDropdown}
//             className="text-gray-300 text-4xl focus:outline-none hover:text-green-400"
//           >
//             &#8801;
//           </button>
//         </div>
//       </div>
//       <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
//         <div className="p-4 ml-[60%] w-[35%] mr-[5%] rounded-lg shadow-lg bg-white">
//           <Link
//             to="/"
//             className={`${colors.green[0]}  py-2 text-lg block mt-2`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className={`${colors.orange[0]} py-2 text-lg block`}
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className={`${colors.red[0]} py-2 text-lg block`}
//           >
//             Contact
//           </Link>
//           <button
//             className={`${colors.gray[1]} ${colors.gray[0]} py-2 px-4 rounded-full mt-4 m-auto w-[80%]`}
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = {
    green: ["text-green-400", "hover:text-green-500"],
    orange: ["text-orange-400", "hover:text-orange-500"],
    red: ["text-red-400", "hover:text-red-500"],
    gray: [
      "text-gray-800",
      "bg-gray-300",
      "hover:bg-gray-400",
      "hover:bg-gray-500",
    ],
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-10 shadow-md">
      <div
        className={`bg-gray-800 flex justify-between items-center p-6 rounded-lg h-13`}
      >
        <div className="mr-8 flex flex-row items-center">
          <img
            className="h-12 w-13"
            src="/images/eventhubLogo.png"
            alt="EventHub Logo"
          />
          <h1 className="text-white text-3xl mt-4 font-bold ml-2">EventHub</h1>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6 md:m-auto">
          <Link
            to="/"
            className={`${colors.green[0]} ${colors.green[1]} text-xl font-bold`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${colors.orange[0]} ${colors.orange[1]} text-xl font-bold`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${colors.red[0]} ${colors.red[1]} text-xl font-bold`}
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            to="/signup"
            className={`${colors.gray[1]} ${colors.gray[0]} ${colors.gray[3]} py-2 px-4 font-bold rounded-full`}
          >
            Sign Up
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-gray-300 text-4xl focus:outline-none hover:text-green-400"
          >
            &#8801;
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="p-4 ml-[60%] w-[35%] mr-[5%] rounded-lg shadow-lg bg-white">
          <Link
            to="/"
            className={`${colors.green[0]}  py-2 text-lg block mt-2`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${colors.orange[0]} py-2 text-lg block`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`${colors.red[0]} py-2 text-lg block`}
          >
            Contact
          </Link>
          <Link
            to="/signup"
            className={`${colors.gray[1]} ${colors.gray[0]} py-2 px-4 rounded-full mt-4 m-auto w-[80%]`}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
