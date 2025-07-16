'use client';

import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { bookingFormSchema, BookingFormType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { postData } from "@/api/API";


export default function BookingForm() {

    /* 
     * States and Hooks 
    */
    const {
        register,
        handleSubmit,
        control,
        setValue,
        reset,
        formState: { errors, isSubmitting },
        watch
    } = useForm<BookingFormType>({
        resolver: zodResolver(bookingFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            age: "",
            department: "",
            date: undefined,
            transactionId: "",
            opdTimings: ""
        }
    });

    // Set date on client only
    useEffect(() => {
        setValue("date", new Date());
    }, [setValue]);



    /*
    * Functions
    */
    const onSubmit = async (data: BookingFormType) => {
        try {
            const status = await sendBookingFormData(data);
            if (status === 200) {
                toast.success("You will get your confirmation call soon!!");
                reset();
            }
            else {
                toast.error("Internal Server Error");
                reset();
            }
        } catch {
            toast.error("Internal Server Error");
            reset();
        }
    };


    // Function to send Form data to Backend Server
    const sendBookingFormData = async (data: BookingFormType) => {
        const updatedData = { ...data, date: data.date ? format(data.date, "PP") : null }
        const response = await postData('appointments', updatedData);
        return response.status;
    }



    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white "
        >
            {/* Calendar Section */}
            <div className="border rounded-xl p-4 flex flex-col items-center">
                <h2 className="text-lg font-semibold mb-4">Select Appointment Date</h2>
                <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(val) => field.onChange(val)}
                            disabled={{ before: new Date(new Date().setHours(0, 0, 0, 0)) }}
                            className="rounded-md border"
                        />
                    )}
                />
            </div>

            {/* Form Section */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold mb-4">Booking Details</h2>

                {/* Department Dropdown */}
                <Controller
                    name="department"
                    control={control}
                    rules={{ required: "Department is required" }}
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Department" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                                <SelectItem value="obs-gynae">Obs & Gynae</SelectItem>
                                <SelectItem value="ivf">IVF</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors.department && (
                    <p className="text-red-500 text-sm">{errors.department.message}</p>
                )}

                <Input
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}

                <Input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter a valid 10-digit phone number"
                        }
                    })}
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}

                <Input
                    type="number"
                    placeholder="Age"
                    {...register("age", { required: "Age is required" })}
                />
                {errors.age && (
                    <p className="text-red-500 text-sm">{errors.age.message}</p>
                )}

                {/* Transaction ID */}
                <Input
                    type="text"
                    placeholder="Transaction ID"
                    {...register("transactionId", { required: "Transaction ID is required" })}
                />
                {errors.transactionId && (
                    <p className="text-red-500 text-sm">{errors.transactionId.message}</p>
                )}

                {/* OPD Timings Checkbox Group (Single Select) */}
                <div>
                    <label className="block font-medium mb-1">OPD Timings</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                                checked={watch("opdTimings") === "morningopd"}
                                onCheckedChange={(checked) => {
                                    if (checked) setValue("opdTimings", "morningopd",{shouldValidate: true});
                                }}
                            />
                            Morning OPD
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                                checked={watch("opdTimings") === "eveningopd"}
                                onCheckedChange={(checked) => {
                                    if (checked) setValue("opdTimings", "eveningopd", {shouldValidate: true});
                                }}
                            />
                            Evening OPD
                        </label>
                    </div>
                    {errors.opdTimings && (
                        <p className="text-red-500 text-sm">{errors.opdTimings.message}</p>
                    )}
                </div>

                <Button type="submit" className="w-full mt-2 cursor-pointer border border-black hover:text-black hover:bg-white ">
                    {isSubmitting ? "Booking..." : "Book Appointment"}
                </Button>
            </div>
        </form>
    );
}
