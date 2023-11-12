import { NextResponse, NextRequest } from "next/server";
import schema from "../../schema/schema";
import prisma from "../../../prisma/client";


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 401})
    }

    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if (user) {
        return NextResponse.json('A user with this username or email already exists')
    }

    const registeredUser = await prisma.user.create({
        data: {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            isAdmin: body.isAdmin
        }
    })

    return NextResponse.json(registeredUser, {status: 201})
}

















