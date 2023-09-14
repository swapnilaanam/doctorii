import { connectDB } from "@/db/connectDB";
import Appointment from "@/models/Appointment";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const appointment = await req.json();

    // console.log(appointment);

    await connectDB();
    const newAppointment = new Appointment(appointment);
    

    try {
        await newAppointment.save();
        return new NextResponse("New Appointment Has Been Created", { status: 201 });
    } catch (error: any) {
        return new NextResponse(error?.message, { status: error?.status });
    }
}