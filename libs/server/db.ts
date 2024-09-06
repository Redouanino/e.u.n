import {PrismaClient} from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient({
    datasources: {
        db: {
            url: process.env.MONGODB_URL,
        },
    },
});

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export const db = prisma;