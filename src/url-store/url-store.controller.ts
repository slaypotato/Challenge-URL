import { Controller, Get, Post, Body } from '@nestjs/common';
import { UrlStoreService } from './url-store.service';

@Controller()
export class UrlStoreController {
  constructor(private readonly appService: UrlStoreService) {}

  @Post()
  async postUrl(@Body() { url } ) {
    return this.appService.createURL(url);
  }

  @Get()
  async getURL(@Body() { url } ){
    return this.appService.searchURL(url);
  }
}
