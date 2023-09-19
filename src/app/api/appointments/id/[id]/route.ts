import { connectDB } from "@/db/connectDB";
import Appointment from "@/models/Appointment";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;

    try {
        await connectDB();
        await Appointment.findByIdAndDelete(id);
        return new NextResponse("Appointment Cancelled Successfully!", { status: 200 });
    } catch (error: any) {
        return new NextResponse(error?.message, { status: error?.status });
    }
}