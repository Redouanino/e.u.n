import {NextRequest, NextResponse} from "next/server";
import {db} from "@/libs/server/db";

export async function POST(req: NextRequest){

    console.log("POST /api/todos/todo")

    const {text} = await req.json();

    if (!text) {
        return NextResponse.json({error: "Missing required fields"}, {status: 400});
    }


    try {
        await db.todo.create({
            data: {
                text
            }
        });
        console.log("Todo added")
        return NextResponse.json("Todo added", {status: 200});

    }catch (error) {
        console.error(error);
        return NextResponse.json({error: "Error adding todo"}, {status: 500});
    }


}