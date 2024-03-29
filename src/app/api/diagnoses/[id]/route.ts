import Diagnosis from "@/models/Diagnosis";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: { params: any }) => {
    const { id } = params;
    try {
        await Diagnosis.findByIdAndDelete(id);
        return new NextResponse("Diagnosis Deleted", { status: 200 });
    } catch (error: any) {
        return new NextResponse(error?.message, { status: error?.status });
    }
}