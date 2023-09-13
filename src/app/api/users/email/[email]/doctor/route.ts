import { connectDB } from "@/db/connectDB";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server"

export const GET = async(req: NextRequest, {params}: any) => {
    const {email} = params;

    try {
        await connectDB();
        const user = await User.findOne({email: email});

        if(user?.role === "Doctor") {
            return new NextResponse(true, {status: 200});
        }
        else {
            return new NextResponse(false, {status: 200})
        }
    } catch (error) {
        return new NextResponse("Database Error", {status: 500});
    }
}