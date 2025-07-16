import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MdEmail } from "react-icons/md";
import { FaArrowAltCircleDown, FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import ContactForm from './_components/ContactForm';
import ConnectWhatsApp from '../_components/ConnectWhatsApp/ConnectWhatsApp';
import contactFormImage from '../../../public/images/contactFormImage.jpg';


const Contact = () => {
  return (
    <main>

      {/* Contact Form Section */}
      <section className='bg-[#F8F5F4] pt-55 px-5 flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-col items-start justify-center gap-10 sm:gap-25'>

          {/* Just Dial Heading */}
          <div>
            <h1 className='text-[27px] sm:text-5xl font-bold text-center'>
              Don&apos;t Suffer. Just Dial <span className='text-[#FF7A3D]'>9034799154</span>
            </h1>
          </div>

          <div className='bg-white rounded-xl py-3 sm:pt-12 sm:pl-12 max-w-6xl w-full flex flex-col lg:flex-row items-start gap-10'>
            <section className='h-full max-sm:p-9'>
              <div className='flex flex-col gap-10 mb-10'>
                <h1 className='text-3xl sm:text-5xl font-bold'>
                  Send Us Message
                </h1>
                <p className='text-[#FF7A3D] font-semibold text-justify'>
                  We&apos;re here to help! Contact Nest Hospital for any questions, appointment bookings, or inquiries. We look forward to assisting you.
                </p>
              </div>
              <div>
                <ContactForm />
              </div>
            </section>
            <section className='w-full sm:w-1/2 h-full flex flex-col items-start gap-10'>
              <div className='w-full flex flex-col sm:flex-row items-start sm:items-center justify-evenly px-5 gap-8 md:gap-20'>
                <div className='flex flex-col items-start'>
                  <span className='p-2 w-10 h-10 flex items-center justify-center bg-[#FF7A3D] text-white rounded-full'>
                    <FaPhone size={20} />
                  </span>
                  <p className='text-xl sm:text-2xl font-bold text-nowrap'>
                    Call Us
                  </p>
                  <span className='text-[#FF7A3D] font-semibold text-sm'>
                    9034799154
                  </span>
                </div>
                <div>
                  <span className='p-2 w-10 h-10 flex items-center justify-center bg-[#FF7A3D] text-white rounded-full'>
                    <MdEmail size={20} />
                  </span>
                  <p className='text-xl sm:text-2xl font-bold'>
                    Email Us
                  </p>
                  <span className='text-[#FF7A3D] font-semibold text-sm'>
                    nesthospitalsonepat@gmail.com
                  </span>
                </div>
              </div>
              <div className='w-full h-full flex flex-col items-start'>
                <div className='w-full flex flex-col items-start gap-6 bg-[#FF7A3D] p-10'>
                  <span className='p-2 w-10 h-10 flex items-center justify-center bg-white text-[#FF7A3D] rounded-full'>
                    <IoLocationSharp size={25} />
                  </span>
                  <h4 className='text-md sm:text-xl font-bold'>
                    <span className='text-2xl font-bold text-white'>
                      Our Location
                    </span>
                    <br />
                    42P, Sonepat Rd, Sector 15, Sonipat, Haryana 131001
                  </h4>
                  <a href='https://maps.app.goo.gl/yaNjJDhXsfhNnWWg7' target='_blank' rel="noopener noreferrer">
                    <Button className='bg-[#FF7A3D] max-sm:w-full px-10 py-5 border hover:bg-white text-white hover:text-black cursor-pointer'>
                      Get Direction<FaArrowAltCircleDown size={20} />
                    </Button>
                  </a>
                </div>
                <div className='w-full hidden sm:flex'>
                  <Image src={contactFormImage} alt="TRA Image" className='w-full h-full object-cover' loading="lazy" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Connect to WhatApp Section */}
      <ConnectWhatsApp backgroundColor='#F8F5F4' textColor='black' />

      {/* Google Map Section */}
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.4270349984017!2d77.03148747497067!3d29.0043449671002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db042854912f1%3A0xecc5ba35eeb3b7e6!2sNest%20hospital!5e0!3m2!1sen!2sin!4v1751884575810!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main>
  )
}

export default Contact;
