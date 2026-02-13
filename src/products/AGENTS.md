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
- Product admin controller is protected by `AuthGuard('jwt')`; keep auth changes synchronized with `src/auth`.

## Key Files
- `products.module.ts`
- `admin/`
- `combos/`
- `images/`
- `entities/`
