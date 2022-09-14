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
const address_service_1 = __importDefault(require("../services/address.service"));
class AddressController {
    constructor() {
        this.UserAddressService = new address_service_1.default();
        this.addAddress = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id: userId } = req.user;
            try {
                const addressData = req.body;
                yield this.UserAddressService.createAddress(userId, addressData);
                return res
                    .status(201)
                    .json({
                    status: 'success',
                    message: 'address saved successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.getUserAddress = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id: userId } = req.user;
            try {
                const address = yield this.UserAddressService.getUserAddress(userId);
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    data: address
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.setDefaultAddress = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id: userId } = req.user;
            const { id: addressId } = req.params;
            try {
                yield this.UserAddressService.setDefaultAddress(userId, addressId);
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    message: 'default address set successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = AddressController;
