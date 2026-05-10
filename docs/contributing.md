# Contributing

## Development Principles

- Keep architecture modular
- Avoid mixing UI and business logic
- Prefer reusable components
- Maintain consistent naming
- Keep commits focused and descriptive

---

## Backend Guidelines

- Controllers should remain thin
- Business logic belongs in services
- Middleware should stay reusable
- Secrets must never be committed
- Use environment variables for configuration

---

## Frontend Guidelines

- Use shared theme tokens
- Prefer reusable UI primitives
- Keep screens organized by feature
- Avoid duplicated styles
- Maintain responsive layouts

---

## Git Workflow

Recommended commit style:

```txt
feat: add authentication flow
fix: resolve login validation issue
refactor: improve theme token structure
```

---

## Future Goals

- Automated testing
- CI/CD pipelines
- Shared component library
- Monorepo tooling
- Documentation expansion
