import { Controller } from '@nestjs/common';
import { EmailServiceService } from './email-service.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class EmailServiceController {
  constructor(private readonly emailServiceService: EmailServiceService) {}

  @EventPattern('send_email')
  async handleUserCreated(data: Record<string, unknown>) {
    return this.emailServiceService.sendEmail(data);
  }
}
