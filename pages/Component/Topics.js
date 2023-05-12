import React from "react";

const Topics = () => {
  return (
    <div className="mt-32 mb-4">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold">Popular Topics</h1>
        <p className="text-lg mt-4">
          Keep up with the topics and trends you care about the most
        </p>
      </div>
      <img className="w-[70%] lg:w-[30%] absolute left-[50px] md:left-[115px] lg:left-[470px] animate-spin-slow" src="https://robokalam.com/assets/backgrounds/rotate-elipse1-min.png"></img>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-10 pt-28 text-center relative">
        <h2 className="text-3xl bg-green-200 rounded-md font-extrabold shadow-xl p-14 hover:scale-105 transition-all duration-700">
          Designing
        </h2>
        <h2 className="text-3xl bg-green-200 rounded-md font-extrabold shadow-xl p-14 hover:scale-105 transition-all duration-700">
          Business
        </h2>
        <h2 className="text-3xl bg-green-200 rounded-md font-extrabold shadow-xl p-14 hover:scale-105 transition-all duration-700">
          Marketing
        </h2>
        <h2 className="text-3xl bg-green-200 rounded-md font-extrabold shadow-xl p-14 hover:scale-105 transition-all duration-700">
          Software
        </h2>
      </div>
    </div>
  );
};

export default Topics;
