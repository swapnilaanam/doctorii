import { connectDB } from "@/db/connectDB";
import Appointment from "@/models/Appointment";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, {params}: {params: any}) => {
    const {email} = params;

    try {
        await connectDB();
        const appointments = await Appointment.find({doctorEmail: email});
        return new NextResponse(JSON.stringify(appointments), { status: 200 });
    } catch (error: any) {
        return new NextResponse(error?.message, { status: error?.status })
    }
}