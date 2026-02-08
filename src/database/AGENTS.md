# Database Module Guidelines

## Scope
Applies to all files under `src/database/`.

## Purpose
TypeORM configuration and migrations.

## Conventions
- Use `ormconfig.ts` as the single source of DB config.
- Migrations live in `migrations/` and follow TypeORM naming.
- Use npm scripts (`migrations:generate`, `migrations:run`, `migrations:show`).
- Prefer incremental migrations; only create full migrations when explicitly required.

## Key Files
- `ormconfig.ts`
- `migrations/`
