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
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinary_api_secret
});
class Cloudinary {
    constructor() {
        this.cloud = cloudinary_1.v2;
        this.uploadImage = (image, folder) => __awaiter(this, void 0, void 0, function* () {
            return yield this.cloud.uploader.upload(image.path, {
                folder: `furniture-shopping/${folder}`
            });
        });
        this.deleteImage = (publicId) => __awaiter(this, void 0, void 0, function* () {
            yield cloudinary_1.v2.uploader.destroy(publicId);
        });
    }
}
;
exports.default = Cloudinary;
