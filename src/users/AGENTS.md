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

## Key Files
- `users.module.ts`
- `client/`
- `admin/`
- `entities/`
