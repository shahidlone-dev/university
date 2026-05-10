# Backend Guidelines

## Architecture Principles

- Keep business logic inside services
- Controllers should remain lightweight
- Use middleware for reusable validation and authentication
- Keep routes organized by feature
- Avoid tightly coupled modules

---

## Suggested Structure

```txt
backend/src/
├── config/
├── controllers/
├── middlewares/
├── routes/
├── services/
├── utils/
├── sockets/
└── app.js
```

---

## API Standards

Recommendations:
- Use consistent response structures
- Validate all inputs
- Handle errors centrally
- Use proper HTTP status codes
- Keep endpoints RESTful

Example:

```json
{
  "success": true,
  "data": {},
  "message": "Request successful"
}
```

---

## Authentication

Guidelines:
- Protect private routes
- Use JWT expiration
- Validate OTP expiration windows
- Prevent brute-force attempts
- Log suspicious login activity

---

## Database Practices

- Keep queries optimized
- Avoid duplicated data
- Use indexes where needed
- Prefer normalized schema design
- Validate ownership before updates

---

## Scalability Goals

Future improvements:
- websocket infrastructure
- background jobs
- caching layer
- rate limiting
- monitoring system
- microservice separation
