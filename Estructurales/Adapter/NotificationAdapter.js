"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacionAdapter = void 0;
const ExternalNotificationService_1 = require("./ExternalNotificationService");
class NotificacionAdapter {
    constructor(externalService) {
        this.externalService = new ExternalNotificationService_1.ExternalNotificationService();
    }
    sendNotification(message, recipient) {
        this.externalService.notifyExternalTelegram;
    }
}
exports.NotificacionAdapter = NotificacionAdapter;
