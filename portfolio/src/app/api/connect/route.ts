import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
    const data = await req.json();
    console.log("POST request: ", data);

    return NextResponse.json({ message: "Success", data}, {status: 200} )
}