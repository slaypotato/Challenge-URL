import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type URLDocument = URL & Document;

@Schema()
export class URL {
    @Prop()
    _id: string;

    @Prop()
    url: string;

    @Prop()
    count: number;
}

export const URLSchema = SchemaFactory.createForClass(URL)