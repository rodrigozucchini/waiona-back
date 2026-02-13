---
name: nestjs-standard
description: >
  Detailed standards for working on this NestJS (TypeScript) backend.
  Trigger: Use when implementing, modifying, or reviewing NestJS modules, controllers, services, DTOs, entities, or common utilities.
license: UNLICENSED
metadata:
  author: @rodrigozucchini
  version: "1.1"
---

## When to Use

Use this skill when:
- Creating or updating NestJS modules/controllers/services/DTOs/entities.
- Adjusting API routes, validation, serialization, or auth guards.
- Reviewing architecture, shared enums/interfaces, or project structure.

---

## Critical Patterns

- **Namespace separation**: all routes are either `/client/...` or `/admin/...`.
- **Global validation**: `ValidationPipe` uses whitelist + transform; never trust unchecked payloads.
- **DTO-first**: every request body must have a DTO with explicit validators.
- **Entity base**: TypeORM entities extend `BaseEntity`.
- **No try/catch around imports** (project rule).

### Auth pattern currently used
- Local login uses `AuthGuard('local')` and validates `email/password` through `AuthService`.
- JWT issuance is done by `AuthService.generateToken` with payload `{ sub: user.id }`.
- `JwtStrategy` uses `JWT_SECRET` from env and bearer token extraction.
- Admin modules requiring authentication use `@UseGuards(AuthGuard('jwt'))`.

### Pattern 1: Controller structure (admin vs client)

```ts
@Controller('admin/example')
export class ExampleAdminController {
  constructor(private readonly service: ExampleAdminService) {}

  @Post()
  create(@Body() dto: CreateExampleDto) {
    return this.service.create(dto);
  }
}

@Controller('client/example')
export class ExampleClientController {
  constructor(private readonly service: ExampleClientService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
```

### Pattern 2: DTO validation

```ts
export class CreateExampleDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
```

---

## Project Structure Notes

- `src/common/` holds shared enums/entities/helpers used across modules.
- Reuse common entities/enums before creating new ones.
- Keep new domain modules aligned to: module → controller → service → dto → entity.
- `PersonEntity` includes optional `avatarUrl`; keep DTO/entity/migration consistency.

---

## Decision Tree

```
Is this route admin-only? → Use /admin prefix and admin module
Is this route client-facing? → Use /client prefix and client module
Are you accepting input? → Create/extend DTO with validators
Does this route need auth? → Apply correct guard and strategy
Is this shared logic? → Place it in src/common
Otherwise → Follow existing module/controller/service patterns
```

---

## Commands

```bash
npm run lint
npm run test
npm run start:dev
```
