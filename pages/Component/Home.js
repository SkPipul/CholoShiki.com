import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { GoPrimitiveDot } from 'react-icons/go';
import Topics from "./Topics";
import ResultSection from "./ResultSection";
import RecentCourses from "./RecentCourses";

const Home = () => {
  return (
    <section>
      {/* banner */}
      <div className="px-5 bg-green-100">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="md:mx-16 sm:mx-10">
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div className="mt-16">
                <h2 className="lg:text-5xl md:text-3xl font-extrabold mb-7">
                  Learn Topics That <br />
                  Matters To You
                </h2>
                <p>
                  Learn Topics That Matters To You Learn from an elite community
                  of instructors, experts, and thought leaders with high-quality
                  content.
                </p>
                <button className="btn bg-gradient-to-r from-green-600 mt-7 border-none">
                  Explore More
                </button>
              </div>
              <img
                className="w-[90%]"
                src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/banner-image-1.png"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div className="mt-16">
                <h2 className="lg:text-5xl md:text-3xl font-extrabold mb-7">
                  Learn Topics That <br />
                  Matters To You
                </h2>
                <p>
                  Learn Topics That Matters To You Learn from an elite community
                  of instructors, experts, and thought leaders with high-quality
                  content.
                </p>
                <button className="btn bg-gradient-to-r from-green-600 mt-7 border-none">
                  Explore More
                </button>
              </div>
              <img
                className="w-[60%]"
                src="https://kitpro.site/tutturu/wp-content/uploads/sites/69/2022/02/Elearning10072005-copy-800x786.png"
              ></img>
            </div>
          </SwiperSlide>
          <div className="flex items-center justify-around border-t-2 border-green-600 my-16">
            <p>   
              <span className="lg:text-3xl text-2xl font-bold flex items-center">
              <GoPrimitiveDot className="text-green-600"></GoPrimitiveDot> 2000+ <br />
              </span>
              Student using <br />
              this App & its free
            </p>
            <p>
              <span className="lg:text-3xl text-2xl font-bold flex items-center">
              <GoPrimitiveDot className="text-green-600"></GoPrimitiveDot> 670+ <br />
              </span>
              Courses Available <br />
              for All Exams
            </p>
            <p>
              <span className="lg:text-3xl text-2xl font-bold flex items-center">
              <GoPrimitiveDot className="text-green-600"></GoPrimitiveDot> 65% <br />
              </span>
              Better Enhanced <br />
              Programs
            </p>
          </div>
        </Swiper>
      </div>
      {/* cards */}
      <Topics/>
      <ResultSection/>
      <RecentCourses/>
    </section>
  );
};

export default Home;
