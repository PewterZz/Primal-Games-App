import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
export declare class GenreService {
    private prisma;
    private config;
    constructor(prisma: PrismaService, config: ConfigService);
    createGenre(dto: string): Promise<void>;
}
