import { GiSecretBook } from "react-icons/gi";

const RecentCourses = () => {
  return (
    <div className="py-32 bg-[#F9F9F9] px-10">
      <h2 className="lg:mt-32 md:mt-96 mt-64 text-center text-5xl font-extrabold">
        Recent Courses
      </h2>
      <p className="text-center mt-2 text-lg">
        Research shows that hands-on, interactive learning is more effective
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-16">
        <div className="shadow-lg hover:shadow-green-500 transition-all duration-500 rounded-sm">
          <img
            className="rounded-sm"
            src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/course-01.jpg"
          ></img>
          <div className="px-6 py-6">
            <h4 className="text-xl font-bold">
              The Ultimate Drawing Course –
            </h4>
            <h4 className="text-xl font-bold">Beginner</h4>
            <div className="flex items-center gap-3 mt-4 border-b border-gray-400">
              <img
                className="rounded-full mb-8 border-4 border-green-600 hover:border-blue-700"
                src="https://secure.gravatar.com/avatar/041bd66f9cbfd3363f2a3c4b0b36b92d?s=45&d=mm&r=g"
              ></img>
              <p className="mb-8">David Smith</p>
            </div>
                <div className="mt-6 flex items-center gap-5">
                    <h4 className="text-2xl font-bold text-blue-800">$20.00</h4>
                    <div className="ml-16 flex items-center gap-3 tooltip tooltip-bottom" data-tip="Lesson 30">
                        <GiSecretBook className="text-4xl border border-black p-1 rounded-full"></GiSecretBook>
                        <p>30</p>
                    </div>
                </div>
          </div>
        </div>
        <div className="shadow-lg hover:shadow-green-500 transition-all duration-500 rounded-sm">
          <img
            className="rounded-sm"
            src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/course-01.jpg"
          ></img>
          <div className="px-6 py-6">
            <h4 className="text-xl font-bold">
              The Ultimate Drawing Course –
            </h4>
            <h4 className="text-xl font-bold">Beginner</h4>
            <div className="flex items-center gap-3 mt-4 border-b border-gray-400">
              <img
                className="rounded-full mb-8 border-4 border-green-600 hover:border-blue-700"
                src="https://secure.gravatar.com/avatar/041bd66f9cbfd3363f2a3c4b0b36b92d?s=45&d=mm&r=g"
              ></img>
              <p className="mb-8">David Smith</p>
            </div>
                <div className="mt-6 flex items-center gap-5">
                    <h4 className="text-2xl font-bold text-blue-800">$20.00</h4>
                    <div className="ml-16 flex items-center gap-3 tooltip tooltip-bottom" data-tip="Lesson 30">
                        <GiSecretBook className="text-4xl border border-black p-1 rounded-full"></GiSecretBook>
                        <p>30</p>
                    </div>
                </div>
          </div>
        </div>
        <div className="shadow-lg hover:shadow-green-500 transition-all duration-500 rounded-sm">
          <img
            className="rounded-sm"
            src="https://victorthemes.com/themes/rouen/wp-content/uploads/2020/08/course-01.jpg"
          ></img>
          <div className="px-6 py-6">
            <h4 className="text-xl font-bold">
              The Ultimate Drawing Course –
            </h4>
            <h4 className="text-xl font-bold">Beginner</h4>
            <div className="flex items-center gap-3 mt-4 border-b border-gray-400">
              <img
                className="rounded-full mb-8 border-4 border-green-600 hover:border-blue-700"
                src="https://secure.gravatar.com/avatar/041bd66f9cbfd3363f2a3c4b0b36b92d?s=45&d=mm&r=g"
              ></img>
              <p className="mb-8">David Smith</p>
            </div>
                <div className="mt-6 flex items-center gap-5">
                    <h4 className="text-2xl font-bold text-blue-800">$20.00</h4>
                    <div className="ml-16 flex items-center gap-3 tooltip tooltip-bottom" data-tip="Lesson 30">
                        <GiSecretBook className="text-4xl border border-black p-1 rounded-full"></GiSecretBook>
                        <p>30</p>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCourses;
