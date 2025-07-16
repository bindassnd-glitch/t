import { JSX } from "react";
import { StaticImageData } from "next/image";
import z from "zod";


export interface DoctorsInfo {
    name: string;
    description: string;
    image: StaticImageData;
}

export interface accordionQuestion {
    question: string;
    answer: string
}

export interface pediatricService {
    service: string;
    url?: string;
}

export interface Testimonial {
    name: string;
    role: string;
    content: string;
    icon: JSX.Element;
};


export const contactFormSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(1, 'Message is required'),
});


export const bookingFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    phone: z.string().min(1, 'Phone Number is required'),
    age: z.string().min(1, 'age is required'),
    department: z.string().min(1, 'department is required'),
    date: z.date().min(new Date(), 'date is required'),
    transactionId: z.string().optional(),
    opdTimings: z.string().min(1, 'Select one OPD timing'), // Change to string for radio group
});


export type ContactFormType = z.infer<typeof contactFormSchema>;
export type BookingFormType = z.infer<typeof bookingFormSchema>;