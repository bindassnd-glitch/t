import { Button } from "@/components/ui/button";
import Link from "next/link";


const CallToAction = () => {
  return (
    <section className="w-full bg-[#FAF7F5] py-20 px-4 flex flex-col items-center text-center gap-6">
      <h1 className="text-2xl sm:text-5xl font-extrabold leading-tight text-black">
        Get One Step Ahead Of <br className="hidden sm:block" />
        Disease
      </h1>

      <p className="max-w-2xl text-gray-600 text-[12px] sm:text-sm leading-7">
        Together, let&apos;s join hands, share hope, and beat the rhythm of disease, transforming it into a
        symphony of resilience and triumph at Nest Hospital
      </p>

      <Link href={'/appointments'}>
        <Button className="max-sm:w-full bg-[#FF7A3D] p-6 cursor-pointer text-white font-semibold text-[12px] sm:text-sm shadow-md hover:bg-white hover:text-[#FF7A3D] border hover:border-[#FF7A3D] transition duration-300 rounded-lg">
          Make An Appointment
        </Button>
      </Link>
    </section>
  );
};

export default CallToAction;
