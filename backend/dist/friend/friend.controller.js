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
exports.friendController = void 0;
const common_1 = require("@nestjs/common");
const friend_service_1 = require("./friend.service");
const friend_dto_1 = require("../dto/friend.dto");
let friendController = class friendController {
    constructor(friendService) {
        this.friendService = friendService;
    }
    getUserByUsername(username) {
        return this.friendService.getUserByUsername(username);
    }
    addFriend(dto) {
        console.log(dto);
        return this.friendService.addFriend(dto);
    }
    deleteFriend(id) {
        return this.friendService.deleteFriend(id);
    }
    updateFriend(dto, id) {
        return this.friendService.updateFriend(dto, id);
    }
    getFriendState(a_id, b_id) {
        return this.friendService.getFriendState(a_id, b_id);
    }
};
__decorate([
    (0, common_1.Get)("search"),
    __param(0, (0, common_1.Query)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], friendController.prototype, "getUserByUsername", null);
__decorate([
    (0, common_1.Post)("add"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [friend_dto_1.friendDto]),
    __metadata("design:returntype", void 0)
], friendController.prototype, "addFriend", null);
__decorate([
    (0, common_1.Post)("delete"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], friendController.prototype, "deleteFriend", null);
__decorate([
    (0, common_1.Patch)("update"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)("FriendId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [friend_dto_1.friendDto, Number]),
    __metadata("design:returntype", void 0)
], friendController.prototype, "updateFriend", null);
__decorate([
    (0, common_1.Get)("state"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], friendController.prototype, "getFriendState", null);
friendController = __decorate([
    (0, common_1.Controller)("friend"),
    __metadata("design:paramtypes", [friend_service_1.friendService])
], friendController);
exports.friendController = friendController;
//# sourceMappingURL=friend.controller.js.map