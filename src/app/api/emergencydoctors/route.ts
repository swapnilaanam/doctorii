import { connectDB } from "@/db/connectDB";
import EmergencyDoctor from "@/models/EmergencyDoctor";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {
    try {
        await connectDB();
        const result = await EmergencyDoctor.find({});
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (error: any) {
        return new NextResponse(error?.message, { status: error?.status });
    }
};

export const POST = async (req: NextRequest) => {
    const emergencyDoctor = await req.json();

    await connectDB();
    const newEmergencyDoctor = new EmergencyDoctor(emergencyDoctor);

    try {
        await newEmergencyDoctor.save();
        return new NextResponse("New Emergency Doctor Added...", { status: 201 });
    } catch (error: any) {
        return new NextResponse(error?.message, { status: error?.status });
    }
};