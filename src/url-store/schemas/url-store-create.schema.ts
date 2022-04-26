import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type URLCreateDocument = CreateURL & Document;

@Schema()
export class CreateURL {
    @Prop()
    _id: string;

    @Prop()
    url: string;

    @Prop()
    count: number;
}

export const URLCreateSchema = SchemaFactory.createForClass(CreateURL)