"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const health_controller_1 = __importDefault(require("../controllers/health.controller"));
class UserRoute {
    constructor() {
        this.path = '/health';
        this.router = (0, express_1.Router)();
        this.HealthCheckController = new health_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router
            .route(`${this.path}`)
            .get(this.HealthCheckController.checkHealth);
    }
}
exports.default = UserRoute;
