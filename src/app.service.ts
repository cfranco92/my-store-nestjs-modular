import { Inject, Injectable } from '@nestjs/common';

import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private readonly apiKey: string,
    @Inject('TASKS') private readonly tasks: any[],
    // private config: ConfigService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    // console.log(this.tasks);

    // const apiKey = this.config.get<string>('API_KEY');
    // const databaseName = this.config.get<string>('DATABASE_NAME');

    const apiKey = this.configService.apiKey;
    const databaseName = this.configService.database.name;

    return `Hello World! ${apiKey} ${databaseName}`;
  }
}
