import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { URLCreateDocument } from './schemas/url-store-create.schema';
import IURL from './interfaces/url-store.interface';
import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UrlStoreService {
  constructor(@InjectModel(URL.name) private UrlModel: Model<URLCreateDocument>) {}

  async createURL(url: string): Promise<any> {
    const shortened = this.shortener(url);
    const findDB = await this.getURL(shortened);
    if (findDB) {
      //update current +1
      await this.updateURL(findDB._id, { count: findDB.count+1 })
    } else {
      const url = new this.UrlModel({
        _id: uuid(),
        url: shortened,
        count: 1
      })
      url.save()
    }
    return shortened
  }

  async searchURL(url: string): Promise<string> {
    const searched = await this.UrlModel.findOne({url}).exec();
    return searched.url;
  }

  async getURL(url: string): Promise<IURL> {
    const searched: IURL = await this.UrlModel.findOne({url}).exec();
    return searched;
  }

  async updateURL(id: string, url: any): Promise<any> {
    console.log(url);
    return await this.UrlModel.findByIdAndUpdate({ _id: id } , url).exec();
  }

  shortener(url: string): string {
    const short1 = url.split('//').pop();
    const short2 = short1.split('/')[0];
    return short2
  }
}
