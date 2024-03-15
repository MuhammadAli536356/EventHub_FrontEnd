
import React, { useState, useEffect } from 'react';
import Pic_3 from '/EventHub-Frontend/MAli_Push_Frontend/EventHub-FrontEnd/src/Images/Pic_3.jpeg';
import Pic_4 from '/EventHub-Frontend/MAli_Push_Frontend/EventHub-FrontEnd/src/Images/Pic_4.jpg';


// function UserProfile() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="stylesheet" href="style.css" />
//         <title>User Profile</title>
//       </head>
//       <body className={`font-sans antialiased text-gray-900 leading-normal tracking-wider ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-cover'}`} style={{ backgroundImage: `url(${Pic_4})` }}>
//         <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
//           <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
//             <div className="p-4 md:p-12 text-center lg:text-left">
//               <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url(${Pic_3})` }}></div>
//               <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
//               <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
//               <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">Email address</dt>
//                 <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">johndoe@example.com</dd>
//               </div>
//               <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt class="text-sm font-medium text-gray-500">
//                         Username
//                     </dt>
//                     <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                         From Database
//                     </dd>
//                 </div>

//                 <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt class="text-sm font-medium text-gray-500">
//                         type
//                     </dt>
//                     <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                         From Database
//                     </dd>
//                 </div>

//                 <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt class="text-sm font-medium text-gray-500">
//                         Bio
//                     </dt>
//                     <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                         From Database
//                     </dd>
//                 </div>

//                 <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt class="text-sm font-medium text-gray-500">
//                         Interests
//                     </dt>
//                     <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                         From Database
//                     </dd>
//                 </div>
//             </div>
//           </div>
//           <div className="w-full lg:w-2/5">
//             <img src={Pic_3} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
//           </div>
//           <div className="absolute top-0 right-0 h-12 w-18 p-4">
//             <button className="js-change-theme focus:outline-none" onClick={toggleDarkMode}>{isDarkMode ? "☀️" : "🌙"}</button>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }

// export default UserProfile;








function UserProfile() {
    return (
           <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
            <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
                    <div className="p-4 md:p-12 text-center lg:text-left">
                        <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{backgroundImage:  `url(${Pic_3})`}}></div>
                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
                        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">johndoe@example.com</dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Username</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">From Database</dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Type</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">From Database</dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Bio</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">From Database</dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Interests</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">From Database</dd>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5">
                    <img src={Pic_3} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt="Profile Pic" />
                </div>
                
            </div>
        
    );
}

export default UserProfile;