import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { URLDocument } from './schemas/url-store.schema';
import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UrlStoreService {
  constructor(@InjectModel(URL.name) private UrlModel: Model<URLDocument>) {}

  async createURL(url: string): Promise<any> {
    const shortened = this.shortener(url);
    const findDB = this.searchURL(shortened);
    if (findDB) {
      //update current +1
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

  async searchURL(url: string): Promise<any> {
    return await this.UrlModel.findOne({url}).exec();
  }

  async updateURL(id: string, url: any): Promise<any> {
    return await this.UrlModel.findByIdAndUpdate(id, url);
  }

  shortener(url: string): string {
    const short1 = url.split('//').pop();
    const short2 = short1.split('/')[0];
    return short2
  }
}
