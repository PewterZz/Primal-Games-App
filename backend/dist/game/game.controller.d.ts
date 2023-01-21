import { GameService } from "./game.service";
import { GameDto } from "../dto/game.dto";
export declare class GameController {
    private gameService;
    constructor(gameService: GameService);
    create(dto: GameDto): Promise<{
        message: string;
    }>;
    createSales(game_id: number, discount: number): Promise<{
        message: string;
    }>;
    delete(id: number): Promise<void>;
    update(dto: GameDto, id: number): Promise<void>;
    getMe(id: number): Promise<import(".prisma/client").game & {
        genres: import(".prisma/client").genre[];
        platforms: import(".prisma/client").platforms[];
    }>;
    allGenre(genre: string): Promise<import(".prisma/client").game[]>;
    allPlatform(platform: string): Promise<import(".prisma/client").game[]>;
    all(): Promise<(import(".prisma/client").game & {
        genres: import(".prisma/client").genre[];
        platforms: import(".prisma/client").platforms[];
    })[]>;
    sales(): Promise<(import(".prisma/client").on_sale & {
        game: import(".prisma/client").game & {
            genres: import(".prisma/client").genre[];
        };
    })[]>;
    getGameByTitle(title: string): Promise<(import(".prisma/client").game & {
        genres: import(".prisma/client").genre[];
        platforms: import(".prisma/client").platforms[];
    })[]>;
}
