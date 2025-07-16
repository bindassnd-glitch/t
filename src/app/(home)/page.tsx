import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants';
import AccreditationSection from '../_components/AccreditationSection/AccreditationSection';
import DoctorCardSection from '../_components/DoctorCardSection/DoctorCardSection';
import NewsLetterSection from '../_components/NewsLetterSection/NewsLetterSection';
import ServicesAndAppointmentsGrid from './_components/ServicesAndAppointmentsGrid';
import Testimonials from './_components/Testimonials';
import ReviewStats from './_components/ReviewStatus';
import ExceptionalCare from './_components/ExceptionalCare';
import ConnectWhatsApp from '../_components/ConnectWhatsApp/ConnectWhatsApp';
import CallToAction from './_components/CallToAction';
import SSBaby from '../../../public/images/SSBaby.png';
import heroRightSideImage from '../../../public/images/hero-section-image-right-side.png';


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full min-h-screen pt-38 pb-20 sm:px-15 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: colors.HeroSectionBackgroundColor }}
      >
        <div className="relative container p-5 sm:mx-20">
          {/* Background Image Layer (fixed size & centered) */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 z-0 mix-blend-darken"
            style={{
              backgroundImage: `url(${SSBaby.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              width: '800px',
              height: '800px',
            }}
          />

          {/* Foreground Content */}
          <div className="relative z-10 grid lg:grid-cols-2 items-center gap-y-5">
            {/* Left: Content */}
            <div className="flex flex-col gap-15 lg:text-left">
              <div className="flex flex-col items-start gap-8 mb-5">
                <p className="text-[#FF5100] font-poppins font-semibold text-sm">
                  Welcome To Nest Hospital
                </p>
                <h1 className="max-sm:text-4xl text-5xl font-bold text-gray-900 leading-tight">
                  Little Miracles:
                  Empowering Pediatric & Gynecology Health
                </h1>
              </div>

              <p className="text-sm text-gray-700 leading-8 max-w-2xl text-justify mx-auto lg:mx-0">
                A leading institution specializing in pediatric and gynecology healthcare services.
                With a strong commitment to providing comprehensive and compassionate care,
                Nest Hospital has established itself as a trusted name in the field of child and
                women&apos;s health.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/appointments">
                  <Button className="w-full bg-[#FF7A3D] text-white px-8 py-6 text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                    Make An Appointment
                  </Button>
                </Link>
                <Link href="/about-us">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-transparent border border-[#FF7A3D] text-[#FF7A3D] hover:text-[#FF7A3D] px-8 py-5.5 text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-end">
              <Image
                src={heroRightSideImage}
                alt="hospital image"
                className="w-full max-w-[475px] h-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>


      </section>



      {/* Accreditations */}
      <AccreditationSection />

      {/* Doctors Card Section */}
      <DoctorCardSection />

      {/* Facilities Grid Section */}
      <ServicesAndAppointmentsGrid />

      {/* Exceptional Care Section*/}
      <ExceptionalCare />

      {/* Review Status Section */}
      <ReviewStats />

      {/* Connect WhatsApp Section*/}
      <section className='sm:my-15'>
        <ConnectWhatsApp backgroundColor='black' textColor='white' />
      </section>

      {/* Testimonial Section*/}
      <Testimonials />

      {/* Call To Action Section */}
      <CallToAction />

      {/* Subscribe to NewsLetter Section */}
      <NewsLetterSection />
    </>
  );
};

export default Home;
