import { PrismaService } from "../prisma/prisma.service";
import { GameDto } from "../dto/game.dto";
import { ConfigService } from "@nestjs/config";
export declare class GameService {
    private prisma;
    private config;
    constructor(prisma: PrismaService, config: ConfigService);
    createGame(dto: GameDto): Promise<{
        message: string;
    }>;
    deleteGame(id: number): Promise<void>;
    createSales(id: number, discount: number): Promise<{
        message: string;
    }>;
    getSales(): Promise<(import(".prisma/client").on_sale & {
        game: import(".prisma/client").game & {
            genres: import(".prisma/client").genre[];
        };
    })[]>;
    updateGame(dto: GameDto, id: number): Promise<void>;
    getGame(id: number): Promise<import(".prisma/client").game & {
        genres: import(".prisma/client").genre[];
        platforms: import(".prisma/client").platforms[];
    }>;
    getAllGames(): Promise<(import(".prisma/client").game & {
        genres: import(".prisma/client").genre[];
        platforms: import(".prisma/client").platforms[];
    })[]>;
    getAllGamesGenre(genre: string): Promise<import(".prisma/client").game[]>;
    getAllGamesPlatform(platform: string): Promise<import(".prisma/client").game[]>;
    getGameByTitle(title: string): Promise<(import(".prisma/client").game & {
        genres: import(".prisma/client").genre[];
        platforms: import(".prisma/client").platforms[];
    })[]>;
}
