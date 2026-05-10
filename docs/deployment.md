# Deployment Guide

## Backend Deployment

Recommended platforms:
- Railway
- Render
- Fly.io
- VPS/Docker

Environment variables:

```env
PORT=
SUPABASE_URL=
SUPABASE_ANON_KEY=
JWT_SECRET=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
```

Start command:

```bash
npm start
```

---

## Mobile App Deployment

Using Expo:

```bash
npx expo start
```

Android build:

```bash
eas build -p android
```

iOS build:

```bash
eas build -p ios
```

---

## Production Recommendations

- Enable HTTPS
- Store secrets securely
- Monitor backend logs
- Configure rate limiting
- Validate all inputs
- Use environment separation

---

## Future Infrastructure Goals

Planned upgrades:
- CI/CD pipelines
- Docker support
- automated testing
- monitoring dashboards
- cloud storage
- CDN integration
- websocket scaling
