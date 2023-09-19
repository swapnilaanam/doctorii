import { connectDB } from "@/db/connectDB";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: any }) => {
    const { id } = params;

    try {
        await connectDB();
        const user = await User.findById(id);
        return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (error: any) {
        return new NextResponse(error?.message, { status: error?.status });
    }
}

export const PATCH = async (req: NextRequest, { params }: { params: any }) => {
    const { id } = params;
    const { role } = await req.json();

    const update = { $set: { role: role } }

    try {
        await connectDB();
        const response = await User.findByIdAndUpdate(id, update);
        return new NextResponse('User Role Updated To Admin', { status: 200 })
    } catch (error: any) {
        return new NextResponse(error?.message, { status: error?.status });
    }
}