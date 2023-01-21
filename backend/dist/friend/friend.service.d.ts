import { PrismaService } from "../prisma/prisma.service";
import { friendDto } from "../dto/friend.dto";
import { ConfigService } from "@nestjs/config";
export declare class friendService {
    private prisma;
    private config;
    constructor(prisma: PrismaService, config: ConfigService);
    getUserByUsername(username: string): Promise<{
        username: string;
        avatar: string;
        friends: import(".prisma/client").friend_list[];
        symmetricfriends: import(".prisma/client").friend_list[];
        id: number;
    }[]>;
    addFriend(dto: friendDto): Promise<{
        message: string;
    }>;
    deleteFriend(id: number): Promise<void>;
    updateFriend(dto: friendDto, id: number): Promise<{
        message: string;
    }>;
    getFriendState(a_id: number, b_id: number): Promise<boolean>;
}
