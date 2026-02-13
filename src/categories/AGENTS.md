# Categories Module Guidelines

## Scope
Applies to all files under `src/categories/`.

## Purpose
Admin CRUD for categories with TypeORM entities and controllers.

## Conventions
- Admin routes live under `/admin/categories`.
- Keep DTOs, services, and controllers aligned with module boundaries.
- Use shared enums/interfaces from `src/common/` when possible.
- Update this file when new endpoints are added.

## Key Files
- `categories.module.ts`
- `admin/categories.admin.controller.ts`
- `entities/`

## Sync Note
- Last reviewed with JWT/auth + avatar updates.
