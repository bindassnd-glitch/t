'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import OnestImage from '../../../../public/images/Onest.jpeg';


const Popup = () => {
    // States and Hooks
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (!showPopup) return null;


    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="relative">
                <button
                    onClick={() => setShowPopup(false)}
                    className="absolute -top-2 -right-2 text-white text-sm sm:text-xl bg-red-600 rounded-full p-2 w-5 sm:w-8 h-5 sm:h-8 flex items-center justify-center cursor-pointer"
                >
                    x
                </button>
                <a href="https://onestivf.in" target="_blank" rel="noopener noreferrer">
                    <Image
                        src={OnestImage}
                        alt="Onest IVF"
                        className="w-[300px] sm:w-130 h-[300px] sm:h-130 rounded-lg cursor-pointer"
                    />
                </a>
            </div>
        </div>
    );
}

export default Popup;
