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
exports.GameService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const runtime_1 = require("@prisma/client/runtime");
const config_1 = require("@nestjs/config");
let GameService = class GameService {
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
    }
    async createGame(dto) {
        try {
            const game = await this.prisma.game.create({
                data: {
                    title: dto.title,
                    description: dto.description,
                    developer: dto.developer,
                    publisher: dto.publisher,
                    images: dto.images,
                    price: dto.price,
                    genres: {
                        connectOrCreate: dto.genres.map((genre) => ({
                            where: { name: genre },
                            create: { name: genre },
                        })),
                    },
                    platforms: {
                        connectOrCreate: dto.platforms.map((platform) => ({
                            where: { platform: platform },
                            create: { platform: platform },
                        })),
                    },
                },
            });
            return { message: "Game created successfully" };
        }
        catch (error) {
            console.log(error.message);
            if (error instanceof runtime_1.PrismaClientKnownRequestError)
                throw new Error(error.message);
        }
    }
    async deleteGame(id) {
        try {
            const game = await this.prisma.game.delete({
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
    async createSales(id, discount) {
        try {
            const game = await this.prisma.on_sale.create({
                data: {
                    game: { connect: { id: Number(id) } },
                    discount: Number(discount),
                },
            });
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
        return { message: "Create sales" };
    }
    async getSales() {
        const sales = await this.prisma.on_sale.findMany({
            include: {
                game: {
                    include: {
                        genres: true,
                    },
                },
            },
        });
        return sales;
    }
    async updateGame(dto, id) {
        try {
            const game = await this.prisma.game.update({
                where: {
                    id: Number(id),
                },
                data: {
                    title: dto.title,
                    description: dto.description,
                    developer: dto.developer,
                    publisher: dto.publisher,
                    images: dto.images,
                    price: dto.price,
                },
            });
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
    }
    async getGame(id) {
        try {
            const game = await this.prisma.game.findUnique({
                where: {
                    id: Number(id),
                },
                include: {
                    genres: true,
                    platforms: true,
                },
            });
            return game;
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
    }
    async getAllGames() {
        try {
            const game = await this.prisma.game.findMany({
                include: {
                    genres: true,
                    platforms: true,
                },
            });
            return game;
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
    }
    async getAllGamesGenre(genre) {
        try {
            const game = await this.prisma.game.findMany({
                where: {
                    genres: {
                        some: {
                            name: String(genre),
                        },
                    },
                },
            });
            return game;
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
    }
    async getAllGamesPlatform(platform) {
        try {
            const game = await this.prisma.game.findMany({
                where: {
                    platforms: {
                        some: {
                            platform: String(platform),
                        },
                    },
                },
            });
            return game;
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
    }
    async getGameByTitle(title) {
        try {
            const games = await this.prisma.game.findMany({
                where: {
                    title: {
                        contains: title,
                    },
                },
                include: {
                    genres: true,
                    platforms: true,
                },
            });
            return games;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
GameService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, config_1.ConfigService])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map