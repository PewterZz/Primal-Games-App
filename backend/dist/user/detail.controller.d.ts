import { user } from "@prisma/client";
import { UserService } from "./detail.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    addGame(userId: any, game_id: number): Promise<{
        message: string;
    }>;
    transaction(userId: any, game_id: number, payment_method: string): Promise<{
        message: string;
    }>;
    addPaymentMethod(user: any, card: string, exp: string, description: string): Promise<{
        message: string;
    }>;
    addCart(user: any, game: number): Promise<{
        message: string;
    }>;
    addReview(user: any, game: number, rating: number, comment: string): Promise<{
        message: string;
    }>;
    getAllReviews(user: any): Promise<import(".prisma/client").ratings[]>;
    removeReview(user: any, game: number): Promise<{
        message: string;
    }>;
    removeCart(user: any, game: number): Promise<{
        message: string;
    }>;
    removeGame(userId: any, game_id: number): Promise<{
        message: string;
    }>;
    getCart(user: any): Promise<import(".prisma/client").cart[]>;
    getMe(user: user): user;
    getGames(userId: any): Promise<import(".prisma/client").game[]>;
    editUser(userId: any, user: string, password: string): Promise<user>;
    getPaymentMethods(user: any): Promise<import(".prisma/client").payment_method[]>;
    getTransactions(user: any): Promise<(import(".prisma/client").transactions & {
        game: import(".prisma/client").game;
    })[]>;
    getFriendList(user: any): Promise<(import(".prisma/client").friend_list & {
        b: user;
    })[]>;
    getFriendRequest(user: any): Promise<import(".prisma/client").friend_list[]>;
}
