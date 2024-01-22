import { connectDB } from "@/db/connectDB";
import EmergencyDoctor from "@/models/EmergencyDoctor";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: { params: any }) => {
    const { id } = params;
    
    try {
        await connectDB();
        await EmergencyDoctor.findByIdAndDelete(id);
        return new NextResponse('Removed Selected Emerency Doctor', { status: 200 });
    } catch (error: any) {
        return new NextResponse(error?.message, { status: error?.status })
    }
};