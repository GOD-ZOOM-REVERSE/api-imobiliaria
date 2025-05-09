# Etapa 1: Build e testes
FROM node:18-alpine AS builder

# Instala dependências essenciais (alpine é minimalista)
RUN apk add --no-cache python3 make g++ git

WORKDIR /app

# Copia apenas arquivos essenciais primeiro (melhor uso de cache)
COPY package*.json ./
RUN npm install

# Copia o resto do código
COPY . .

# Roda os testes
RUN npm run test

# Compila a aplicação
RUN npm run build

# Etapa 2: Imagem final e leve para produção
FROM node:18-alpine AS production

WORKDIR /app

# Copia apenas o build e os node_modules de produção
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Expõe porta e define comando de inicialização
EXPOSE 3000
CMD ["node", "dist/main"]
