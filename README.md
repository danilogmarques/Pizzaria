## PostgreSQL

O projeto usa PostgreSQL local na porta `5432` e Prisma como ORM.

1. Crie o banco e defina a senha do usuário `postgres`:

```bash
sudo -u postgres psql
```

No prompt do PostgreSQL:



2. Confirme que `DATABASE_URL` no `.env` contém a senha configurada.

3. Gere o cliente e aplique as tabelas:

```bash
npm run db:generate
npm run db:migrate -- --name create_tables
```

Para abrir o Prisma Studio, use `npm run db:studio`. Para iniciar a API, use `npm run dev`.

 