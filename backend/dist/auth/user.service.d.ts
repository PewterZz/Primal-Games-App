import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from '../dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signup(dto: AuthDto): Promise<{
        access_token: string;
        refresh_token: string;
        message?: undefined;
    } | {
        message: string;
        access_token?: undefined;
        refresh_token?: undefined;
    }>;
    signin(name: any, password: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refresh(refreshToken: string): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
    signRefreshToken(userId: number, email: string): Promise<{
        refresh_token: string;
    }>;
}
