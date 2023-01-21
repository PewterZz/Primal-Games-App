"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
const runtime_1 = require("@prisma/client/runtime");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async signup(dto) {
        const hash = await argon.hash(dto.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    username: dto.username,
                    refresh_token: "",
                    avatar: "",
                    hash,
                },
            });
            const refreshToken = this.signRefreshToken(user.id, user.email);
            const access = this.signToken(user.id, user.email);
            const refresh = await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    refresh_token: String((await refreshToken).refresh_token),
                },
            });
            return { access_token: (await access).access_token, refresh_token: (await refreshToken).refresh_token };
        }
        catch (error) {
            if (error instanceof
                runtime_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
        return { message: 'User created successfully' };
    }
    async signin(name, password) {
        console.log(name);
        let user = await this.prisma.user.findUnique({
            where: {
                email: String(name),
            },
        });
        if (!user) {
            user = await this.prisma.user.findUnique({
                where: {
                    username: String(name),
                },
            });
        }
        if (!user)
            throw new common_1.ForbiddenException('Credentials incorrect');
        const pwMatches = await argon.verify(user.hash, String(password));
        if (!pwMatches)
            throw new common_1.ForbiddenException('Credentials incorrect');
        const access = this.signToken(user.id, user.email);
        return { access_token: (await access).access_token, refresh_token: (await user).refresh_token };
    }
    async refresh(refreshToken) {
        const options = { secret: 'not-so-secret' };
        const user = await this.prisma.user.findUnique({
            where: {
                refresh_token: refreshToken,
            },
        });
        if (user) {
            if (this.jwt.verify(user.refresh_token, options))
                return this.signToken(user.id, user.email);
        }
        return null;
    }
    async signToken(userId, email) {
        const payload = {
            sub: userId,
            email,
        };
        const secret = 'super-secret';
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '1h',
            secret: secret,
        });
        return {
            access_token: token,
        };
    }
    async signRefreshToken(userId, email) {
        const payload = {
            sub: userId,
            email,
        };
        const secret = 'not-so-secret';
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '30d',
            secret: secret,
        });
        return {
            refresh_token: token,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=user.service.js.map