import Prisma from '@/lib/db';
import { Priority, Status } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

interface ProjectBody {
    title: string;
    description?: string;
    image?: string;
    priority: Priority;
    status: Status;
}

export async function POST(req: NextRequest) {
        const body: ProjectBody = await req.json();
        const { title, description, priority, status } = body;
        console.log(body);
        
        if (!title ) {
            return NextResponse.json({ error: 'title is required' }, { status: 400 });
        }

        try {
            const project = await Prisma.project.create({
                data: {
                    title,
                    description,
                    status,
                    priority,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    userId: "Yz0mZvgAYMEjovFafvmfutsB9lIpevil",
                },
            });
            return NextResponse.json(project, { status: 201 });
        } catch (error) {
            return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
        }
    } 