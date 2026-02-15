# Categories Module Guidelines

## Scope
Applies to all files under `src/categories/`.

## Purpose
Admin CRUD for categories with TypeORM entities and controllers.

## Conventions
- Admin routes live under `/admin/categories`.
- Client read routes live under `/client/categories` (GET list and GET by id, where detail returns children and related products).
- Category admin CRUD endpoints are JWT-protected with `AuthGuard('jwt')`.
- Keep DTOs, services, and controllers aligned with module boundaries.
- Use shared enums/interfaces from `src/common/` when possible.
- Update this file when new endpoints are added.

## Key Files
- `categories.module.ts`
- `admin/categories.admin.controller.ts`
- `entities/`

## Sync Note
- Last reviewed with admin category CRUD + client read-only endpoints (including category detail with children/products) and DTO/entity alignment.
