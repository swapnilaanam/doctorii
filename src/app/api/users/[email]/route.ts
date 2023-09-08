import { connectDB } from "@/db/connectDB"
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest, { params }: any ) => {
    const { email } = params;

    try {
        await connectDB();
        const user = await User.findOne({ email: email });
        return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (error: any) {
        return new NextResponse(error?.message, {status: 500});
    }
}