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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const decorator_1 = require("../decorator");
const jwt_guard_1 = require("../guard/jwt.guard");
const detail_service_1 = require("./detail.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    addGame(userId, game_id) {
        return this.userService.AddGame(userId, game_id);
    }
    transaction(userId, game_id, payment_method) {
        return this.userService.addTransaction(userId.id, game_id, payment_method);
    }
    addPaymentMethod(user, card, exp, description) {
        return this.userService.addPaymentMethod(user, card, exp, description);
    }
    addCart(user, game) {
        return this.userService.addToCart(user.id, game);
    }
    addReview(user, game, rating, comment) {
        return this.userService.addRating(user.id, game, rating, comment);
    }
    getAllReviews(user) {
        return this.userService.getRatings(user.id);
    }
    removeReview(user, game) {
        return this.userService.removeRating(user.id, game);
    }
    removeCart(user, game) {
        return this.userService.removeFromCart(user.id, game);
    }
    removeGame(userId, game_id) {
        return this.userService.removeGame(userId, game_id);
    }
    getCart(user) {
        return this.userService.getCart(user.id);
    }
    getMe(user) {
        return user;
    }
    getGames(userId) {
        return this.userService.getGames(userId.id);
    }
    editUser(userId, user, password) {
        return this.userService.editUser(userId.id, user, password);
    }
    getPaymentMethods(user) {
        return this.userService.getPaymentMethods(user.id);
    }
    getTransactions(user) {
        return this.userService.getTransactions(user.id);
    }
    getFriendList(user) {
        return this.userService.getFriendList(user);
    }
    getFriendRequest(user) {
        return this.userService.getFriendRequest(user);
    }
};
__decorate([
    (0, common_1.Post)("addgame"),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)("game")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addGame", null);
__decorate([
    (0, common_1.Post)("addtransaction"),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)("game")),
    __param(2, (0, common_1.Body)("pay_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "transaction", null);
__decorate([
    (0, common_1.Post)("addpaymentmethod"),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)("card")),
    __param(2, (0, common_1.Body)("exp")),
    __param(3, (0, common_1.Body)("description")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addPaymentMethod", null);
__decorate([
    (0, common_1.Post)("addcart"),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)("game")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addCart", null);
__decorate([
    (0, common_1.Post)("review"),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)("game")),
    __param(2, (0, common_1.Body)("rating")),
    __param(3, (0, common_1.Body)("comment")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addReview", null);
__decorate([
    (0, common_1.Get)("allreviews"),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllReviews", null);
__decorate([
    (0, common_1.Delete)("deletereview"),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)("game")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "removeReview", null);
__decorate([
    (0, common_1.Delete)("removecart"),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)("game")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "removeCart", null);
__decorate([
    (0, common_1.Delete)("removegame"),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)("game")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "removeGame", null);
__decorate([
    (0, common_1.Get)("cart"),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getCart", null);
__decorate([
    (0, common_1.Get)("me"),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getMe", null);
__decorate([
    (0, common_1.Get)("games"),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getGames", null);
__decorate([
    (0, common_1.Patch)("update"),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)("name")),
    __param(2, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "editUser", null);
__decorate([
    (0, common_1.Get)("paymentmethods"),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getPaymentMethods", null);
__decorate([
    (0, common_1.Get)("transactions"),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getTransactions", null);
__decorate([
    (0, common_1.Get)("friendlist"),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getFriendList", null);
__decorate([
    (0, common_1.Get)("friendrequest"),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getFriendRequest", null);
UserController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [detail_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=detail.controller.js.map