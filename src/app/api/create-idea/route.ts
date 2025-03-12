import Prisma from '@/lib/db';
import { Priority, Status } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

interface IdeaBody {
    title: string;
    description?: string;
    priority: Priority;
    status: Status;
}

export async function POST(req: NextRequest) {
        const body: IdeaBody = await req.json();
        const { title, description, priority } = body;
        
        if (!title ) {
            return NextResponse.json({ error: 'title is required' }, { status: 400 });
        }

        try {
            const project = await Prisma.idea.create({
                data: {
                    title,
                    description,
                    priority,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    userId: "Yz0mZvgAYMEjovFafvmfutsB9lIpevil",
                },
            });
            return NextResponse.json(project, { status: 201 });
        } catch (error) {
            console.log(error);
            
            return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
        }
    } 