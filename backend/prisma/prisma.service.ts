import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: [{
        emit: 'event',
        level: 'query'
      }]
    });
    
  }

  
  async onModuleInit(): Promise<void> {
    await this.$connect();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$on('query', async (e) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      console.log(`${e.query} ${e.params}`);
    });
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async (event) => {
      console.log(event.name);
      await app.close();
    });
  }
}

export class TestService {
  constructor(prismaService: PrismaService) {
    console.log(prismaService)
    if(prismaService != undefined) {
    prismaService.$on<any>('query', (event: Prisma.QueryEvent) => {
      console.log('Query: ' + event.query);
      console.log('Duration: ' + event.duration + 'ms');
    });
  }
  }
}