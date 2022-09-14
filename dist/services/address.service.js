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
const user_address_1 = __importDefault(require("../database/models/user_address"));
class UserAddressService {
    createAddress(userId, fullName, address, country, postalCode, city) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(userId);
            // const { full_name, address, country, postal_code, city } = addressData;
            yield user_address_1.default.create({
                userId,
                fullName,
                address,
                country,
                postalCode,
                city
            });
            // await this.address.create({
            //   data: {
            //     userId,
            //     fullName,
            //     address,
            //     country,
            //     postalCode,
            //     city
            //   }
            // });
        });
    }
}
exports.default = UserAddressService;
