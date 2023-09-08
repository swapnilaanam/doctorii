import { connectDB } from "@/db/connectDB";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require('bcryptjs');

type userType = {
    name: string,
    email: string,
    password: string,
    profilePic: string,
    role: string,
    doctorRole?: string,
    timeSlots?: any[]
}

export const POST = async (request: NextRequest) => {
    const receivedNewUser: userType = await request.json();

    const hashedPassword: string = await bcrypt.hash(receivedNewUser?.password, 7);

    const updatedReceivedNewUser: userType = {...receivedNewUser, password: hashedPassword};

    await connectDB();

    let newUser = new User(updatedReceivedNewUser);

    try {
        await newUser.save();
        return new NextResponse("User Has Been Created Successfully", { status: 201 })
    } catch (err: any) {
        return new NextResponse(err.message, { status: 404 })
    }
}