import { TfiCalendar, TfiBag } from "react-icons/tfi";
import { FiBookOpen } from "react-icons/fi";
import { BsPlayCircleFill } from "react-icons/bs";

const ResultSection = () => {
  return (
    <div>
      <div className="bg-[#010B2E] px-10 py-32 relative top-32">
        <div className="text-center">
          <h2 className="mb-2 text-4xl text-white font-extrabold">
            We Deliver Real Results
          </h2>
          <p className="text-lg mt-4 text-white">
            Check back most work-days for new lessons on your favorite web{" "}
            <br />
            technologies and techniques.
          </p>
        </div>
        <div className="lg:flex items-center justify-around md:grid md:grid-cols-2 md:gap-3 my-10">
          <div>
            <TfiCalendar className="text-6xl text-white mx-auto"></TfiCalendar>
            <h2 className="text-3xl font-bold text-white text-center my-4">
              Learn on schedule
            </h2>
            <p className="text-white text-center">
              It is a long established fact that a<br /> reader will be
              distracted by the
              <br /> read when looking at its layout
            </p>
          </div>
          <div>
            <FiBookOpen className="text-6xl text-white mx-auto"></FiBookOpen>
            <h2 className="text-3xl font-bold text-white text-center my-4">
              Find any topic
            </h2>
            <p className="text-white text-center">
              Prepare for in-demand industry
              <br /> certifications with courses, virtual
              <br /> labs, and practice tests.
            </p>
          </div>
          <div>
            <TfiBag className="text-6xl text-white mx-auto"></TfiBag>
            <h2 className="text-3xl font-bold text-white text-center my-4">
              Learn from experts
            </h2>
            <p className="text-white text-center">
              Get the hands-on experience
              <br /> businesses are looking for with
              <br /> hundreds of virtual labs
            </p>
          </div>
        </div>
      </div>
      <div className="  bg-[url(https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/cta-video-bg.png)] absolute lg:left-40 lg:flex items-center justify-between gap-5 lg:w-3/4 w-full">
        <div className="lg:ml-16 ml-10 text-left md:text-center">
          <h2 className="text-3xl font-bold text-white">Learn From Anywhere</h2>
          <p className="text-white">
            Your privacy stays yours. We don’t sell your data or
            <br /> target you with ads
          </p>
        </div>
        <div>
          <img
            className="resultImg lg:w-[350px] w-full lg:rounded-s-full lg:mt-0 mt-16 opacity-80"
            src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/video-cta-image-1.jpg"
          ></img>
          <a href="https://www.youtube.com/embed/DAc-ENm32VU"><BsPlayCircleFill className="text-6xl absolute top-24 right-32 rounded-full text-black hover:text-[#1039C5] transition-all duration-300 cursor-pointer">
          </BsPlayCircleFill></a>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
