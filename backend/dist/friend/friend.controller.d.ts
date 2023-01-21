import { friendService } from "./friend.service";
import { friendDto } from "../dto/friend.dto";
export declare class friendController {
    private friendService;
    constructor(friendService: friendService);
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
