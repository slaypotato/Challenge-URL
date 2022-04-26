import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type URLDocument = URL & Document;

@Schema()
export class URL {
    @Prop({required: true})
    _id: string;

    @Prop({required: true})
    url: string;

    @Prop({required: true})
    count: number;

    @Prop({required: false})
    __v: number;
}

export const URLSchema = SchemaFactory.createForClass(URL)