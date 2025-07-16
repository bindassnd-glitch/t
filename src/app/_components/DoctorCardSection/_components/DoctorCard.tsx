import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { DoctorsInfo } from "@/types/types";
import { Button } from "@/components/ui/button";


type DoctorCardProps = DoctorsInfo;

const DoctorCard: FC<DoctorCardProps> = ({ name, description, image }) => {
    return (
        <main className='max-w-[360px] flex flex-col items-center justify-between gap-5'>
            <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    loading="lazy"
                    className="object-contain"
                    style={{
                        width: 'clamp(295px, 50vw, 400px)',
                        height: 'auto'
                    }}
                />
            </div>
            <div className="w-full flex flex-col items-center gap-8 text-center">
                <div className='w-full flex flex-wrap flex-col items-center justify-start gap-4'>
                    <h1 className="font-bold text-2xl">
                        {name}
                    </h1>
                    <p
                        className="text-gray-700 w-full font-semibold text-[14px] text-center"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
                <Link href="/appointments" className="no-underline font-bold w-full">
                    <Button
                        variant="outline"
                        className={`w-full cursor-pointer text-white px-8 py-6 bg-[#FF7A3D] border hover:border-black`}
                    >
                        Book Appointment
                    </Button>
                </Link>
            </div>
        </main>
    )
}

export default DoctorCard;
