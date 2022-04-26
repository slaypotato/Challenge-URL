import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { URLCreateSchema } from "./schemas/url-store-create.schema";
import { UrlStoreController } from "./url-store.controller";
import { UrlStoreService } from "./url-store.service";

@Module({
    imports:[
        MongooseModule.forFeature([{ name: URL.name, schema: URLCreateSchema }]),
      ],
    providers:[UrlStoreService],
    controllers: [UrlStoreController]
  })
  export class UrlStoreModule {}