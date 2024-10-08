
import { NotificationManager } from './NotificationManager';
import { ExternalNotificationService } from './ExternalNotificationService';


export class BillingService {
    private notificationManager: NotificationManager;
    private externalServices: ExternalNotificationService;

    constructor() {
        this.notificationManager = NotificationManager.getSingleInstance();
        this.externalServices = new ExternalNotificationService();
    }

    public notifyPaymentDue(studentEmail: string): void {
        // Lógica para verificar el estado de pago...
        console.log(`Notificación de pago enviada a: ${studentEmail}`);

        // Notificación de vencimiento de pago
        this.notificationManager.notifyByEmail('Tu pago de colegiatura está próximo a vencer', studentEmail);
        this.externalServices.notifyExternalTelegram('7283909282','Urge que pagues');
    }
}

