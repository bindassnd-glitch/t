import { FaWhatsapp } from "react-icons/fa6";

// components/FloatingCTA.js
export default function FloatingCTA() {
    return (
        <div
            className="fixed z-50 flex items-center gap-3 bg-white p-2 rounded-full shadow-lg border
                   bottom-5 right-5 flex-row
                   md:top-1/2 md:right-0 md:bottom-auto md:flex-col md:-translate-y-1/2"
        >
            {/* Call Button */}
            <a
                href="tel:+919034799154"
                className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition"
                aria-label="Call Now"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h2a2 2 0 012 2v1c0 .512-.195 1.008-.547 1.377L7.586 8.586a16.094 16.094 0 006.828 6.828l1.209-1.209A2 2 0 0116 13h1a2 2 0 012 2v2a2 2 0 01-2 2h-.5C9.94 19 5 14.06 5 8.5V8a2 2 0 01-2-2V5z"
                    />
                </svg>
            </a>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919034799154"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition"
                aria-label="WhatsApp Now"
            >
                <FaWhatsapp size={40} color="#fff" />
            </a>
        </div>
    );
}