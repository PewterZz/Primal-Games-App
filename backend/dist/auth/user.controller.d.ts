import { AuthService } from './user.service';
import { AuthDto } from '../dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        access_token: string;
        refresh_token: string;
        message?: undefined;
    } | {
        message: string;
        access_token?: undefined;
        refresh_token?: undefined;
    }>;
    signin(user: string, password: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refresh(token: string): Promise<{
        access_token: string;
    }>;
}
