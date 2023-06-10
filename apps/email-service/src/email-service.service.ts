import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailServiceService {
  sendEmail(data: any): string {
    console.log(data);
    return 'Email sent';
  }
}
