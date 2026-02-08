# Auth Module Guidelines

## Scope
Applies to all files under `src/auth/`.

## Purpose
Provides authentication wiring (module configuration and any future guards/strategies).

## Conventions
- Keep auth wiring in `auth.module.ts`; place new guards/strategies under `src/auth/` if introduced.
- Reuse shared decorators/enums from `src/common/` instead of redefining them.
- Any new endpoints must follow the client/admin namespace pattern and document routes in module `AGENTS.md`.

## Key Files
- `auth.module.ts`
