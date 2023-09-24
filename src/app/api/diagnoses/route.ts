import { connectDB } from "@/db/connectDB";
import Diagnosis from "@/models/Diagnosis";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await connectDB();
        const diagnoses = await Diagnosis.find({});
        return new NextResponse(JSON.stringify(diagnoses), { status: 200 });
    } catch (error: any) {
        return new NextResponse(error?.message, error?.status);
    }
}

export const POST = async (req: NextRequest) => {
    const diagnosis = await req.json();

    await connectDB();
    const newDiagnosis = new Diagnosis(diagnosis);

    try {
        await newDiagnosis.save();
        return new NextResponse("New Diagnosis Created...", { status: 201 });
    } catch (error: any) {
        return new NextResponse(error?.message, { status: error?.status });
    }
}