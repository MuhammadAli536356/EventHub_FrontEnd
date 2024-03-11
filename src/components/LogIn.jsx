import React from "react";

function LogIn() {
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
          Log In
        </h2>
        <form className="space-y-6">
          <div className="max-w-md mx-auto">
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

          <div className=" flex justify-center">
            <button
              type="submit"
              className=" bg-orange-400 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
