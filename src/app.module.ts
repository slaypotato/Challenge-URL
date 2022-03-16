import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlStoreModule } from './url-store/url-store.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('DB_URI'),
        auth: {
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASS')
        },
        dbName: 'vcard'
      }),
      inject:[ConfigService]
    }),
    UrlStoreModule
  ],
})
export class AppModule {}
