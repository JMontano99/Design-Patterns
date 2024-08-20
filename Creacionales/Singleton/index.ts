
import { EnrollmentService } from './EnrollmentService';
import { BillingService } from './BillingService';

const inscriptionService = new EnrollmentService();
const billingSer = new  BillingService();
const contactMail = 'alberto@axity.com';

inscriptionService.enrollStudent(contactMail);
billingSer.notifyPaymentDue(contactMail);
