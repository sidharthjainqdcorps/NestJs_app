import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Sid , Complete new nestjs app ,db mongo with some good functionalities!';
  }
}
