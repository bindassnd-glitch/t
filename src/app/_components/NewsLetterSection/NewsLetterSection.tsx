import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import NewsLetterSVG from '../../../../public/images/subscribe-to-newsletter.svg';


const NewsLetterSection = () => {
    return (
        <section className='flex flex-col items-center justify-center gap-10 text-white bg-[#FF7A3D] relative'>

            {/* Upper Section */}
            <div className='py-15 px-5 w-full h-full flex flex-col sm:flex-row items-center justify-center gap-15 relative overflow-hidden'>
                <div className='flex items-center gap-4 mb-2 relative z-10'>
                    <span className='bg-[#FF5100] rounded-full flex items-center justify-center p-5'>
                        <FaEnvelopeOpenText size={32} />
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h4 className='font-bold text-2xl'>
                            Subscribe To Our Newsletter
                        </h4>
                        <p className='text-sm'>
                            Stay in touch with us to get the latest news and special offers.
                        </p>
                    </div>
                </div>
                <form action="" className='w-full max-w-md flex flex-col sm:flex-row gap-5 sm:gap-2 mt-2 relative z-10'>
                    <input type="email" placeholder='Your email address' className='w-full bg-white rounded px-3 py-2 text-black border-none outline-none' />
                    <Button type='submit' className='bg-[#FF7A3D] border border-white hover:bg-white px-12 py-7 rounded-lg text-white hover:text-black font-semibold'>
                        Subscribe
                    </Button>
                </form>
                <div className='opacity-50 absolute -top-15 right-30 z-0'>
                    <Image src={NewsLetterSVG} alt='NewsLetter' width={300} height={300} />
                </div>
            </div>

            {/* Lower Section */}
            <div className='py-10 md:px-5 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-10 sm:gap-x-10 relative z-10 divide-y-0 sm:divide-y-0 sm:divide-x sm:divide-white'>
                <div className='flex items-center gap-4 px-6'>
                    <span className='bg-[#FF5100] rounded-full flex items-center justify-center p-2'>
                        <FaLocationDot size={20} />
                    </span>
                    <div>
                        <h4 className='font-bold text-2xl'>Address</h4>
                        <p className='text-sm text-wrap'>42P, Sonepat Rd, Sector 15, Sonipat, Haryana 131001</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 px-6 '>
                    <span className='bg-[#FF5100] rounded-full flex items-center justify-center p-2'>
                        <FaPhone size={20} />
                    </span>
                    <div>
                        <h4 className='font-bold text-2xl'>Call Us</h4>
                        <p className='text-sm'>+91-9034799154</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 px-6'>
                    <span className='bg-[#FF5100] rounded-full flex items-center justify-center p-2'>
                        <MdEmail size={20} />
                    </span>
                    <div>
                        <h4 className='font-bold text-2xl'>Email Us</h4>
                        <a className='text-sm' href='mailto:nesthospitalsonipat@gmail.com'>nesthospitalsonipat@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetterSection;
