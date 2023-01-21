"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const user_module_1 = require("../auth/user.module");
const prisma_module_1 = require("../prisma/prisma.module");
const detail_module_1 = require("../user/detail.module");
const game_module_1 = require("../game/game.module");
const friend_module_1 = require("../friend/friend.module");
const genre_module_1 = require("../genre/genre.module");
const platform_module_1 = require("../platform/platform.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            user_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            detail_module_1.UserModule,
            game_module_1.GameModule,
            friend_module_1.FriendModule,
            genre_module_1.GenreModule,
            platform_module_1.PlatformModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map