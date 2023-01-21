import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    editUser(userId: number, userName: string, password: string): Promise<import(".prisma/client").user>;
    addPaymentMethod(user: any, card_number: string, expiration_date: string, description: string): Promise<{
        message: string;
    }>;
    AddGame(user: any, game_id: number): Promise<{
        message: string;
    }>;
    removeGame(user: any, game_id: number): Promise<{
        message: string;
    }>;
    addRating(userId: number, game_id: number, rating: number, comment: string): Promise<{
        message: string;
    }>;
    removeRating(userId: number, game_id: number): Promise<{
        message: string;
    }>;
    getRatings(userId: number): Promise<import(".prisma/client").ratings[]>;
    addTransaction(userId: number, game_id: number, payment_method: string): Promise<{
        message: string;
    }>;
    addToCart(userId: number, game_id: number): Promise<{
        message: string;
    }>;
    removeFromCart(userId: number, game_id: number): Promise<{
        message: string;
    }>;
    getCart(userId: number): Promise<import(".prisma/client").cart[]>;
    getGames(userId: number): Promise<import(".prisma/client").game[]>;
    getPaymentMethods(user: any): Promise<import(".prisma/client").payment_method[]>;
    getTransactions(user: any): Promise<(import(".prisma/client").transactions & {
        game: import(".prisma/client").game;
    })[]>;
    getFriendList(user: any): Promise<(import(".prisma/client").friend_list & {
        b: import(".prisma/client").user;
    })[]>;
    getFriendRequest(user: any): Promise<import(".prisma/client").friend_list[]>;
}
