# Documento de Contexto - Backend Pizzaria

## Visão geral

Este projeto é uma API backend para um sistema de pizzaria, desenvolvida em Node.js com TypeScript, Express e Prisma. A aplicação lida com autenticação de usuários, cadastro de categorias e organização do domínio em camadas de controller, service e middleware.

## Stack principal

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- JWT para autenticação
- bcryptjs para hash de senhas
- Zod para validação de schemas
- CORS e dotenv

## Estrutura principal

```text
src/
  controllers/
    category/
      CreateCategoryController.ts
    user/
      AuthUserController.ts
      CreateUserController.ts
      DetailUserController.ts
  midllewares/
    isAuthentificated.ts
    validateSchema.ts
  prisma/
    index.ts
  routes.ts
  schemas/
    userSchema.ts
  services/
    category/
      CreateCategoryService.ts
    user/
      AuthUserService.ts
      CreateUserService.ts
      DetailUserService.ts
  server.ts
prisma/
  schema.prisma
  migrations/
```

## Padrão de arquitetura

O projeto foi organizado em camadas para separar responsabilidades:

- Controllers: recebem as requisições HTTP e devolvem respostas.
- Services: executam a regra de negócio.
- Schemas: validam os dados de entrada com Zod.
- Middlewares: verificam autenticação e validação.
- Prisma: centraliza o acesso ao banco de dados.

## Fluxo de autenticação

A autenticação é realizada por JWT.

- O usuário se cadastra em `/users`.
- O login acontece em `/session`.
- O token é validado pelo middleware `isAuthentificated`.
- O endpoint `/me` retorna os dados do usuário autenticado.

## Rotas disponíveis

### Usuários

- `POST /users` - cadastro de novo usuário
- `POST /session` - autenticação do usuário
- `GET /me` - detalhes do usuário autenticado

### Categorias

- `POST /category` - criação de categoria (requer autenticação)

## Entidades do banco

A estrutura principal do Prisma inclui:

### User
- id
- name
- email
- password
- role
- createdAt
- updatedAt

### Category
- id
- name
- createdAt
- updatedAt

### Product
- id
- name
- price
- description
- banner
- disable
- category_id
- createdAt
- updatedAt

### Order
- id
- table
- status
- draft
- name
- createdAt
- updatedAt

### Item
- id
- amount
- order_id
- product_id
- createdAt
- updatedAt

## Regras de negócio observadas

- Usuários têm papel padrão `STAFF` e `ADMIN` é suportado no enum.
- O email do usuário é único.
- Categorias podem estar relacionadas a vários produtos.
- Produtos possuem relacionamento com categoria.
- Orders possuem itens vinculados a produtos.
- O banco utilizou relações com `onDelete: Cascade` em alguns modelos para manter integridade.

## Configuração do servidor

O servidor Express é iniciado em `src/server.ts` e usa:

- `express.json()` para parse de JSON
- `cors()` para permitir requisições de origem cruzada
- `app.use(router)` para registrar as rotas
- middleware de erro genérico para retornar mensagens de erro em formato JSON

## Ambiente

O projeto usa variáveis de ambiente, como por exemplo:

- `PORT`
- configuração de conexão com o banco PostgreSQL
- chaves de autenticação, conforme as próximas implementações

## Observações importantes

- O projeto está em fase inicial de estruturação/backend.
- A geração do Prisma foi configurada para saída em `src/generated/prisma`.
- O comando principal de execução em desenvolvimento é:

```bash
npm run dev
```

## Próximos passos recomendados

1. Completar a configuração de conexão com o banco PostgreSQL.
2. Validar as variáveis de ambiente em um arquivo `.env`.
3. Implementar serviços e rotas para produtos, pedidos e itens.
4. Adicionar testes automatizados para controllers e services.
5. Documentar os endpoints em OpenAPI/Swagger.

## Resumo

Este backend serve como base para um sistema de pizzaria com autenticação e estrutura modular. A organização atual favorece crescimento e manutenção, permitindo expandir rapidamente para novas funcionalidades relacionadas a pedidos, produtos e gestão administrativa.
