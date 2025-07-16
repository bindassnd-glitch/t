import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaDotCircle, FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa";
import checkUpDoctorImage from '../../../../public/images/Make-an-appointment.jpeg';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const ServicesAndAppointmentsGrid = () => {
    return (
        <section className='w-full px-4 py-8 flex items-center justify-center bg-[#FDEFE5]'>
            <div className='w-full max-w-[1140px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto max-sm:gap-6'>

                {/* Image Div */}
                <div className='relative md:col-span-2 md:row-span-2'>
                    <Image
                        src={checkUpDoctorImage}
                        alt="Check Up Doctor"
                        className="hidden md:block w-full h-full object-cover rounded-md"
                        loading='lazy'
                    />

                    {/* Our Main Service DIV */}
                    <div className='md:absolute bottom-0 right-0 bg-[#FF5100] py-8 px-6 text-white w-full md:w-[300px] max-sm:rounded-tl-md'>
                        <div className='flex flex-col gap-3'>
                            <h3 className='text-xl md:text-2xl font-bold'>Our Main Service</h3>
                            <ul className='flex flex-col gap-2 text-sm'>
                                <li className='flex items-center gap-2'><FaDotCircle size={13} />Pediatrics</li>
                                <li className='flex items-center gap-2'><FaDotCircle size={13} />Gynecology</li>
                                <li className='flex items-center gap-2'><FaDotCircle size={13} />Neonatalogy</li>
                                <li className='flex items-center gap-2'><FaDotCircle size={13} />Critical Care</li>
                                <li className='flex items-center gap-2'><FaDotCircle size={13} />IVF</li>
                            </ul>
                        </div>
                        <Link href={"/appointments"}>
                            <p className='flex items-center gap-2 text-white mt-4 text-sm font-semibold'>
                                Learn More <FaLongArrowAltRight />
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Our Facilities Div */}
                <div className='bg-white p-6 flex flex-col gap-4 max-sm:rounded-md'>
                    <h3 className='text-xl md:text-2xl font-bold'>Our Facilities</h3>
                    <ul className='flex flex-col gap-2 text-sm'>
                        <li className='flex items-center gap-2 text-gray-700'><FaDotCircle size={13} />In-House Labs</li>
                        <li className='flex items-center gap-2 text-gray-700'><FaDotCircle size={13} />NICU</li>
                        <li className='flex items-center gap-2 text-gray-700'><FaDotCircle size={13} />PICU</li>
                        <li className='flex items-center gap-2 text-gray-700'><FaDotCircle size={13} />In-House Pharmacy</li>
                        <li className='flex items-center gap-2 text-gray-700'><FaDotCircle size={13} />State-of-Art IVF Facilities</li>
                    </ul>
                    <Link href={"/#"}>
                        <p className='flex items-center gap-2 text-[#FF5100] text-sm mt-3'>Learn More <FaLongArrowAltRight /></p>
                    </Link>
                </div>

                {/* Our Location Div */}
                <div className='bg-[#FF5100] text-white p-6 flex flex-col justify-between gap-4 max-sm:rounded-md'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-xl md:text-2xl font-bold'>Our Location</h3>
                        <p className='text-sm leading-relaxed'>
                            42P, Sonepat Rd, Sector 15,<br />
                            Sonipat, Haryana 131001
                        </p>
                    </div>
                    <p className='flex items-center gap-2 text-sm mt-4'>
                        Get Directions <FaLongArrowAltRight />
                    </p>
                </div>

                {/* Make An Appointment Div */}
                <div className='md:col-span-2 bg-[#FF7A3D] text-white p-6 flex flex-col gap-6 max-sm:rounded-md'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-xl md:text-2xl font-bold'>Make An Appointment</h3>
                        <p className='text-sm leading-relaxed'>
                            Expert pediatric and gynecology care at Nest Hospital.
                            Schedule your appointment for compassionate and personalized treatment.
                            Trust our experienced team for comprehensive healthcare services. Call now!
                        </p>
                    </div>

                    <div className='w-full flex flex-col sm:flex-row items-center gap-6'>
                        <Link href={"tel:9034799154"} className='max-sm:w-full'>
                            <Button className='max-sm:w-full sm:px-6 sm:py-3 border border-white hover:bg-white bg-[#FF7A3D] text-white hover:text-black text-sm cursor-pointer'>
                                Call Now
                            </Button>
                        </Link>
                        <Separator orientation='vertical' className='hidden sm:block w-[1px] h-10 bg-white' />
                        <div className='flex flex-col sm:flex-row items-center gap-4'>
                            <span className='p-4 bg-[#FF5100] rounded-full'>
                                <FaPhoneAlt size={24} />
                            </span>
                            <p className='text-sm font-bold'>
                                Book an appointment<br />
                                <span className='text-xl font-bold'>+91-9034799154</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ServicesAndAppointmentsGrid;
