# API Design

## Base URL

```txt
/api
```

---

## Authentication

### Send OTP

```http
POST /api/auth/send-otp
```

Body:

```json
{
  "phone": "+911234567890"
}
```

---

### Verify OTP

```http
POST /api/auth/verify-otp
```

Body:

```json
{
  "phone": "+911234567890",
  "otp": "123456"
}
```

Response:

```json
{
  "token": "jwt_token"
}
```

---

## Users

### Get Current User

```http
GET /api/users/me
```

---

### Update Profile

```http
PATCH /api/users/me
```

---

## Posts

### Create Post

```http
POST /api/posts
```

Supported types:
- text
- image
- video

---

### Fetch Feed

```http
GET /api/posts/feed
```

---

### Like Post

```http
POST /api/posts/:id/like
```

---

### Comment on Post

```http
POST /api/posts/:id/comment
```

---

## Messaging

### Send Message

```http
POST /api/messages
```

---

### Fetch Conversations

```http
GET /api/messages/conversations
```

---

## Future APIs

Planned systems:
- realtime presence
- notifications
- campus groups
- recommendations
- moderation
- AI services
