import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
export declare class PlatformService {
    private prisma;
    private config;
    constructor(prisma: PrismaService, config: ConfigService);
    createPlatform(dto: string): Promise<void>;
}
