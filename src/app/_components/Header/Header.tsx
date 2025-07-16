import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants';
import MobileMenu from './_components/MobileMenu';
import logo from '../../../../public/images/nest-logo.png'


const Header = () => {
    return (
        <header className="w-full flex justify-center text-black py-4 bg-transparent absolute top-0 left-0 z-20">
            <nav className="w-full max-w-7xl flex items-center justify-between px-8">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Hospital Logo"
                            width={140}
                            height={140}
                            loading="lazy"
                            className="object-contain"
                            style={{
                                width: 'clamp(120px, 10vw, 150px)',
                                height: 'auto'
                            }}
                        />
                    </Link>
                </div>

                {/* Right: Nav Links + Appointment Button */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8 list-none m-0 p-0 text-sm">
                        <li><Link href="/" className="no-underline">Home</Link></li>
                        <li><Link href="/about-us" className="no-underline">About Us</Link></li>
                        <li><Link href="/services" className="no-underline">Services</Link></li>
                        <li><Link href="/contact-us" className="no-underline">Contact Us</Link></li>
                    </ul>
                    <Link href="/appointments" className="no-underline font-bold">
                        <Button
                            variant="outline"
                            className={`cursor-pointer text-white p-6 hover:bg-white`}
                            style={{ backgroundColor: colors.OrangeColor }}
                        >
                            Make An Appointment
                        </Button>
                    </Link>
                </div>
                <div className='flex md:hidden'>
                    <MobileMenu />
                </div>

            </nav>
        </header>
    );
};

export default Header;
