'use client';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { colors } from "@/constants";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // 👈 Use clsx for conditional classNames (optional but cleaner)

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Close the sheet when route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/contact-us", label: "Contact Us" },
    ];

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="bg-transparent p-0">
                    <Menu className="size-[24px]" color={colors.OrangeColor} />
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-[260px] sm:w-[300px] p-5 bg-white"
            >
                <SheetTitle className="text-lg font-bold text-gray-800">
                    Menu
                </SheetTitle>

                <nav className="flex flex-col items-start gap-6 mt-6 text-lg font-medium text-left">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={clsx(
                                "transition-colors",
                                pathname === href
                                    ? "text-orange-600"
                                    : "text-gray-700"
                            )}
                        >
                            {label}
                        </Link>
                    ))}

                    <Link href="/appointments" className="w-full mt-6">
                        <Button
                            variant="outline"
                            className="w-full text-white"
                            style={{ backgroundColor: colors.OrangeColor }}
                        >
                            Make An Appointment
                        </Button>
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;
