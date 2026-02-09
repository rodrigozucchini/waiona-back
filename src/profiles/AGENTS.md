# Profiles Module Guidelines

## Scope
Applies to all files under `src/profiles/`.

## Purpose
Profile management split into admin and client contexts.

## Conventions
- Keep admin profile logic under `admin/` and client profile logic under `client/`.
- Any new endpoints must respect `/admin/...` or `/client/...` namespaces.
- Reuse DTOs and shared enums from `src/common/` where possible.

## Key Files
- `profiles.module.ts`
- `admin/`
- `client/`
