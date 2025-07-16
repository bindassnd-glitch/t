'use client';

import { useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";


export default function BookingForm() {
    // State for each field
    const [date, setDate] = useState<Date | null>(new Date());
    const [department, setDepartment] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [opdTimings, setOpdTimings] = useState("");

    return (
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
            action="https://formsubmit.co/neuroflare@gmail.com"
            method="POST"
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white "
        >
            {/* Calendar Section */}
            <div className="border rounded-xl p-4 flex flex-col items-center">
                <h2 className="text-lg font-semibold mb-4">Select Appointment Date</h2>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(val) => setDate(val)}
                    disabled={{ before: new Date(new Date().setHours(0, 0, 0, 0)) }}
                    className="rounded-md border"
                />
                {/* Hidden input for date */}
                <input type="hidden" name="date" value={date ? format(date, "PP") : ""} />
            </div>

            {/* Form Section */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold mb-4">Booking Details</h2>

                {/* Department Dropdown */}
                <Select onValueChange={setDepartment} value={department}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="obs-gynae">Obs & Gynae</SelectItem>
                        <SelectItem value="ivf">IVF</SelectItem>
                    </SelectContent>
                </Select>
                <input type="hidden" name="department" value={department} />

                <Input
                    placeholder="Your Name"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />

                <Input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    pattern="[0-9]{10}"
                    required
                />

                <Input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    required
                />

                {/* Transaction ID */}
                <Input
                    type="text"
                    placeholder="Transaction ID"
                    name="transactionId"
                    value={transactionId}
                    onChange={e => setTransactionId(e.target.value)}
                    required
                />

                {/* OPD Timings Checkbox Group (Single Select) */}
                <div>
                    <label className="block font-medium mb-1">OPD Timings</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                                checked={opdTimings === "morningopd"}
                                onCheckedChange={(checked) => {
                                    if (checked) setOpdTimings("morningopd");
                                }}
                            />
                            Morning OPD
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                                checked={opdTimings === "eveningopd"}
                                onCheckedChange={(checked) => {
                                    if (checked) setOpdTimings("eveningopd");
                                }}
                            />
                            Evening OPD
                        </label>
                    </div>
                    <input type="hidden" name="opdTimings" value={opdTimings} required />
                </div>

                <Button type="submit" className="w-full mt-2 cursor-pointer border border-black hover:text-black hover:bg-white ">
                    Book Appointment
                </Button>
            </div>
        </form>
    );
}
