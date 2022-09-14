"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const error_handler_1 = __importDefault(require("./handlers/error.handler"));
const multerImageUpload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const extension = path_1.default.extname(file.originalname);
        const extensions = ['.jpg', '.jpeg', '.png'];
        if (!extensions.includes(extension)) {
            cb(new error_handler_1.default(400, 'File format not supported'));
            return;
        }
        cb(null, true);
    },
    limits: { fileSize: 5 * 1024 * 1024 },
});
exports.default = multerImageUpload;
