import { Inject, Injectable } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private readonly apiKey: string,
    // @Inject('TASKS') private readonly tasks: any[],
    private config: ConfigService,
  ) {}

  getHello(): string {
    // console.log(this.tasks);
    const apiKey = this.config.get<string>('API_KEY');
    const databaseName = this.config.get<string>('DATABASE_NAME');
    return `Hello World! ${apiKey} ${databaseName}`;
  }
}
