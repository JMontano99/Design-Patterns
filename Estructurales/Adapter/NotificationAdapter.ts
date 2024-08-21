import { INotificationService } from "./INotificationService";
import { ExternalNotificationService } from "./ExternalNotificationService";
import { NotificationManager } from "./NotificationManager";

export class NotificacionAdapter implements INotificationService{
    
    private externalService: ExternalNotificationService;

    constructor(externalService: ExternalNotificationService){
        this.externalService = new ExternalNotificationService();
    }
    sendNotification(message: string, recipient: string): void {
        this.externalService.notifyExternalTelegram;
    }
}