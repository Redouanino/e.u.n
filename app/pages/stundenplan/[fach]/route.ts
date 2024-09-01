// app/api/stundenplan/[fach]/route.ts
import connectDb from '@/lib/mongodb';
import Stundenplan from '@/models/Stundenplan';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { fach: string } }) {
    await connectDb();
    try {
        const stundenplan = await Stundenplan.findOne({ fach: params.fach });
        return NextResponse.json(stundenplan);
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}

export async function POST(req: Request, { params }: { params: { fach: string } }) {
    await connectDb();
    try {
        const body = await req.json();
        const stundenplan = await Stundenplan.findOneAndUpdate(
            { fach: params.fach },
            body,
            { new: true, upsert: true }
        );
        return NextResponse.json(stundenplan);
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 400 });
    }
}
