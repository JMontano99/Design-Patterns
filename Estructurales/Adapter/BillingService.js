"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingService = void 0;
const NotificationManager_1 = require("./NotificationManager");
const ExternalNotificationService_1 = require("./ExternalNotificationService");
class BillingService {
    constructor() {
        this.notificationManager = NotificationManager_1.NotificationManager.getSingleInstance();
        this.externalServices = new ExternalNotificationService_1.ExternalNotificationService();
    }
    notifyPaymentDue(studentEmail) {
        // Lógica para verificar el estado de pago...
        console.log(`Notificación de pago enviada a: ${studentEmail}`);
        // Notificación de vencimiento de pago
        this.notificationManager.notifyByEmail('Tu pago de colegiatura está próximo a vencer', studentEmail);
        this.externalServices.notifyExternalTelegram('7283909282', 'Urge que pagues');
    }
}
exports.BillingService = BillingService;
