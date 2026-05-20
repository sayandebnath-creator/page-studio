# Required dependencies
npm install @reduxjs/toolkit react-redux zod contentful clsx tailwind-merge lucide-react

npm install @dnd-kit/core @dnd-kit/sortable

npm install -D vitest @testing-library/react @testing-library/jest-dom


# For testing packages
npm install -D playwright @playwright/test @axe-core/playwright

npx playwright install

# Added new folders
app/
components/
  sections/
  studio/
  ui/
features/
lib/
registry/
schemas/
store/
types/

# created pages :-
types/
schemas/
componenets/sections/
registry/
app/

# Now have the hardest foundational piece working:

✅ App Router
✅ Typed registry
✅ Dynamic renderer
✅ Preview route
✅ Section rendering architecture

# Next update i did
setup redux
draft slice
provider
layout.tsx in app
create studio route in app (update)

# Now I have:
✅ Redux
✅ Studio editor
✅ Shared renderer
✅ Live preview
✅ WYSIWYG-lite architecture


# Next I did:
created cta reducer and used it in studio
added testimonial section with button for adding testimonial
persist redux state storage

# Added contentful integration

# separated client and server component

# added RBAC role permissions nad middleware

# Now you satisfy:

✅ protected publish endpoint
✅ publish workflow
✅ versioning logic foundation

# Immutable Release Snapshots
You now officially satisfy:

✅ immutable release snapshots
✅ versioned releases
✅ changelog summary
✅ SemVer logic
✅ publish endpoint

# Hydration error
The issue was that dynamically generated IDs (crypto.randomUUID()) caused the server-rendered HTML and client-rendered HTML to differ during hydration.

# NOW TEST STARTS:-
playwright.config.ts
## preview smoke test
tests/e2e/preview.spec.ts
## cta test
tests/e2e/cta.spec.ts
## Accessibility test
tests/e2e/a11y.spec.ts

# RUN TESTS
npx playwright test

# PROBLEMS:-
- Invalid URL issue — Playwright could not connect because the local Next.js server/base URL was not configured correctly.
- CTA test issue — the selector matched multiple links, causing Playwright strict mode failure.
- Accessibility issue — the app was missing a <title> tag, triggering an axe WCAG violation.

# This is my line
I implemented automated end-to-end and accessibility testing using Playwright and axe-core, while manually validating RBAC, publishing flow, and studio interactions.

# NOW added Github actions

# start-server-and-test:
starts Next.js
waits until localhost responds
THEN runs Playwright

# ALL TOGETHER THE COMPLETED POINTS ARE:-
✅ schema-driven renderer
✅ centralized registry
✅ Zod validation
✅ Contentful integration
✅ Redux editor
✅ live preview
✅ section reordering
✅ RBAC middleware
✅ publish flow
✅ SemVer versioning
✅ immutable snapshots
✅ Playwright tests
✅ axe accessibility tests
✅ GitHub Actions CI
✅ Vercel deployment