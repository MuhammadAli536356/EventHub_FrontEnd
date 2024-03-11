function HomeDiv() {
  return (
    <>
      <div className="h-auto w-full flex flex-wrap flex-col items-center text-center mt-9">
        <h1 className="text-green-600 text-4xl md:text-5xl font-extrabold">
          {" "}
          EventHub{" "}
        </h1>
        <p className="text-orange-500 text-xl md:text-3xl font-sans font-bold">
          Create | Discover | Thrive
        </p>
        <div className="bg-yellow-200 w-[30%] h-[6px] mt-2 rounded-sm"></div>
      </div>

      <div className="h-auto w-full flex flex-wrap justify-evenly p-4 mt-5 mb-8 ">
        <div className="max-w-sm  rounded-lg  overflow-hidden shadow-xl shadow-gray-400 hover:shadow-gray-700 transition duration-1000 mb-8">
          <img
            className="w-[300px] h-[250px] hover:w-[350px] hover:h-[300px] rounded-md transition duration-1000"
            src="/images/org.jpg"
            alt=""
          />
          <p className="text-center font-bold text-4xl text-orange-600 mt-5">
            2000+
          </p>
          <p className="text-center font-bold text-2xl text-yellow-800 mb-6">
            Organizations
          </p>
        </div>

        <div className="max-w-sm  rounded-lg  overflow-hidden shadow-xl shadow-gray-400 hover:shadow-gray-700 transition duration-1000 mb-8">
          <img
            className="w-[300px] h-[250px] hover:w-[350px] hover:h-[300px] rounded-md transition duration-1000"
            src="/images/users.png"
            alt=""
          />
          <p className="text-center font-bold text-4xl text-orange-600 mt-5">
            50000+
          </p>
          <p className="text-center font-bold text-2xl text-green-600 mb-6">
            Users
          </p>
        </div>

        <div className="max-w-sm rounded-lg  overflow-hidden shadow-xl shadow-gray-400 hover:shadow-gray-700 transition duration-1000 mb-8">
          <img
            className="w-[300px] h-[250px] hover:w-[350px] hover:h-[300px] rounded-md transition duration-1000"
            src="/images/events.jpeg"
            alt=""
          />
          <p className="text-center font-bold text-4xl text-orange-600 mt-5">
            10000+
          </p>
          <p className="text-center font-bold text-2xl text-red-600 mb-6">
            Events
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <h1 className=" text-orange-700 text-4xl font-sans font-bold hover:text-5xl">
          {" "}
          Want To Explore More Event?{" "}
        </h1>
        <a
          className="text-green-400 hover:text-green-500 text-bold text-3xl font-sans ml-2"
          href=""
        >
          Click Here
        </a>
      </div>
    </>
  );
}

export default HomeDiv;
