import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { URLSchema } from "./schemas/url-store.schema";
import { UrlStoreController } from "./url-store.controller";
import { UrlStoreService } from "./url-store.service";

@Module({
    imports:[
        MongooseModule.forFeature([{ name: URL.name, schema: URLSchema }]),
      ],
    providers:[UrlStoreService],
    controllers: [UrlStoreController]
  })
  export class UrlStoreModule {}