import Image from 'next/image'
import SSBaby from '../../../../public/images/SSBaby.png';
import DirectorSign from '../../../../public/images/sign.png';


const ExceptionalCare = () => {
    return (
        <section
            className="w-full min-h-screen pt-38 pb-20 sm:px-15 flex items-center justify-center relative overflow-hidden bg-[#FDEFE5]"
        >

            <div className="container p-5 sm:mx-20">
                <div className="grid lg:grid-cols-2 items-center gap-y-5 gap-x-25">

                    {/* Left: Image */}
                    <div className="flex justify-end order-1">
                        <Image src={SSBaby} alt="hospital image" className='w-full max-w-[525px] h-full rounded-xl object-cover mix-blend-darken' loading="lazy" />
                    </div>
                    {/* Right: Content */}
                    <div className="flex flex-col gap-8 text-center lg:text-left order-2">
                        <div className="space-y-8 mb-5">
                            <h1 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-tight">
                                Exceptional Pediatric & Gynecology Care
                            </h1>
                            <p className='text-gray-600 leading-7 text-sm text-justify'>
                                Discover a place where compassionate care meets medical excellence. Nest Hospital is a trusted destination for comprehensive pediatric and gynecology healthcare services.
                                With a dedicated team of experienced professionals, state-of-the-art facilities, and a patient-centered approach, we prioritize the well-being of children and women.
                                From routine check-ups to advanced treatments, our personalized care ensures that you and your family receive the highest quality healthcare. We foster a warm and
                                supportive environment, where open communication and collaboration are at the heart of everything we do. Choose Nest Hospital for exceptional care that nurtures your
                                health and empowers your journey.
                            </p>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <p className='font-semibold'>
                                Experience excellence in pediatric and gynecology healthcare at Nest Hospital.
                            </p>
                            <div className='flex items-center gap-5'>
                                <Image src={DirectorSign} alt='sign' className='w-25 h-15' />
                                <p className='font-bold text-xl'>
                                    Dr. Sushil Saroha<br /><span className='font-light text-sm'>Director Nest Hospital</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ExceptionalCare;
