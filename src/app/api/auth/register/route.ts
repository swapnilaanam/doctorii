import { connectDB } from "@/db/connectDB";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require('bcryptjs');

type userType = {
    name: string,
    email: string,
    password: string,
    profilePic: string,
    role: string
}

export const POST = async (request: NextRequest) => {
    const { name, email, password, profilePic, role }: userType = await request.json();

    const hashedPassword: string = await bcrypt.hash(password, 7);

    await connectDB();

    let newUser = new User({ name, email, password: hashedPassword, profilePic, role });

    try {
        await newUser.save();
        return new NextResponse("User Has Been Created Successfully", { status: 201 })
    } catch (err: any) {
        return new NextResponse(err.message, { status: 404 })
    }
}