import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';


interface ConnectWhatsAppProps {
    backgroundColor: string;
    textColor: string;
}

const ConnectWhatsApp: FC<ConnectWhatsAppProps> = ({ backgroundColor, textColor }) => {
    return (
        <section
            className='bg-[#F8F5F4] py-7 sm:py-15 px-5 flex flex-col items-center justify-center gap-10'
            style={{ backgroundColor }}
        >
            <div className='flex flex-col items-center justify-center gap-3 sm:gap-5'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-xl sm:text-4xl font-bold' style={{ color: textColor }}>
                        Connect On WhatsApp
                    </h1>
                    <span className='p-1 w-12 h-12 hidden sm:flex items-center justify-center bg-green-500 rounded-sm'>
                        <FaWhatsapp size={40} color={backgroundColor} />
                    </span>
                </div>
                <a href={"https://wa.me/919034799154"} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-500 hover:bg-green-500 p-5 sm:px-8 sm:py-6 text-white border border-green-500 cursor-pointer rounded-md shadow-2xl hover:text-black transition-all duration-300">
                        Chat On WhatsApp
                    </Button>
                </a>
            </div>
        </section>
    )
}

export default ConnectWhatsApp;
