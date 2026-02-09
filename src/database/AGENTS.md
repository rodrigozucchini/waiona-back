# Database Module Guidelines

## Scope
Applies to all files under `src/database/`.

## Purpose
TypeORM configuration and migrations.

## Conventions
- The running app gets DB config from `ConfigService` (env) in `app.module.ts`; `ormconfig.ts` is used only by the TypeORM CLI for migrations.
- Migrations live in `migrations/` and follow TypeORM naming.
- Use npm scripts (`migrations:generate`, `migrations:run`, `migrations:show`).
- Prefer incremental migrations; only create full migrations when explicitly required.

## Key Files
- `ormconfig.ts`
- `migrations/`
