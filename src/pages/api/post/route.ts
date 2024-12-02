import prisma from "../../../lib/prismaClient"
import { NextResponse } from "next/server"

export async function GET() {
    const allPost = await prisma.post.findMany();
    return NextResponse.json(allPost);
}