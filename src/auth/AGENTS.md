# Auth Module Guidelines

## Scope
Applies to all files under `src/auth/`.

## Purpose
Provides authentication wiring (Passport strategies/guards) and login endpoints for admin and client namespaces.

## Conventions
- Keep auth wiring in `auth.module.ts`; place strategies under `src/auth/strategies/`.
- Admin routes under `admin/`, client routes under `client/`.
- Reuse shared entities/enums from `src/common/` and `src/users/` instead of duplicating auth user shapes.
- Any new endpoints must follow the client/admin namespace pattern and update this file.

## Current Auth Flow
- `LocalStrategy` validates `email` + `password` via `AuthService.validateUser`.
- Both login routes use `AuthGuard('local')`.
- `AuthService.generateToken` signs JWT payload `{ sub: user.id }`.
- `JwtStrategy` (`passport-jwt`) validates bearer tokens using `JWT_SECRET` from env.

## Routes
- **Admin**: `/admin/auth/login` — `AuthAdminController`
- **Client**: `/client/auth/login` — `AuthClientController`

## Key Files
- `auth.module.ts`
- `service/auth.service.ts`
- `strategies/local.strategy.ts`
- `strategies/jwt.strategy.ts`
- `admin/auth.admin.controller.ts`
- `client/auth.client.controller.ts`
