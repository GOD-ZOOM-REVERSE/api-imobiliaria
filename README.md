<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Repositório inicial do framework [Nest](https://github.com/nestjs/nest) em TypeScript.

## Instalando pacotes

```bash
$ npm install
```

## Compilar e rodar o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Rudar testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Usando Docker

Certifique-se de ter o Docker instalado em sua máquina. Siga as instruções abaixo para construir e executar o projeto usando Docker.

### Construir a imagem Docker

```bash
$ docker build -t nestjs-app .
```

### Rodar o contêiner Docker

```bash
$ docker run -p 3000:3000 nestjs-app
```

Agora, a aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Usando Docker Compose

Se você preferir usar o Docker Compose, siga as etapas abaixo.

### Criar o arquivo `docker-compose.yml`

Certifique-se de ter um arquivo `docker-compose.yml` no diretório raiz do projeto com o seguinte conteúdo:

```yaml
  imobiliaria:
    image: "mauricio2021/process-seletive-nest:0.1.0"
    restart: always
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - 3000:3000
    depends_on:
      - mongo
    environment:
      - MONGO_URI=mongodb://mongo:27017/nest
    command: npm run start:dev
    volumes:
      - .:/app
      - /app/node_modules
```

### Adicionar MongoDB ao `docker-compose.yml`

Para incluir o MongoDB no `docker-compose.yml`, adicione o seguinte serviço:

```yaml
  mongo:
    image: mongo
    restart: always
    ports:
      - 27017:27017
```

### Conectar ao MongoDB

Certifique-se de que sua aplicação está configurada para se conectar ao MongoDB usando as credenciais e a URL de conexão apropriadas, como `mongodb://root:example@mongo:27017`.

Agora, ao executar `docker-compose up`, o MongoDB será iniciado junto com sua aplicação.

### Subir os serviços

```bash
$ docker-compose up
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Parar os serviços

```bash
$ docker-compose down
```

## Swagger

Para acessar a documentação do swagger, acesse ```/api```

## Resources

Confira alguns recursos que podem ser úteis ao trabalhar com o NestJS:

- Visite a [Documentação do NestJS](https://docs.nestjs.com) para aprender mais sobre o framework.
- Para dúvidas e suporte, acesse nosso [canal no Discord](https://discord.gg/G7Qnnhy).
- Para se aprofundar e obter mais experiência prática, confira nossos [cursos oficiais em vídeo](https://courses.nestjs.com/).
- Faça o deploy da sua aplicação na AWS com a ajuda do [NestJS Mau](https://mau.nestjs.com) em apenas alguns cliques.
- Visualize o gráfico da sua aplicação e interaja com a aplicação NestJS em tempo real usando o [NestJS Devtools](https://devtools.nestjs.com).
- Precisa de ajuda com seu projeto (meio período ou período integral)? Confira nosso [suporte empresarial oficial](https://enterprise.nestjs.com).
- Para se manter atualizado e receber novidades, siga-nos no [X](https://x.com/nestframework) e no [LinkedIn](https://linkedin.com/company/nestjs).
- Procurando um emprego ou tem uma vaga para oferecer? Confira nosso [board oficial de empregos](https://jobs.nestjs.com).

## Suporte

Nest é um projeto de código aberto licenciado sob MIT. Ele pode crescer graças aos patrocinadores e ao apoio de incríveis colaboradores. Se você gostaria de se juntar a eles, por favor, [leia mais aqui](https://docs.nestjs.com/support).

## Mantenha-se em contato

- Autor - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licença

Nest é licenciado sob a [licença MIT](https://github.com/nestjs/nest/blob/master/LICENSE).
