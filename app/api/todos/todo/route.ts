import { NextRequest, NextResponse } from "next/server";
import { db } from "@/libs/server/db";

export async function POST(req: NextRequest) {
    console.log("POST /api/todos/todo");

    const { text } = await req.json();

    if (!text) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try {
        await db.todo.create({
            data: { text }
        });
        console.log("Todo added");
        return NextResponse.json("Todo added", { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error adding todo" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    console.log("DELETE /api/todos/todo");

    const { id } = await req.json();

    if (!id) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try {
        await db.todo.delete({
            where: { id }
        });
        console.log("Todo deleted");
        return NextResponse.json("Todo deleted", { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error deleting todo" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    console.log("PUT /api/todos/todo");

    const { id, text } = await req.json();

    if (!id || !text) {
        console.log("Missing required fields");
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try {
        await db.todo.update({
            where: { id },
            data: { text }
        });
        console.log("Todo updated");
        return NextResponse.json("Todo updated", { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error updating todo" }, { status: 500 });
    }
}
