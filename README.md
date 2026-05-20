# Page Studio

A schema-driven landing page builder built with Next.js App Router, Redux Toolkit, TypeScript, Contentful, and Playwright.

## Overview

Page Studio enables teams to build, preview, edit, reorder, and publish landing pages using a modular section architecture.

The application supports:
- Dynamic section rendering
- Contentful CMS integration
- Draft editing
- Semantic versioned publishing
- Immutable release snapshots
- RBAC route protection
- Accessibility testing
- CI/CD workflows

---

# Tech Stack

- Next.js 15
- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Contentful CMS
- Zod
- Playwright
- axe-core
- GitHub Actions
- Vercel

---

# Architecture

The application follows a schema-driven architecture.

## Core Concepts

### Section Registry

All page sections are mapped through a centralized registry.

```ts
sectionRegistry = {
  hero: HeroSection,
  cta: CTASection,
}
```

This enables:
- Dynamic rendering
- CMS-driven composition
- Extensible modular sections

---

## Schema Validation

Zod schemas validate page payloads before rendering.

This protects:
- CMS data integrity
- Runtime rendering
- Type safety boundaries

---

## Contentful Integration

Contentful acts as the headless CMS.

### Content Models

#### Page
- title
- slug
- sections

#### Section
- type
- props

A dedicated adapter layer isolates CMS logic from UI rendering.

---

# Studio Editor

The studio route supports:
- Hero editing
- CTA editing
- Section creation
- Drag-and-drop reordering
- Draft persistence

Redux Toolkit manages editor state.

---

# RBAC

Middleware-based RBAC protects studio routes.

Supported roles:
- viewer
- editor
- publisher

Viewers are redirected away from studio routes.

---

# Publish Flow

Publishing generates:
- Semantic version increments
- Immutable release snapshots
- Changelog metadata

Release snapshots are stored as versioned JSON files.

Example:

```txt
releases/home/1.1.0.json
```

---

# Accessibility

Accessibility validation is performed using:
- Playwright
- axe-core

Focus states and semantic labels are included throughout the editor.

---

# Testing

End-to-end tests validate:
- Preview rendering
- CTA visibility
- Accessibility compliance

Run tests:

```bash
npm run test:e2e
```

---

# CI/CD

GitHub Actions automatically:
- installs dependencies
- runs linting
- builds application
- executes Playwright tests

Deployment is handled via Vercel.

---

# Local Development

## Install

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Run Tests

```bash
npm run test:e2e
```

---

# Environment Variables

Create:

```txt
.env.local
```

Add:

```env
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_PREVIEW_TOKEN=
CONTENTFUL_ENVIRONMENT=master
```

---

# Deployment

The application is deployed on Vercel.

---

# Tradeoffs

Some implementation decisions were intentionally simplified to prioritize delivery speed and maintain architectural clarity:

- Cookie-based RBAC instead of full authentication
- Simplified SemVer diffing logic
- Local filesystem release snapshots
- Minimal CMS modeling strategy

These decisions kept the system extensible while remaining implementation-efficient.

---

# Future Improvements

- Real authentication
- More advanced SemVer diffing
- Collaborative editing
- Section-level permissions
- Release rollback UI
- Visual diff tooling