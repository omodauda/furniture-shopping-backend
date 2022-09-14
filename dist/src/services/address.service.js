"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../lib/prisma"));
class UserAddressService {
    constructor() {
        this.address = prisma_1.default.userAddress;
    }
    createAddress(userId, addressData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullName, address, country, postalCode, city } = addressData;
            yield this.address.create({
                data: {
                    userId,
                    fullName,
                    address,
                    country,
                    postalCode,
                    city
                }
            });
        });
    }
    getUserAddress(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.address.findMany({
                where: {
                    userId
                },
                orderBy: [
                    {
                        createdAt: 'desc'
                    }
                ]
            });
        });
    }
    setDefaultAddress(userId, addressId) {
        return __awaiter(this, void 0, void 0, function* () {
            const previousDefault = yield this.address.findFirst({
                where: {
                    userId,
                    isDefault: true
                }
            });
            if (previousDefault) {
                yield this.address.update({
                    where: {
                        id: previousDefault.id
                    },
                    data: {
                        isDefault: false
                    }
                });
            }
            return yield this.address.update({
                where: {
                    id: addressId,
                },
                data: {
                    isDefault: true
                }
            });
        });
    }
}
exports.default = UserAddressService;
