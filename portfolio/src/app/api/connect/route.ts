import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const formData = await req.json();

    console.log()

    try{
        const contact = await prisma.contact.create({
            data: {
                name: formData.name, 
                email: formData.email, 
                reason: formData.reason,
                message: formData.message
            }
        });

        return NextResponse.json({message: "Sucess", name: contact.name }, {status: 201})

    }catch(err) {
        return NextResponse.json({error: "Database error", err: err}, {status: 500})
    }

}