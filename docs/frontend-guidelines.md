# Frontend Guidelines

## Design Principles

- Keep interfaces clean and minimal
- Prefer reusable components
- Maintain visual consistency
- Avoid hardcoded values
- Use shared theme tokens

---

## Folder Structure

Suggested structure:

```txt
qaaf/
├── app/
├── components/
├── hooks/
├── constants/
├── services/
├── store/
├── utils/
└── assets/
```

---

## Styling

Use the shared theme system:

```ts
import { colors, spacing, typography } from '@qaaf/theme';
```

Avoid:
- inline magic numbers
- duplicated colors
- inconsistent spacing

---

## Components

Guidelines:
- Keep components small
- Prefer composition over duplication
- Separate UI and logic
- Use descriptive prop names
- Reuse primitives when possible

---

## Performance

Recommendations:
- lazy load screens
- optimize images
- minimize re-renders
- memoize expensive components
- avoid unnecessary state updates

---

## Future Goals

Planned improvements:
- shared UI package
- animation system
- accessibility improvements
- dark/light themes
- responsive layouts
- web support
