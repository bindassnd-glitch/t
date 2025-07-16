import { Testimonial } from '@/types/types';
import { FaStar, FaFacebook, FaGoogle, FaGooglePlusG, FaInstagram } from 'react-icons/fa';


const testimonials: Testimonial[] = [
  {
    name: 'KANISHKA KAPOOR',
    role: 'Patient',
    content: `Best Gynecologist in Sonipat, Dr. Poonam Saroha. She understand the problem explain the problem thoroughly included with all the details of treatment with the explanation why the particular medicine. We visited the Nest Hospital was recommended by someone in family and it proven to be excellent recommendation.`,
    icon: <FaGoogle size={24} className="text-gray-300" />,
  },
  {
    name: 'TANYA ARORA',
    role: 'Patient',
    content: `Our baby was born 3 months premature at 820 grams. Dr. Saroha is such a dedicated and kind. We had lost hope of his survival but thank you so much for showing such kindness and strength throughout these rough times.`,
    icon: <FaGooglePlusG size={24} className="text-gray-300" />,
  },
  {
    name: 'MOHIT MOHAN',
    role: 'Patient',
    content: `Wonderful maternity care and really great treatment for kids. We got best mother care and best care for our newborn. Wonderful experience at nest hospital. Dr. Sushil Saroha and Dr. Poonam Saroha are really great doctors. We have been coming here since 2016 and I am so glad to choose Nest Hospital that is providing world class facilities and care in Sonipat.`,
    icon: <FaFacebook size={24} className="text-gray-300" />,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f9f5f3] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-25">
        <a href='https://www.instagram.com/nest_hospital' target="_blank" rel="noopener noreferrer">
          <button className="bg-[#0A7F65] text-white text-sm px-4 py-2 flex items-center gap-3 cursor-pointer rounded-md hover:bg-[#00A16D] transition">
            <FaInstagram /> Follow on Instagram
          </button>
        </a>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between min-h-[350px]"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1 text-orange-500">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                {testimonial.icon}
              </div>

              <p className="text-gray-800 leading-relaxed text-sm mb-6">
                {testimonial.content}
              </p>

              <div>
                <p className="font-bold uppercase text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
