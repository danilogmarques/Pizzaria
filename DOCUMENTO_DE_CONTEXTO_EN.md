# Project Context Document - Pizzaria Backend

## Overview

This project is a backend API for a pizza restaurant management system, developed with Node.js, TypeScript, Express, and Prisma. The application handles user authentication, category creation, and follows a layered architecture based on controllers, services, and middleware.

## Main technology stack

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- JWT for authentication
- bcryptjs for password hashing
- Zod for schema validation
- CORS and dotenv

## Project structure

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

## Architectural pattern

The project is organized into layers to separate responsibilities cleanly:

- Controllers: receive HTTP requests and return responses.
- Services: contain business logic and data orchestration.
- Schemas: validate incoming data using Zod.
- Middlewares: handle authentication and request validation.
- Prisma: centralizes database access and ORM configuration.

## Authentication flow

Authentication is handled through JWT.

- A user registers through `/users`.
- User login is done through `/session`.
- The generated token is checked by the `isAuthentificated` middleware.
- The `/me` endpoint returns the authenticated user profile.

## Available routes

### Users

- `POST /users` - register a new user
- `POST /session` - authenticate a user
- `GET /me` - return the currently authenticated user

### Categories

- `POST /category` - create a new category (requires authentication)

## Database entities

The Prisma schema currently includes the following main models:

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

## Business rules observed

- Users have a default role of `STAFF`, while `ADMIN` is supported in the enum.
- The user email is unique.
- Categories can be related to multiple products.
- Products are linked to a category.
- Orders can contain multiple items.
- Some associations use `onDelete: Cascade` to maintain data integrity.

## Server configuration

The Express server is initialized in `src/server.ts` and uses:

- `express.json()` for JSON parsing
- `cors()` to allow cross-origin requests
- `app.use(router)` to register routes
- a generic error middleware to return JSON error messages

## Environment and configuration

The project uses environment variables such as:

- `PORT`
- PostgreSQL connection configuration
- authentication secrets and related values depending on the next implementation steps

## Important observations

- The project is in an early backend-structure phase.
- Prisma generation is configured to output to `src/generated/prisma`.
- The main development command is:

```bash
npm run dev
```

## Recommended next steps

1. Complete PostgreSQL connection setup.
2. Validate environment variables in a `.env` file.
3. Implement services and routes for products, orders, and items.
4. Add automated tests for controllers and services.
5. Document API endpoints using OpenAPI/Swagger.

## Summary

This backend provides the foundation for a pizza ordering system with authentication and modular architecture. The current organization supports maintainability and faster growth, making it suitable for expanding into product management, order processing, and administrative features.
