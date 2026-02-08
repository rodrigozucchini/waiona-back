# Permissions Module Guidelines

## Scope
Applies to all files under `src/permissions/`.

## Purpose
Permission entities and module wiring that support role-based access.

## Conventions
- Keep permission entities normalized and reference roles/users consistently.
- Reuse shared enums from `src/common/enums` where applicable.
- If new permission logic is added, document it here.

## Key Files
- `permissions.module.ts`
- `entities/`
