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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const common_1 = require("@nestjs/common");
const game_service_1 = require("./game.service");
const game_dto_1 = require("../dto/game.dto");
let GameController = class GameController {
    constructor(gameService) {
        this.gameService = gameService;
    }
    create(dto) {
        return this.gameService.createGame(dto);
    }
    createSales(game_id, discount) {
        return this.gameService.createSales(game_id, discount);
    }
    delete(id) {
        return this.gameService.deleteGame(id);
    }
    update(dto, id) {
        return this.gameService.updateGame(dto, id);
    }
    getMe(id) {
        return this.gameService.getGame(id);
    }
    allGenre(genre) {
        return this.gameService.getAllGamesGenre(genre);
    }
    allPlatform(platform) {
        return this.gameService.getAllGamesPlatform(platform);
    }
    all() {
        return this.gameService.getAllGames();
    }
    sales() {
        return this.gameService.getSales();
    }
    getGameByTitle(title) {
        return this.gameService.getGameByTitle(title);
    }
};
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [game_dto_1.GameDto]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("createsale"),
    __param(0, (0, common_1.Body)("game")),
    __param(1, (0, common_1.Body)("discount")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "createSales", null);
__decorate([
    (0, common_1.Post)("delete"),
    __param(0, (0, common_1.Body)("game")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)("game")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [game_dto_1.GameDto, Number]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "update", null);
__decorate([
    (0, common_1.Post)("getgame"),
    __param(0, (0, common_1.Body)("game")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "getMe", null);
__decorate([
    (0, common_1.Get)("allgenre"),
    __param(0, (0, common_1.Body)("genre")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "allGenre", null);
__decorate([
    (0, common_1.Get)("allplatform"),
    __param(0, (0, common_1.Body)("platform")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "allPlatform", null);
__decorate([
    (0, common_1.Get)("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GameController.prototype, "all", null);
__decorate([
    (0, common_1.Get)("allsales"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GameController.prototype, "sales", null);
__decorate([
    (0, common_1.Get)("search"),
    __param(0, (0, common_1.Query)("title")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GameController.prototype, "getGameByTitle", null);
GameController = __decorate([
    (0, common_1.Controller)("game"),
    __metadata("design:paramtypes", [game_service_1.GameService])
], GameController);
exports.GameController = GameController;
//# sourceMappingURL=game.controller.js.map