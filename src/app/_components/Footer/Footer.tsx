import Image from 'next/image';
import Link from 'next/link';
import { colors } from '@/constants';
import logo from '../../../../public/images/nest-hospital-logo.png';


const Footer = () => {
    return (
        <footer className="w-full text-[#333] border-t">
            <div
                className="w-full h-full mx-auto flex flex-col items-center justify-between gap-10"
                style={{backgroundColor: colors.FooterBackgroundColor}}
            >
                <div>
                    <Image src={logo} alt="logo" width={280} height={280} loading='lazy' />
                </div>
                <div className='max-w-[400px]'>
                    <p className='text-center'>
                        We invite you to explore our website to learn more about our pediatric and gynecology services
                    </p>
                </div>
                <div className='mb-8'>
                    <ul className="flex flex-col sm:flex-row flex-wrap gap-5 list-none m-0 p-0">
                        <li style={{color: colors.DarkOrangeColor}}><Link href="/" className={`no-underline`}>Home</Link></li>
                        <li style={{color: colors.DarkOrangeColor}}><Link href="/about-us" className={`no-underline`}>About Us</Link></li>
                        <li style={{color: colors.DarkOrangeColor}}><Link href="/services" className={`no-underline`}>Services</Link></li>
                        <li style={{color: colors.DarkOrangeColor}}><Link href="/contact-us" className={`no-underline`}>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center py-6">
                <p className='text-justify'>
                    Copyright © 2025 Best Pediatric Gynecology and Neonatology Hospital in Sonipat | Powered by
                    <a style={{ color: colors.DarkOrangeColor }} href="https://deskloventures.com" target='_blank'> Desklo Ventures</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
