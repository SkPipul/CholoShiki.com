import React from "react";

const Topics = () => {
  return (
    <div className="mt-32">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold">Popular Topics</h1>
        <p className="text-lg mt-4">
          Keep up with the topics and trends you care about the most
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-10 text-center">
        <h2 className="text-3xl bg-green-200 rounded-md font-extrabold shadow-xl p-14 hover:scale-110 transition-all duration-700">
          Designing
        </h2>
        <h2 className="text-3xl bg-green-200 rounded-md font-extrabold shadow-xl p-14 hover:scale-110 transition-all duration-700">
          Business
        </h2>
        <h2 className="text-3xl bg-green-200 rounded-md font-extrabold shadow-xl p-14 hover:scale-110 transition-all duration-700">
          Marketing
        </h2>
        <h2 className="text-3xl bg-green-200 rounded-md font-extrabold shadow-xl p-14 hover:scale-110 transition-all duration-700">
          Software
        </h2>
      </div>
    </div>
  );
};

export default Topics;
