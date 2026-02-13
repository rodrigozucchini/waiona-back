# Users Module Guidelines

## Scope
Applies to all files under `src/users/`.

## Purpose
User registration and management for client and admin contexts.

## Conventions
- Client routes live under `/client/users` (registration/profile/password).
- Admin routes live under `/admin/users` (CRUD/status/reset-password).
- Keep shared user entities under `entities/`.
- Ensure DTO validation matches global `ValidationPipe` expectations.
- `UserEntity` depends on `PersonEntity` and `RoleEntity`; maintain relation integrity.

## Current Route Snapshot
- Client:
  - `POST /client/users`
  - `GET /client/users/:id`
  - `PUT /client/users/:id`
  - `PUT /client/users/:id/password`
- Admin:
  - `POST /admin/users`
  - `GET /admin/users`
  - `GET /admin/users/:id`
  - `PUT /admin/users/:id`
  - `PUT /admin/users/:id/status`
  - `PUT /admin/users/:id/reset-password`
  - `DELETE /admin/users/:id`

## Key Files
- `users.module.ts`
- `users.service.ts`
- `client/`
- `admin/`
- `entities/`
