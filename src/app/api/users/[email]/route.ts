import { connectDB } from "@/db/connectDB"
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(request: NextRequest, { params } ) => {
    const { email } = params;

    console.log(email);
    // try {
    //     await connectDB();
    //     const user = await User.findOne({ email: email }).exec();
    //     return new NextResponse(user, { status: 200 });
    // } catch (error: any) {
    //     return new NextResponse(error?.message)
    // }
}