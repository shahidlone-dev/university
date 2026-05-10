# Database Schema Planning

## Core Entities

### Users

```txt
users
- id
- full_name
- username
- phone
- avatar_url
- bio
- role
- created_at
```

---

### Profiles

```txt
profiles
- id
- user_id
- department
- semester
- skills
- social_links
```

---

### Posts

```txt
posts
- id
- author_id
- type
- content
- media_url
- visibility
- created_at
```

Post types:
- text
- image
- video

---

### Comments

```txt
comments
- id
- post_id
- author_id
- content
- created_at
```

---

### Likes

```txt
likes
- id
- user_id
- post_id
```

---

### Messages

```txt
messages
- id
- sender_id
- receiver_id
- content
- media_url
- created_at
```

---

### Notifications

```txt
notifications
- id
- user_id
- type
- payload
- is_read
- created_at
```

---

## Future Systems

Planned additions:
- campus groups
- events
- AI recommendations
- moderation systems
- analytics
- realtime presence
