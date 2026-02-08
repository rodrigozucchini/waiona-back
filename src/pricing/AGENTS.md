# Pricing Module Guidelines

## Scope
Applies to all files under `src/pricing/`.

## Purpose
Admin pricing management: discounts, discount types, taxes, tax types, and margins.

## Conventions
- All pricing admin endpoints live under `/admin/pricing/...`.
- Keep each pricing subdomain in its own folder (`discounts`, `taxes`, etc.).
- Align DTO validation with global `ValidationPipe` and use shared enums where possible.
- If new pricing domains are added, update this file.

## Key Files
- `discounts/`
- `discount-types/`
- `taxes/`
- `tax-types/`
- `margins/`
- `pricing-calculation/`
