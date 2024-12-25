import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

export const POST = async (req: Request) => {
    const formData = await req.json();

    // Type checking and validation
    if (typeof formData.name !== 'string' || !formData.name.trim()) {
        return NextResponse.json({ error: "Name is required and must be a string." }, { status: 400 });
    }

    if (typeof formData.email !== 'string' || !/\S+@\S+\.\S+/.test(formData.email.trim())) {
        return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    if (typeof formData.reason !== 'string' || !formData.reason.trim()) {
        return NextResponse.json({ error: "Reason is required and must be a string." }, { status: 400 });
    }

    if (typeof formData.message !== 'string') {
        return NextResponse.json({ error: "Message must be a string." }, { status: 400 });
    }

    const window = new JSDOM('').window;
    const purify = DOMPurify(window);

    // Sanitization
    const sanitizedName = formData.name.trim();
    const sanitizedEmail = formData.email.trim(); 
    const sanitizedReason = formData.reason.trim(); 
    const sanitizedMessage = purify.sanitize(formData.message); // Sanitize the message

    // Further validation on sanitized values
    if (!sanitizedMessage) {
        return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    //validate reason
    const allowedReasons = ["Job Opportunities", "Interviews", "Freelance", "Collaboration", "Others"];
    if (!allowedReasons.includes(sanitizedReason)) {
        return NextResponse.json({ error: "Invalid reason" }, { status: 400 });
    }

    try{
        const contact = await prisma.contact.create({
            data: {
                name: sanitizedName, 
                email: sanitizedEmail, 
                reason: sanitizedReason,
                message: sanitizedMessage
            }
        });

        return NextResponse.json({message: "Sucess", name: contact.name }, {status: 201})

    }catch(err) {
        return NextResponse.json({error: "Database error", err: err}, {status: 500})
    }

}

export async function GET(request: NextRequest) {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new Response('Unauthorized', {
        status: 401,
      });
    }

    try{
        const total = await prisma.contact.count();

        const firstName = await prisma.contact.findUnique({
            where: { id: 1 }
        })

        return NextResponse.json({message: `${total} msgs, fn: ${firstName?.name}` ,success: true });
        
    } catch(err) {
        return NextResponse.json({error: "Database error", err: err}, {status: 500})
    }
   
}