import {NextRequest, NextResponse} from "next/server";
import {db} from "@/libs/server/db";

export async function GET(req: NextRequest){

    console.log("GET /api/todos")

    try {
        const todos = await db.todo.findMany();

        return NextResponse.json(todos, {status: 200});

    }catch (error) {
        console.error(error);
        return NextResponse.json({error: "Error fetching todos"}, {status: 500});
    }


}