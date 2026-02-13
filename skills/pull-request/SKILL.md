---
name: pull-request-standard
description: >
  Detailed workflow and conventions for branches, commits, and PRs in this repo.
  Trigger: Use when preparing changes for review, creating branches, committing, or drafting PRs.
license: UNLICENSED
metadata:
  author: @rodrigozucchini
  version: "1.1"
---

## When to Use

Use this skill when:
- Creating branches for new work.
- Writing commit messages and organizing commit history.
- Drafting PR titles and descriptions.

---

## Critical Patterns

- Work on a **feature/fix/chore branch** (do not commit directly on long-lived branches).
- Stage files explicitly with `git add` before committing.
- Use imperative commit messages.
- Every PR body must include **Summary** and **Testing** sections.
- If routes, entities, or workflows changed, update the relevant `AGENTS.md`/skills in the same PR.

### Pattern 1: Branch naming convention

```
<type>/<short-topic>

Examples:
feature/admin-users
fix/stock-dto-validation
chore/update-agents-and-skills
```

### Pattern 2: Commit message convention

```
<Verb in imperative> <short scope>

Examples:
Add admin users endpoints
Fix stock DTO validation
Update AGENTS and skill docs
```

---

## PR Template

```markdown
## Summary
- change 1
- change 2

## Testing
- ✅ <command>
- ⚠️ <command> (if environment limitation)
```
