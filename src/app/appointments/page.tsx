import Image from 'next/image';
import ConnectWhatsApp from '../_components/ConnectWhatsApp/ConnectWhatsApp';
import QRCodeImage from '../../../public/images/QRCodeImage.jpg';
import BookingForm from './_components/BookingFormWrapper';

const Appointments = () => {
  return (
    <main>

      {/* Appointment Section */}
      <section className='bg-[#F8F5F4] pt-55 px-5 flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-col items-start justify-center gap-10 sm:gap-25'>

          {/* Heading */}
          <div>
            <h1 className='text-[27px] sm:text-5xl font-bold text-center'>
              Book Your <span className='text-[#FF7A3D]'>Appointment</span> Today
            </h1>
          </div>

          {/* Appointment Form and Info */}
          <div className='bg-white rounded-xl py-3 sm:p-12 max-w-6xl w-full flex flex-col lg:flex-row items-start gap-10'>
            <section className='h-full max-sm:p-9'>
              <div className='flex flex-col gap-10 mb-10'>
                <h1 className='text-3xl sm:text-5xl font-bold'>
                  Schedule a Visit
                </h1>
                <p className='text-[#FF7A3D] font-semibold text-justify'>
                  Fill in your details below to request an appointment at Nest Hospital. Our team will get back to you shortly to confirm your booking.
                </p>
              </div>
              <div>
                <BookingForm /> {/* Replace with AppointmentForm if needed */}
              </div>
            </section>

            {/* Location and Image */}
            <section className='w-full sm:w-1/2 h-full flex flex-col items-start gap-10'>
              <div className='w-full h-full flex flex-col items-start'>
                {/* <div className='w-full flex flex-col items-start gap-6 bg-[#FF7A3D] p-10'>
                  <span className='p-2 w-10 h-10 flex items-center justify-center bg-white text-[#FF7A3D] rounded-full'>
                    <IoLocationSharp size={25} />
                  </span>
                  <h4 className='text-md sm:text-xl font-bold'>
                    <span className='text-2xl font-bold text-white'>
                      Visit Us
                    </span>
                    <br />
                    42P, Sonepat Rd, Sector 15, Sonipat, Haryana 131001
                  </h4>
                  <Button className='bg-[#FF7A3D] max-sm:w-full px-10 py-5 border hover:bg-white text-white hover:text-black cursor-pointer'>
                    Get Direction <FaArrowAltCircleDown size={20} />
                  </Button>
                </div> */}
                <div className='w-full hidden sm:flex'>
                  <Image src={QRCodeImage} alt="Appointment" className='w-full h-full object-cover' loading="lazy" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <ConnectWhatsApp backgroundColor='#F8F5F4' textColor='black' />

      {/* Google Map Section */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.4270349984017!2d77.03148747497067!3d29.0043449671002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db042854912f1%3A0xecc5ba35eeb3b7e6!2sNest%20hospital!5e0!3m2!1sen!2sin!4v1751884575810!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  )
}

export default Appointments;
