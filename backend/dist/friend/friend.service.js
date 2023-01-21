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
exports.friendService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const runtime_1 = require("@prisma/client/runtime");
const config_1 = require("@nestjs/config");
let friendService = class friendService {
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
    }
    async getUserByUsername(username) {
        try {
            const users = await this.prisma.user.findMany({
                where: { username: { contains: username } },
                select: {
                    id: true,
                    username: true,
                    avatar: true,
                    friends: true,
                    symmetricfriends: true,
                },
            });
            return users;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async addFriend(dto) {
        try {
            const friend = await this.prisma.friend_list.create({
                data: {
                    a_id: Number(dto.a_id),
                    b_id: Number(dto.b_id),
                    accepted: Boolean(Number(dto.accepted)),
                },
            });
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
        return { message: "Done" };
    }
    async deleteFriend(id) {
        console.log(Number(id));
        try {
            const friend = await this.prisma.friend_list.deleteMany({
                where: {
                    id: Number(id),
                },
            });
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
    }
    async updateFriend(dto, id) {
        try {
            const friend = await this.prisma.friend_list.update({
                where: {
                    id: Number(id),
                },
                data: {
                    accepted: Boolean(Number(dto.accepted)),
                },
            });
            return { message: "Done" };
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
    }
    async getFriendState(a_id, b_id) {
        try {
            const friend = await this.prisma.friend_list.findFirst({
                where: {
                    a_id: a_id,
                    b_id: b_id,
                },
            });
            return friend.accepted;
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
    }
};
friendService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, config_1.ConfigService])
], friendService);
exports.friendService = friendService;
//# sourceMappingURL=friend.service.js.map