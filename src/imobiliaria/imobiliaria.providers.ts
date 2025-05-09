import { Connection } from 'mongoose';
import { ImobiliariaModel } from '../Model/imobiliaria.model';

export const imobiliariaProviders = [
  {
    provide: 'IMOBILIARIA_MODEL',
    useFactory: (connection: Connection) => connection.model('Imobiliaria', ImobiliariaModel),
    inject: ['DATABASE_CONNECTION'],
  },
];