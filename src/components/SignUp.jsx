// {/* <div className="flex mx-auto justify-center flex-col mt-6 ">
// <h1 className="text-center text-orange-600 md:text-6xl text-3xl font-bold mb-4 hover:text-orange-700" >EventHub</h1>
// <p className="font-bold text-center md:text-3xl text-xl text-green-600 hover:text-green-700  ">Create | Discover | Thrive</p>
// </div> */}

// import React from "react";

// function Signup() {
//   return (
//     <div className="flex flex-col md:flex-row ">
//       <div className="md:flex md:flex-col m-auto">
//         <img
//           className="h-40 w-40 md:h-[260px] md:w-[260px] m-auto"
//           src="/images/eventhubLogo.png"
//           alt="logo"
//         />
//         <div className="hidden md:block">
//           <h1 className="text-orange-600 text-6xl font-extrabold  text-center">
//             EventHub
//           </h1>
//           <p className="text-green-500 font-bold text-4xl text-center mt-6">
//             Create | Discover | Thrive
//           </p>
//         </div>
//       </div>

//       <div className="max-w-md mx-auto mt-8 pl-[90px] pr-[90px] pt-8 pb-8 bg-white rounded-lg shadow-xl shadow-gray-300">
//         <h2 className="text-4xl font-bold text-center mb-8 text-green-800">
//           Sign Up
//         </h2>
//         <form className="space-y-6">
//           <div className="max-w-md mx-auto">
//             <div>
//               <label
//                 htmlFor="username"
//                 className="block text-gray-700 font-semibold"
//               >
//                 Username:
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 className="mt-2 block w-full rounded-md border-gray-200 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 font-semibold"
//               >
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="mt-2 block w-full rounded-md border-gray-200 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 font-semibold"
//               >
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="mt-2 block w-full rounded-md border-gray-200 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//           </div>

//           <div className="max-w-md mx-auto">
//             <label className="block text-gray-700 font-semibold">
//               Please Select The Required Field
//             </label>
//             <div className="mt-1 flex items-center space-x-4">
//               <label htmlFor="OrgAdmin" className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   id="admin"
//                   name="organizationType"
//                   value="admin"
//                   className="form-radio"
//                 />
//                 <span className="ml-2">Organization</span>
//               </label>
//               <label
//                 htmlFor="PlatformUser"
//                 className="inline-flex items-center"
//               >
//                 <input
//                   type="radio"
//                   id="user"
//                   name="organizationType"
//                   value="user"
//                   className="form-radio"
//                 />
//                 <span className="ml-2">User</span>
//               </label>
//             </div>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className=" bg-orange-400 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
//             >
//               Sign Up
//             </button>
//           </div>
//           <div className="flex justify-center">
//             <p className="text-gray-800">
//               Already have an Account?
//               <a
//                 className="text-green-800 font-bold hover:text-green-500"
//                 href="#"
//               >
//                 {" "}
//                 LogIn
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="md:flex md:flex-col m-auto">
        <img
          className="h-40 w-40 md:h-[260px] md:w-[260px] m-auto"
          src="/images/eventhubLogo.png"
          alt="logo"
        />
        <div className="hidden md:block">
          <h1 className="text-orange-600 text-6xl font-extrabold  text-center">
            EventHub
          </h1>
          <p className="text-green-500 font-bold text-4xl text-center mt-6">
            Create | Discover | Thrive
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-8 pl-[90px] pr-[90px] pt-8 pb-8 bg-white rounded-lg shadow-xl shadow-gray-300">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-800">
          Sign Up
        </h2>
        <form className="space-y-6">
        <div className="max-w-md mx-auto">
            <div>
               <label
                 htmlFor="username" 
                 className="block text-gray-700 font-semibold"
               >
                 Username:
               </label>
               <input
                 type="text"
                 id="username"
                 name="username"
                 className="mt-2 block w-full rounded-md border-gray-200 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               />
             </div>
             <div>
               <label
                 htmlFor="email"
                 className="block text-gray-700 font-semibold"
               >
                 Email:
               </label>
               <input
                 type="email"
                 id="email"
                 name="email"
                 className="mt-2 block w-full rounded-md border-gray-200 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               />
             </div>
             <div>
               <label
                 htmlFor="password"
                 className="block text-gray-700 font-semibold"
               >
                 Password:
               </label>
               <input
                 type="password"
                 id="password"
                name="password"
                className="mt-2 block w-full rounded-md border-gray-200 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <label className="block text-gray-700 font-semibold">
              Please Select The Required Field
            </label>
            <div className="mt-1 flex items-center space-x-4">
              <label htmlFor="OrgAdmin" className="inline-flex items-center">
                <input
                  type="radio"
                  id="admin"
                  name="organizationType"
                  value="admin"
                  className="form-radio"
                />
                <span className="ml-2">Organization</span>
              </label>
              <label
                htmlFor="PlatformUser"
                className="inline-flex items-center"
              >
                <input
                  type="radio"
                  id="user"
                  name="organizationType"
                  value="user"
                  className="form-radio"
                />
                <span className="ml-2">User</span>
              </label>
             </div>
           </div> 

          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-orange-400 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-800">
              Already have an Account?
              <Link
                to="/login"
                className="text-green-800 font-bold hover:text-green-500"
              >
                {" "}
                LogIn
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

