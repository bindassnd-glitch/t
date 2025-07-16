import { doctorsInfo } from '@/constants';
import { DoctorsInfo } from '@/types/types';
import DoctorCard from './_components/DoctorCard';


const DoctorCardSection = () => {
  return (
    <section className='w-full px-4 py-5 pb-20 flex flex-col items-center'>
      <div className='max-w-3xl my-15 flex flex-col items-center gap-7'>
        <h1 className='text-2xl sm:text-5xl font-bold text-center'>
          Meet Our Saviours
        </h1>
        <p className='text-gray-700 leading-7 sm:leading-8 text-[12px] sm:text-sm text-center'>
          Step into the realm of expertise and compassion as you meet our extraordinary team of doctors at Nest Hospital.
          Each one is a guiding light, dedicated to illuminating your path to wellness. Get acquainted with the healers
          who will walk by your side and witness their unwavering commitment to your health.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          doctorsInfo.map((doctor: DoctorsInfo, index) => (
            <DoctorCard key={index} {...doctor} />
          ))
        }
      </div>
    </section>
  )
}

export default DoctorCardSection;
