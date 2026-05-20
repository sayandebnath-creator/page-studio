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