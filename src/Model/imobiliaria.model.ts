import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const ImobiliariaModel = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
  },
  title: String,
  description: String,
  address: String,
  price: mongoose.Schema.Types.Decimal128,
  type: {
    type: String,
    enum: ['HOME', 'APARTMENT', 'KITNET']
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});