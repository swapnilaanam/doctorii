import { connectDB } from "@/db/connectDB";
import Appointment from "@/models/Appointment";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await connectDB();
        const appointments = await Appointment.find({});
        return new NextResponse(JSON.stringify(appointments), { status: 200 });
    } catch (error: any) {
        return new NextResponse(error?.message, { status: error?.status })
    }
}


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