import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('ImobiliariaController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET /api/v1/imobiliaria/FindAll) Tudo', () => {
    return request(app.getHttpServer() ?? "http://localhost:3000")
      .get('/api/v1/imobiliaria/FindAll')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeDefined();
        expect(Array.isArray(res.body)).toBe(true);
      });
  })
  
  it('/ (POST /api/v1/imobiliaria) Criar', () => {
    return request(app.getHttpServer() ?? "http://localhost:3000")
      .post('/api/v1/imobiliaria')
      .send({
        title: 'Imobiliaria Teste',
        description: 'Testando legal',
        address: 'Rua Teste, 123',
        price: 399.99,
        type: "HOME",
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toBeDefined();
        expect(res.body._id).toBeDefined();
        expect(res.body.title).toBe('Imobiliaria Teste');
        expect(res.body.address).toBe('Rua Teste, 123');
        expect(res.body.price.$numberDecimal).toBe('399.99');
        expect(res.body.type).toBe('HOME');
      });
  });
});
