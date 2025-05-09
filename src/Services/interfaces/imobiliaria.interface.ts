import { Decimal128, Document } from 'mongoose';

export interface Imobiliaria extends Document {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly address: string;
  readonly price: Decimal128;
  readonly type: 'HOME' | 'APARTMENT' | 'KITNET';
  readonly createdAt: Date;
}