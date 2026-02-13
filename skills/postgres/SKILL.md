---
name: postgres-standard
description: >
  Detailed PostgreSQL conventions for schema design, seed data, and migrations in this repo.
  Trigger: Use when adding entities, writing SQL scripts, or planning migrations.
license: UNLICENSED
metadata:
  author: @rodrigozucchini
  version: "1.1"
---

## When to Use

Use this skill when:
- Creating or updating TypeORM entities.
- Writing SQL scripts (seed data, fixes, migrations).
- Reviewing database naming, constraints, or data integrity rules.

---

## Critical Patterns

- Keep schema changes as **incremental migrations**.
- Keep `BaseEntity` fields (`id`, `createdAt`, `updatedAt`, `isDeleted`) consistent.
- Keep entity field names and migration SQL column names aligned exactly.
- Verify enum columns match values from `src/common/enums`.

### Recent baseline
- Migration `1769550000000-add-avatar-url-to-persons.ts` adds optional `avatarUrl` to `persons`.
- Use this as reference for small additive migrations.

### Pattern 1: Add nullable column migration

```sql
ALTER TABLE "persons" ADD "avatarUrl" character varying(255);
```

### Pattern 2: Safe rollback

```sql
ALTER TABLE "persons" DROP COLUMN "avatarUrl";
```

---

## Decision Tree

```
New entity/table? → full migration with table + constraints
Small schema change? → focused incremental migration
Data-only change? → SQL script/seed
Otherwise → keep consistency with current schema and naming
```

---

## Commands

```bash
npm run migrations:generate
npm run migrations:show
npm run migrations:run
```
