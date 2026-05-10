# Security Guidelines

## Environment Variables

Never commit:
- API keys
- JWT secrets
- database credentials
- Twilio tokens
- Supabase service keys

Use `.env` files instead.

Example:

```env
SUPABASE_URL=
SUPABASE_ANON_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
JWT_SECRET=
```

---

## Authentication

Recommendations:
- Use JWT expiration
- Store tokens securely
- Validate OTP expiration
- Rate limit OTP endpoints
- Prevent brute-force attacks

---

## Backend Security

- Validate request payloads
- Sanitize user input
- Use middleware for auth protection
- Separate public and private routes
- Log suspicious activity

---

## Database Rules

- Use row-level security
- Restrict admin actions
- Prevent unauthorized reads/writes
- Validate ownership before updates

---

## Production Goals

Future improvements:
- refresh tokens
- audit logs
- session tracking
- device management
- encrypted storage
- monitoring and alerts
