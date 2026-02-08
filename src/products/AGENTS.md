# Products Module Guidelines

## Scope
Applies to all files under `src/products/`.

## Purpose
Admin CRUD for products, plus combos and product images.

## Conventions
- Base admin routes:
  - `/admin/products`
  - `/admin/combos`
  - `/admin/images`
- Keep combos under `combos/` and images under `images/`.
- Entities live in `entities/` and should remain normalized.

## Key Files
- `products.module.ts`
- `admin/`
- `combos/`
- `images/`
- `entities/`
