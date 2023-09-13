import { connectDB } from "@/db/connectDB";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: any }) => {
    const { email } = params;

    try {
        await connectDB();
        const user = await User.findOne({ email: email });
        return new NextResponse(JSON.stringify(user.timeSlots), { status: 200 });
    } catch (error: any) {
        return new NextResponse(error.message, { status: error.status });
    }
}


export const PATCH = async (req: NextRequest, { params }: { params: any }) => {
    const { email } = params;
    const newSchedule = await req.json();

    try {
        await connectDB();
        const user = await User.findOne({ email: email });

        if (user) {
            for (let i = 0; i < user?.timeSlots.length; i++) {
                if (user?.timeSlots[i]?.scheduleTime === newSchedule?.scheduleTime) {
                    return new NextResponse("Already Exists", { status: 409 });
                }
            }
            const updatedTimeSlots = [...user.timeSlots, newSchedule];

            // console.log(newSchedule);
            // console.log(user.timeSlots);
            // console.log(updatedTimeSlots);

            const filter = { email: email };
            const update = { $set: { timeSlots: updatedTimeSlots } };

            await User.findOneAndUpdate(filter, update);

            return new NextResponse("Updated Successfully...", { status: 200 });
        }

    } catch (error: any) {
        console.log(error.message);
    }
}

export const DELETE = async (req: NextRequest, { params }: { params: any }) => {
    const { email } = params;
    const { scheduleTime } = await req.json();

    try {
        await connectDB();
        const user = await User.findOne({ email: email });

        if (user) {
            const updatedTimeSlots = user?.timeSlots?.filter((timeSlot) => timeSlot.scheduleTime !== scheduleTime);
            // console.log(updatedTimeSlots);

            const filter = { email: email };
            const update = { $set: { timeSlots: updatedTimeSlots } };

            await User.findOneAndUpdate(filter, update);

            return new NextResponse("Updated Successfully...", { status: 200 });
        }

    } catch (error: any) {
        return new NextResponse(error?.message, {status: error?.status});;
    }
}