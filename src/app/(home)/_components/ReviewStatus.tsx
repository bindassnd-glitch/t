import { FaStar, FaGooglePlusG, FaYelp, FaFacebookF } from "react-icons/fa";


const ReviewStats = () => {
  return (
    <section className="flex justify-center items-center py-10 px-5 bg-[#FDEFE5]">
      <div className="flex flex-col md:flex-row shadow-lg bg-white max-w-6xl w-full">
        {/* Overall Score */}
        <div className="bg-[#FF6A1F] text-white rounded-tl-xl rounded-tr-xl rounded-br-xl p-6 md:p-10 flex flex-col justify-center items-center w-full md:w-1/4">
          <h2 className="text-5xl font-bold">4.7</h2>
          <p className="text-sm">of 5</p>
          <div className="flex gap-1 text-white mt-2">
            {
              Array(4).fill(0).map((_, i) => (
                  <FaStar key={i} />
                ))
            }
            <FaStar className="opacity-70" /> {/* Half Star Simulation */}
          </div>
        </div>

        {/* Platform Ratings */}
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-y-6 gap-x-10 p-6 md:p-10 w-full md:w-3/4">
          {/* Google */}
          <div className="flex items-center gap-3">
            <FaGooglePlusG size={60} className="text-[#FF6A1F]" />
            <div className="sm:text-2xl">
              <p className="font-bold text-black">4.0/5</p>
              <p className="text-sm text-gray-600">95 Reviews</p>
            </div>
          </div>

          {/* Yelp */}
          <div className="flex items-center gap-3">
            <FaYelp size={60} className="text-[#FF6A1F]" />
            <div className="sm:text-2xl">
              <p className="font-bold text-black">5/5</p>
              <p className="text-sm text-gray-600">55 Reviews</p>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-3">
            <div className="bg-[#FF6A1F] p-1.5 rounded">
              <FaFacebookF size={40} className="text-white" />
            </div>
            <div className="sm:text-2xl">
              <p className="font-bold text-black">5/5</p>
              <p className="text-sm text-gray-600">10 Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewStats;
