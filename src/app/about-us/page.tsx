import Image from "next/image";
import { accordionQuestions } from "@/constants";
import { FaHospitalAlt, FaMicroscope, FaTrophy, FaUserNinja } from "react-icons/fa";
import NewsLetterSection from "../_components/NewsLetterSection/NewsLetterSection";
import TRAImage from "../../../public/images/TPA-Image.png";
import { FaUserDoctor } from "react-icons/fa6";
import AccreditationSection from "../_components/AccreditationSection/AccreditationSection";
import DoctorCardSection from "../_components/DoctorCardSection/DoctorCardSection";
import AccordionComponent from "./_components/AccordionComponent/AccordionComponent";


const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="max-h-full pt-40 max-sm:px-5 bg-[#F8F5F4] flex items-center justify-center gap-8">
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-center gap-10 ">
          {/* Left Side Text */}
          <div className="max-w-6xl flex flex-col gap-40">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl sm:text-7xl sm:leading-25 font-extrabold text-start">
                Your Health<br />Your Nest
              </h1>
              <p className="text-sm leading-7 text-start max-w-md text-gray-700">
                Since 2011, Nest Hospital has established itself as a trusted name
                in the field of child and women&apos;s health.
              </p>
            </div>
            <div className="flex flex-col gap-20 items-center">
              <div className="flex flex-col gap-5 mx-auto max-w-md">
                <h4 className="text-xl sm:text-2xl font-bold text-start text-wrap">
                  Empowering Patient-Centric Care at Nest Hospital
                </h4>
                <p className="text-sm text-justify leading-7 max-w-md text-gray-700">
                  At Nest Hospital, we understand the unique needs of children and women,
                  and our team of highly skilled medical professionals is dedicated to providing
                  the highest quality care to our patients. Our state-of-the-art facility
                  is equipped with advanced medical technology and designed to create a warm
                  and comfortable environment for patients of all ages.
                </p>
              </div>
              <div className="w-full flex items-center justify-start gap-15">
                <div className="flex items-center gap-3">
                  <span>
                    <FaTrophy size={38} color="#FF5100" />
                  </span>
                  <p className="text-3xl flex flex-col items-start justify-start">
                      80000
                    <span className="text-sm text-gray-700">
                      Happy Patients
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span>
                    <FaUserDoctor size={38} color="#FF5100" />
                  </span>
                  <p className="text-3xl flex flex-col items-start justify-start">
                      36
                    <span className="text-sm text-gray-700">
                      Expert Staff
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="max-w-[600] max-sm:w-full sm:w-screen flex-1 sm:mt-50 rounded-xl overflow-hidden shadow-lg">
            <Image src={TRAImage} alt="TRA Image" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-h-full py-20 sm:py-40 px-5 bg-[#F8F5F4] flex flex-col items-center justify-center gap-15">
        <div className="max-w-6xl flex flex-col gap-2 sm:gap-8">
          <h1 className="text-3xl sm:text-5xl leading-20 font-bold text-start sm:mx-auto">
            Why Choose Us
          </h1>
          <p className="text-sm text-justify sm:text-center max-w-lg mx-auto leading-7 sm:leading-8 text-gray-700">
            Choose Nest Hospital for expertise, personalized care, advanced facilities, and a commitment to your overall well-being.
            Experience healthcare excellence that puts you and your loved ones first.
          </p>
        </div>
        <div className="max-w-6xl flex flex-col sm:flex-row items-center gap-5">
          <div className="h-full flex flex-col items-start justify-evenly gap-5">
            <span className="p-4 w-15 h-15 flex items-center justify-center rounded-full bg-[#FF5100] text-white">
              <FaMicroscope size={30} />
            </span>
            <h2 className="text-2xl font-bold">Holistic Care And Support</h2>
            <p className="text-sm text-gray-700 leading-7">
              Our dedicated support staff, child life services, and counseling resources
              ensure that you and your family feel supported throughout your healthcare journey.
            </p>
          </div>
          <div className="h-full flex flex-col items-start justify-start gap-5">
            <span className="p-4 w-15 h-15 flex items-center justify-center rounded-full bg-[#FF5100] text-white">
              <FaUserDoctor size={30} />
            </span>
            <h2 className="text-2xl font-bold">Expertise And Excellence</h2>
            <p className="text-sm text-gray-700 leading-7">
              At Nest Hospital, we boast a team of highly skilled and experienced healthcare professionals
              who are dedicated to delivering excellence in pediatric and gynecology care.
            </p>
          </div>
          <div className="h-full flex flex-col items-start justify-start gap-5">
            <span className="p-4 w-15 h-15 flex items-center justify-center rounded-full bg-[#FF5100] text-white">
              <FaHospitalAlt size={30} />
            </span>
            <h2 className="text-2xl font-bold">State-of-the-Art Facilities</h2>
            <p className="text-sm text-gray-700 leading-7">
              From well-equipped examination rooms to specialized units like NICU and PICU, our
              infrastructure supports the delivery of high-quality healthcare services.
            </p>
          </div>
          <div className="h-full flex flex-col items-start justify-start gap-5">
            <span className="p-4 w-15 h-15 flex items-center justify-center rounded-full bg-[#FF5100] text-white">
              <FaUserNinja size={30} />
            </span>
            <h2 className="text-2xl font-bold">Patient-Centered Approach</h2>
            <p className="text-sm text-gray-700 leading-7">
              Our patient-centered approach means that we listen to your concerns, involve you
              in decision-making, and tailor treatment plans to your individual circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <AccreditationSection />

      {/* Doctors Card Section */}
      <DoctorCardSection />

      {/* FAQ Section  */}
      <section className="py-4 flex flex-col items-center gap-8">
        <div>
          <h1 className="text-2xl font-bold">FAQ&apos;s at Nest Hospital</h1>
        </div>
        <div>
          {/* Simple Accordion Group for FAQs */}
          <AccordionComponent items={accordionQuestions} />
        </div>
      </section>
      {/* Subscribe to NewsLetter Section */}
      <NewsLetterSection />
    </main>
  )
}

export default About;
