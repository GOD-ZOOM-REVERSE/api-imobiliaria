import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { ImobiliariasService } from './imobiliaria.service';
import { Imobiliaria } from './interfaces/imobiliaria.interface';

const mockImobiliaria = {
  title: 'Imobiliaria #1',
  description: 'Description #1',
  address: 'Address #1',
  price: 100000,
  type: 'HOME',
};

const imobiliariasArray = [
  {
    title: 'Imobiliaria #1',
    description: 'Description #1',
    address: 'Address #1',
    price: 100000,
    type: 'HOME',
  },
  {
    title: 'Imobiliaria #2',
    description: 'Description #2',
    address: 'Address #2',
    price: 500000,
    type: 'APARTMENT',
  },
];

describe('ImobiliariaService', () => {
  let service: ImobiliariasService;
  let model: Model<Imobiliaria>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ImobiliariasService,
        {
          provide: 'IMOBILIARIA_MODEL',
          useValue: {
            new: jest.fn().mockResolvedValue(mockImobiliaria),
            constructor: jest.fn().mockResolvedValue(mockImobiliaria),
            find: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get(ImobiliariasService);
    model = module.get<Model<Imobiliaria>>('IMOBILIARIA_MODEL');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all imobiliarias', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(imobiliariasArray),
    } as any);
    const imobiliarias = await service.findAll();
    expect(imobiliarias).toEqual(imobiliariasArray);
  });

  it('should insert a new imobiliaria', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        title: 'Imobiliaria #1',
        description: 'Description #1',
        address: 'Address #1',
        price: 100000,
        type: 'HOME',
      } as any),
    );
    const newImobiliaria = await service.create({
      title: 'Imobiliaria #1',
      description: 'Description #1',
      address: 'Address #1',
      price: 100000,
      type: 'HOME',
    });
    expect(newImobiliaria).toEqual(mockImobiliaria);
  });
});