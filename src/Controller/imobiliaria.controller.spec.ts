import { Test, TestingModule } from '@nestjs/testing';
import { ImobiliariaController } from './imobiliaria.controller';
import { ImobiliariasService } from '../Services/imobiliaria.service';
import { CreateImobiliariaDto } from '../Data/DTOs/create-imobiliaria.dto';

describe('AppController', () => {
  let imobiliariaController: ImobiliariaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ImobiliariaController],
      providers: [
        {
          provide: ImobiliariasService,
          useValue: {
            getAllImobiliarias: jest.fn().mockResolvedValue([{ title: 'Imobiliaria A' }]),
            createImobiliaria: jest.fn().mockResolvedValue({
              title: "Imobiliaria B",
              description: "Description B",
              address: "Address B",
              price: 399.99,
              type: "HOME",
            }),
          },
        },
      ],
    }).compile();

    imobiliariaController = app.get<ImobiliariaController>(ImobiliariaController);
  });

  describe('Get Imóveis', () => {
    it('should return an array of imobiliarias', async () => {
      const result = [{ title: 'Imobiliaria A' }];
      jest.spyOn(imobiliariaController, 'getAllImobiliarias').mockImplementation(async () => result);

      expect(await imobiliariaController.getAllImobiliarias({ filter: 'active', sort: 'asc' } as any, {})).toBe(result);
    });
  });

  describe('Cadastro de imóvel', () => {
    it('Testando o cadastro e o retorno do dado cadastrado', async () => {
      const newImobiliaria: Readonly<CreateImobiliariaDto> = {
        title: "Imobiliaria B",
        description: "Description B",
        address: "Address B",
        price: 399.99,
        type: "HOME",
      };

      const result = {
        ...newImobiliaria,
      };

      jest.spyOn(imobiliariaController, 'createImobiliaria').mockImplementation(async () => result as any);

      expect(await imobiliariaController.createImobiliaria(newImobiliaria)).toBe(result);
    });
  });
});