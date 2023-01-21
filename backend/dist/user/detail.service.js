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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
const runtime_1 = require("@prisma/client/runtime");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async editUser(userId, userName, password) {
        console.log(userName);
        const hash = await argon.hash(password);
        const user = await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                username: String(userName),
                hash: String(hash),
            },
        });
        delete user.hash;
        return user;
    }
    async addPaymentMethod(user, card_number, expiration_date, description) {
        const pay = await this.prisma.payment_method.create({
            data: {
                description: String(description),
                card_number: String(card_number),
                expiration_date: String(expiration_date),
                user: {
                    connect: { id: Number(user.id) },
                }
            }
        });
        return { message: "Payment method added" };
    }
    ;
    async AddGame(user, game_id) {
        console.log(user);
        const game = await this.prisma.game.update({
            where: {
                id: Number(game_id),
            },
            data: {
                user: {
                    connect: {
                        id: Number(user.id),
                    }
                }
            }
        });
        return { message: "Game added" };
    }
    ;
    async removeGame(user, game_id) {
        const game = await this.prisma.game.update({
            where: {
                id: Number(game_id),
            },
            data: {
                user: {
                    disconnect: {
                        id: Number(user.id),
                    }
                }
            }
        });
        return { message: "Game removed" };
    }
    ;
    async addRating(userId, game_id, rating, comment) {
        if (comment === "") {
            const user = await this.prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    ratings: {
                        create: {
                            game_id: Number(game_id),
                            rating: Number(rating),
                        }
                    }
                }
            });
        }
        else {
            const user = await this.prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    ratings: {
                        create: {
                            game_id: Number(game_id),
                            rating: Number(rating),
                            comment: String(comment),
                        }
                    }
                }
            });
        }
        return { message: "Rating added" };
    }
    ;
    async removeRating(userId, game_id) {
        const user = await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                ratings: {
                    deleteMany: {
                        game_id: Number(game_id),
                    }
                }
            }
        });
        return { message: "Rating removed" };
    }
    ;
    async getRatings(userId) {
        const userRatings = this.prisma.ratings.findMany({
            where: {
                user: {
                    id: Number(userId),
                }
            },
        });
        return userRatings;
    }
    ;
    async addTransaction(userId, game_id, payment_method) {
        const user = await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                transactions: {
                    create: {
                        game_id: Number(game_id),
                        payment_method_id: String(payment_method),
                    }
                }
            }
        });
        return { message: "Transaction added" };
    }
    ;
    async addToCart(userId, game_id) {
        const validate = await this.prisma.cart.findMany({
            where: {
                user_id: Number(userId),
            }
        });
        for (let i = 0; i < validate.length; i++) {
            if (validate[i].game_id === Number(game_id)) {
                return { message: "Already added to cart" };
            }
        }
        const user = await this.prisma.cart.create({
            data: {
                user: { connect: { id: Number(userId) } },
                game: { connect: { id: Number(game_id) } },
            }
        });
        return { message: "Game added to cart" };
    }
    ;
    async removeFromCart(userId, game_id) {
        const user = await this.prisma.cart.deleteMany({
            where: {
                user_id: Number(userId),
                game_id: Number(game_id),
            }
        });
        return { message: "Game removed from cart" };
    }
    ;
    async getCart(userId) {
        const userCart = this.prisma.cart.findMany({
            where: {
                user: {
                    id: Number(userId),
                }
            },
        });
        return userCart;
    }
    ;
    async getGames(userId) {
        const userGame = this.prisma.game.findMany({
            where: {
                user: {
                    some: {
                        id: Number(userId),
                    }
                }
            },
        });
        return userGame;
    }
    async getPaymentMethods(user) {
        const userPaymentMethods = this.prisma.payment_method.findMany({
            where: {
                user: {
                    id: Number(user),
                }
            },
        });
        return userPaymentMethods;
    }
    async getTransactions(user) {
        const userTransactions = this.prisma.transactions.findMany({
            where: {
                user: {
                    id: Number(user),
                }
            },
            include: {
                game: true
            }
        });
        return userTransactions;
    }
    async getFriendList(user) {
        try {
            const friend = await this.prisma.friend_list.findMany({
                where: {
                    a_id: Number(user.id),
                    accepted: true
                },
                include: {
                    b: true
                }
            });
            return friend;
        }
        catch (error) {
            if (error instanceof
                runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
    }
    async getFriendRequest(user) {
        try {
            const friend = await this.prisma.friend_list.findMany({
                where: {
                    a_id: Number(user.id),
                    accepted: false
                },
            });
            return friend;
        }
        catch (error) {
            if (error instanceof
                runtime_1.PrismaClientKnownRequestError)
                throw error;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=detail.service.js.map