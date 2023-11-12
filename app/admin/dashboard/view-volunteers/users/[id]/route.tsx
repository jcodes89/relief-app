import { NextRequest, NextResponse } from "next/server";
import schema from "../../../../../schema/schema";
import prisma from "../../../../../../prisma/client";

interface Props {
    params: {id: string}
}

export async function GET(request: NextRequest, {params}: Props){
    const singleUser = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    if(!singleUser) {
        return NextResponse.json({error: 'user not found'}, {status: 401})
    }

    return NextResponse.json(singleUser)
    
}

export async function PUT(request: NextRequest, {params}: Props){
    const body = await request.json()
    const validation = schema.safeParse(body)

    if (!validation.success){
        return NextResponse.json(validation.error.errors, {status: 401})
    }

    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    if(!user){
        return NextResponse.json({error: 'There is no username or email that exists for this user'})
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: params.id
        },
        data: {
            lastName: body.lastName,
            email: body.email,
            isAdmin: body.isAdmin,
            active: body.active,
            volunteerDate: body.volunteerDate,
            lastDeployment: body.lastDeployment
        }
    })

    return NextResponse.json(updatedUser)
}

export async function DELETE(request: NextRequest, {params}: Props){
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success){
        return NextResponse.json(validation.error.errors, {status: 401})
    }

    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })

    if(!user){
        return NextResponse.json('no user found')
    }

    const deletedUser = await prisma.user.delete({
        where: {
            id: params.id
        }
    })

    return NextResponse.json(deletedUser)
}














