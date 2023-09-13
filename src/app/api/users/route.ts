import { connectDB } from "@/db/connectDB"
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest) => {
    try {
        await connectDB();
        const users = await User.find({});
        return new NextResponse(JSON.stringify(users), {status: 200});
    } catch (error: any) {
        return new NextResponse(error?.message, {status: error?.status})
    }
}