import Image from "next/image";
import Accreditation1 from '../../../../public/images/Accreditation-1.png';
import Accreditation2 from '../../../../public/images/Accreditation-2.png';
import Accreditation3 from '../../../../public/images/Accreditation-3.png';


const AccreditationSection = () => {
  return (
    <section className='max-sm:px-5 py-4 flex flex-col sm:flex-row items-center justify-start gap-8 bg-[#F8F5F4]'>
      <div className="max-w-7xl w-full flex flex-col sm:flex-row items-center justify-center gap-8 px-8">
        <div className='max-sm:w-full flex items-center gap-5'>
          <p className='text-2xl sm:text-2xl text-gray-600 text-nowrap'>
            Our Accreditations
          </p>
          <div className='max-sm:w-full sm:w-13 h-[1.3px] bg-[#FF7A3D]'></div>
        </div>
        <div className='flex flex-col sm:flex-row flex-wrap gap-15'>
          <div>
            <Image
              src={Accreditation1}
              alt="Social-Security"
              width={150}
              height={150}
              loading="lazy"
              className="object-contain"
              style={{
                width: 'clamp(120px, 10vw, 150px)',
                height: 'auto'
              }}
            />
          </div>
          <div>
            <Image
              src={Accreditation2}
              alt="Ayushman-Bharat"
              width={150}
              height={150}
              loading="lazy"
              className="object-contain"
              style={{
                width: 'clamp(120px, 10vw, 150px)',
                height: 'auto'
              }}
            />
          </div>
          <div>
            <Image
              src={Accreditation3}
              alt="Nabh-logo"
              width={150}
              height={150}
              loading="lazy"
              className="object-contain"
              style={{
                width: 'clamp(120px, 10vw, 150px)',
                height: 'auto'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccreditationSection;
