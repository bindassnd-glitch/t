import Doctor1 from '../public/images/Doctor-1.png';
import Doctor2 from '../public/images/Doctor-2.png';
import Doctor3 from '../public/images/Doctor-3.png';
import Doctor4 from '../public/images/Doctor-4.jpg';
import Doctor5 from '../public/images/Doctor-52.png';
import Doctor6 from '../public/images/Doctor-6.png';
import { accordionQuestion, DoctorsInfo, pediatricService } from './types/types';


interface ColorProps {
    HeroSectionBackgroundColor: string;
    FooterBackgroundColor: string;
    OrangeColor: string;
    DarkOrangeColor: string;
}

export const colors: ColorProps = {
    HeroSectionBackgroundColor: "#FDEFE5",
    FooterBackgroundColor: "#F8F5F4",
    OrangeColor: "#FF7A3D",
    DarkOrangeColor: "#FF5100"
}

export const doctorsInfo: DoctorsInfo[] = [
    {
        name: "Dr. Sushil Saroha",
        description: "Director, Pediatrician , Neonatologist M.B.B.S. and M.D. Pediatrics (Gold Medalist)",
        image: Doctor1
    },
    {
        name: "Dr. Poonam Saroha",
        description: "Gynecologist & Obstetrician M.B.B.S., D.G.O. (Gold Medalist), PGDHM, Fertility Specialist",
        image: Doctor2
    },
    {
        name: "Dr. Aamir Hafiz",
        description: "Pediatrician M.B.B.S. and M.D. Pediatrics",
        image: Doctor3
    },
    {
        name: "Dr. Jyoti Gupta",
        description: `MBBS, DNB OBGY, FMAS, DGE (Kiel Germany) (Consultant Gynecologist)<br />Laparoscopic Surgeon`,
        image: Doctor4
    },
    {
        name: "Dr. Vishruth Narang",
        description: "Pediatric surgeon",
        image: Doctor5
    },
    {
        name: "Dr. Gaurav Garg",
        description: "Pediatric cardiologist",
        image: Doctor6
    },
]

export const accordionQuestions: accordionQuestion[] = [
    {
        question: "What services does Nest Hospital offer?",
        answer: "Nest Hospital specializes in child and women's health, offering pediatric, gynecology, and maternity services, along with advanced diagnostics and critical care."
    },
    {
        question: "Where is Nest Hospital located?",
        answer: "Nest Hospital is located in the heart of the city, easily accessible by public and private transport. Please visit our Contact page for the exact address."
    },
    {
        question: "How can I book an appointment?",
        answer: "You can book an appointment by calling our reception, visiting our website, or using our online appointment booking system."
    },
    {
        question: "Do you have emergency services?",
        answer: "Yes, we provide 24/7 emergency services for both children and women."
    }
]

export const pediatricServices: pediatricService[] = [
    {
        service: "Development Assessment",
        // url: "https://nesthospitals.in/child-development-assessment-in-sonipat/"
    },
    {
        service: "Health Checkup (Pediatric)",
        // url: "https://nesthospitals.in/general-pediatrics-health-checkup-in-sonipat/"
    },
    {
        service: "Congenital Disorders Evaluation / Treatment",
        // url: "https://nesthospitals.in/congenital-disorders-evaluation-treatment-in-sonipat/"
    },
    {
        service: "Treatment of fractures and other injuries in children",
    },
    {
        service: "Viral Fever Treatment",
    },
    {
        service: "Tonsillitis Treatment",
    },
    {
        service: "Infectious Disease Treatment",
    },
    {
        service: "New Born Care",
    },
    {
        service: "Neonatal Care",
    },
    {
        service: "Growth & Development Evaluation / Management",
    },
    {
        service: "Pediatric Surgery",
    },
];


export const gynecologicServices: string[] = [
    "Obstetrics",
    "Gynaecology",
    "Infertility",
    "High-Risk Pregnancy Care",
    "Endoscopy",
    "Intrauterine Insemination",
    "Mirena (Hormonal Iud)",
    "Caesarean Section",
    "Hysterectomy",
    "Dilatation And Curettage",
    "Vaginal Hysterectomy",
    "Laparoscopic Surgery",
    "Abortion / Medical Termination of Pregnancy",
    "Normal Vaginal Delivery Multiload",
    "Pap Smear",
    "Antenatal Checkup",
    "Medical Diseases in Pregnancy",
    "Uterine Bleeding",
    "Pre-Marital Counselling",
    "Epidurals",
    "HPV Vaccination",
    "Postnatal Care"
];

