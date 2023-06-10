import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('EMAIL_SERVICE') private emailService: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  sendMessage(data: any): string {
    this.emailService.emit('send_email', data);

    return 'Message sent';
  }
}
