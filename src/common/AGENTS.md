# Common Module Guidelines

## Scope
Applies to all files under `src/common/`.

## Purpose
Shared enums/entities and cross-cutting helpers used by multiple modules.

## Conventions
- Only add items here if used by 2+ modules.
- Keep enums in `enums/` and shared entities in `entities/`.
- Avoid feature-specific logic; keep this folder dependency-light.

## Current Shared Model Notes
- `PersonEntity` includes optional `avatarUrl` and is reused by users/auth-related flows.
- Changes to shared enums/entities must be synchronized with DTO validation and migrations.

## Key Files
- `common-module.ts`
- `enums/`
- `entities/`
