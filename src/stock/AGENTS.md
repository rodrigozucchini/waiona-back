# Stock Module Guidelines

## Scope
Applies to all files under `src/stock/`.

## Purpose
Stock management: entities, DTOs, and admin API for stock, stock parameters, movements, and losses.

## Conventions
- Keep DTOs under `dto/` and entities under `entities/`.
- Admin API lives under `admin/` (controller, service, module). Routes use `/admin/stock`, `/admin/stock-parameters`, `/admin/stock-movements`, `/admin/stock-losses`.
- Validate inputs with class-validator; align optional fields with `@IsOptional()`.
- Enums `StockMovementType` and `StockLossReason` in `src/common/enums` must match database enum definitions.
- Changes here should be coordinated with inventory/business rules.

## Key Files
- `stock.module.ts`
- `admin/stock.admin.module.ts`
- `admin/stock.admin.controller.ts`
- `admin/stock.admin.service.ts`
- `dto/`
- `entities/`
