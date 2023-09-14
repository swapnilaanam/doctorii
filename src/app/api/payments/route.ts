import { connectDB } from "@/db/connectDB";
import Payment from "@/models/Payment";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) => {
    const payment = await req.json();

    await connectDB();

    // console.log(payment);

    const newPayment = new Payment(payment);
    

    try {
        await newPayment.save();
        // console.log("Hello");
        return new NextResponse("New Payment Has Been Created", {status: 201});
    } catch (error: any) {
        return new NextResponse(error?.message, {status: error?.status});
    }
}