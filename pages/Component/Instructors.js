import { BsFillTriangleFill } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";

const Instructors = () => {
  return (
    <div className="py-32 bg-[#010B2E] px-10 mb-20">
      <h3 className="text-center text-white text-5xl font-extrabold">
        Talented Instructors
      </h3>
      <p className="text-center text-white text-lg mt-3">
        Skillful instructors are ready to teach and help you find compelling{" "}
        <br />
        ideas, knowledge, and perspectives.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12 group">
        <div className="bg-black/60 py-4 rounded-md group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 group-hover:shadow-xl hover:!shadow-xl duration-300 cursor-pointer">
            <BsFillTriangleFill className="text-4xl text-[#50B3A8] ml-40"></BsFillTriangleFill>
          <img
            className="rounded-full w-1/2 mx-auto hover:ease-out transition-all duration-300"
            src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/10/Team-01.jpg"
          ></img>
          <FaDotCircle className="text-4xl text-[#50B3A8] ml-14"></FaDotCircle>
          <h3 className="text-xl font-bold text-center text-white mt-2">
            Carol Barnes
          </h3>
          <p className="text-center text-white text-lg">2 Courses</p>
        </div>
        <div className="bg-black/60 py-4 rounded-md group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 group-hover:shadow-xl hover:!shadow-xl duration-300 cursor-pointer">
            <BsFillTriangleFill className="text-4xl text-[#50B3A8] ml-40"></BsFillTriangleFill>
          <img
            className="rounded-full w-1/2 mx-auto hover:ease-out transition-all duration-300"
            src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/10/Team-01.jpg"
          ></img>
          <FaDotCircle className="text-4xl text-[#50B3A8] ml-14"></FaDotCircle>
          <h3 className="text-xl font-bold text-center text-white mt-2">
            Carol Barnes
          </h3>
          <p className="text-center text-white text-lg">2 Courses</p>
        </div>
        <div className="bg-black/60 py-4 rounded-md group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 group-hover:shadow-xl hover:!shadow-xl duration-300 cursor-pointer">
            <BsFillTriangleFill className="text-4xl text-[#50B3A8] ml-40"></BsFillTriangleFill>
          <img
            className="rounded-full w-1/2 mx-auto hover:ease-out transition-all duration-300"
            src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/10/Team-01.jpg"
          ></img>
          <FaDotCircle className="text-4xl text-[#50B3A8] ml-14"></FaDotCircle>
          <h3 className="text-xl font-bold text-center text-white mt-2">
            Carol Barnes
          </h3>
          <p className="text-center text-white text-lg">2 Courses</p>
        </div>
        <div className="bg-black/60 py-4 rounded-md group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 group-hover:shadow-xl hover:!shadow-xl duration-300 cursor-pointer">
            <BsFillTriangleFill className="text-4xl text-[#50B3A8] ml-40"></BsFillTriangleFill>
          <img
            className="rounded-full w-1/2 mx-auto hover:ease-out transition-all duration-300"
            src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/10/Team-01.jpg"
          ></img>
          <FaDotCircle className="text-4xl text-[#50B3A8] ml-14"></FaDotCircle>
          <h3 className="text-xl font-bold text-center text-white mt-2">
            Carol Barnes
          </h3>
          <p className="text-center text-white text-lg">2 Courses</p>
        </div>
        <div className="bg-black/60 py-4 rounded-md group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 group-hover:shadow-xl hover:!shadow-xl duration-300 cursor-pointer">
            <BsFillTriangleFill className="text-4xl text-[#50B3A8] ml-40"></BsFillTriangleFill>
          <img
            className="rounded-full w-1/2 mx-auto hover:ease-out transition-all duration-300"
            src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/10/Team-01.jpg"
          ></img>
          <FaDotCircle className="text-4xl text-[#50B3A8] ml-14"></FaDotCircle>
          <h3 className="text-xl font-bold text-center text-white mt-2">
            Carol Barnes
          </h3>
          <p className="text-center text-white text-lg">2 Courses</p>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
