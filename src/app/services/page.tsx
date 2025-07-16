import Image from 'next/image';
// import Link from 'next/link';
import { gynecologicServices, pediatricServices } from '@/constants';
import { FaCircleDot } from "react-icons/fa6";
import NewsLetterSection from '../_components/NewsLetterSection/NewsLetterSection';
import ServicesBackgroundImage from '../../../public/images/services-backgroundImage.webp';
import pediatrisicImage from '../../../public/images/services-pediatrisicImage.webp';
import gynaecologicalImage from '../../../public/images/services-gynocologicImage.webp';


const Services = () => {
  return (
    <main>
      {/* Our Services Section */}
      <section className="relative w-full py-10 px-5 bg-gradient-to-b from-white to-orange-400 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src={ServicesBackgroundImage}
            alt="Services Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative py-30 z-10">
          <h1 className="text-5xl font-bold text-center text-black">Our Services</h1>
        </div>
      </section>

      {/* Pediatrics Services Section */}
      <section className="bg-white py-16 px-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-y-10 max-w-6xl mx-auto">
          {/* Left: Text and Services List */}
          <div className="flex flex-col basis-1/2 gap-10 order-2 sm:order-1">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-bold">Pediatrics Services</h1>
              <p className="leading-7 text-gray-700">
                Nest Hospital offers exceptional pediatric services, providing comprehensive care for infants, children, and adolescents.
                With a team of dedicated pediatricians and advanced facilities, the hospital ensures the well-being and development of young patients in a nurturing environment.
                From routine check-ups to specialized treatments, Nest Hospital prioritizes the health and happiness of every child under their care.
              </p>
            </div>

            <div className="columns-1 sm:columns-2">
              {pediatricServices.map((service) => (
                // <Link key={service.service} href={service.url ?? ""} className='mb-10'>
                  <div key={service.service} className={`${service.url ? "text-orange-400" : "text-gray-700"} break-inside-avoid flex items-center gap-3`}>
                    <span>
                      <FaCircleDot />
                    </span>
                    <p>{service.service}</p>
                  </div>
                // </Link>
              ))}
            </div>

          </div>

          {/* Right: Image */}
          <div className="basis-1/2 flex justify-center order-1 sm:order-2">
            <div className="rounded-xl shadow-2xl max-w-[370px]">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={pediatrisicImage}
                  alt="Baby Image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Gynaecological Services */}
      <section className="bg-[#F8F5F4] py-16 px-5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-center gap-y-10 max-w-6xl mx-auto">

          {/* Left: Image */}
          <div className="basis-1/2 flex justify-center">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl max-w-[370px]">
                <Image
                  src={gynaecologicalImage}
                  alt="Baby Image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
            </div>
          </div>

          {/* Right: Text and Services List */}
          <div className="flex flex-col basis-1/2 gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-bold">Gynaecological Services</h1>
              <p className="leading-7 text-gray-700">
                Nest Hospital offers exceptional pediatric services, providing comprehensive care for infants, children, and adolescents.
                With a team of dedicated pediatricians and advanced facilities, the hospital ensures the well-being and development of young patients in a nurturing environment.
                From routine check-ups to specialized treatments, Nest Hospital prioritizes the health and happiness of every child under their care.
              </p>
            </div>

            <div className="columns-1 sm:columns-2">
              {gynecologicServices.map((service) => (
                  <div key={service} className={`text-gray-700 break-inside-avoid flex items-center gap-3 mb-5`}>
                    <span>
                      <FaCircleDot />
                    </span>
                    <p>{service}</p>
                  </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Subscribe to NewsLetter Section */}
      <NewsLetterSection />
    </main>
  );
};

export default Services;
