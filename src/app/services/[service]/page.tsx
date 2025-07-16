import Image from 'next/image';
import { FaCircleDot } from "react-icons/fa6";
import { gynecologicServices, pediatricServices } from '@/constants';
import pediatrisicImage from '../../../../public/images/services-pediatrisicImage.webp';
import gynaecologicalImage from '../../../../public/images/services-gynocologicImage.webp';

interface ServicePageProps {
    params: Promise<{
        service: string;
    }>;
}

const serviceDataMap = {
    pediatrics: {
        title: 'Pediatrics Services',
        description: `
Nest Hospital offers exceptional pediatric services, providing comprehensive care for infants, children, and adolescents.
With a team of dedicated pediatricians and advanced facilities, the hospital ensures the well-being and development of young patients in a nurturing environment.
From routine check-ups to specialized treatments, Nest Hospital prioritizes the health and happiness of every child under their care.
    `,
        services: pediatricServices,
        image: pediatrisicImage
    },
    gynecology: {
        title: 'Gynaecological Services',
        description: `
Nest Hospital provides comprehensive gynecological services, including prenatal care, fertility support, and minimally invasive procedures.
Our experienced team of gynecologists is committed to women's health and ensures compassionate care in a safe and supportive environment.
    `,
        services: gynecologicServices,
        image: gynaecologicalImage
    }
};

const SingleServicePage = async ({ params }: ServicePageProps) => {
    const { service } = await params;

    if (!['pediatrics', 'gynecology'].includes(service)) {
        return (
            <div className="text-center p-10">
                <h1 className="text-3xl font-bold">Service Not Found</h1>
                <p className="text-gray-500 mt-2">Please check the service URL.</p>
            </div>
        );
    }

    const serviceData = serviceDataMap[service as 'pediatrics' | 'gynecology'];

    return (
        <main className="bg-white px-5 flex items-center justify-center">
            <div className='w-full flex flex-col sm:flex-row items-start gap-10 relative'>

                {/* Left Section */}
                <div className="w-full flex flex-col items-center justify-center flex-2 gap-10 max-w-4xl mx-auto">

                    {/* Image */}
                    <div className="rounded-xl w-full max-h-120 overflow-hidden">
                        <Image
                            src={serviceData.image}
                            alt={`${serviceData.title} Image`}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Header */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-center">
                        {serviceData.title}
                    </h1>

                    {/* Description */}
                    <p className="text-gray-700 text-base leading-7 text-justify whitespace-pre-line">
                        {serviceData.description}
                    </p>

                    {/* Services List */}
                    <div className="columns-1 sm:columns-2 w-full">
                        {serviceData.services.map((item) => (
                            <div
                                key={typeof item === 'string' ? item : item.service}
                                className="break-inside-avoid flex items-center gap-3 text-gray-700 mb-4"
                            >
                                <FaCircleDot className="text-orange-500" />
                                <p>{typeof item === 'string' ? item : item.service}</p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Right Section */}
                {/* <div className='fixed top-0 right-0 sm:w-[350px] h-screen p-5 hidden sm:flex items-center justify-center rounded-xl bg-gray-500 z-50'>
                    <h1 className='sm:text-3xl md:text-5xl text-center text-white'>We also provide</h1>
                </div> */}
            </div>
        </main>
    );
};

export default SingleServicePage;
