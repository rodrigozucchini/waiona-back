# Stock Module Guidelines

## Scope
Applies to all files under `src/stock/`.

## Purpose
Stock entities and DTOs for stock parameters, movements, and losses.

## Conventions
- Keep DTOs under `dto/` and entities under `entities/`.
- Validate inputs with class-validator; align optional fields with `@IsOptional()`.
- Changes here should be coordinated with inventory/business rules.

## Key Files
- `dto/`
- `entities/`
