# Task Management Dashboard

A small React + TypeScript dashboard for managing tasks with mock data, filtering, sorting, task details, and CRUD flows.

## Stack

- React
- TypeScript
- Zustand
- Vite

## Features

- Task list with mock data
- Search across title, description, owner, status, and dates
- Filter by status and owner
- Sort by due date, title, and created date
- Task details panel for the selected task
- Create, edit, and delete task flows
- Explicit loading, error, empty, and filtered-empty states

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Architecture notes

- `src/components/tasks`
  Domain-specific UI components for the dashboard
- `src/store`
  Shared Zustand state and actions
- `src/api`
  Mock async repository layer
- `src/lib`
  Pure helpers for formatting, filtering, and sorting
- `src/types`
  Shared domain types

## Implementation choices

- Zustand is used for shared dashboard state such as tasks, selection, filters, sorting, and CRUD actions.
- The mock repository is separated from components so the UI is not coupled to where data comes from.
- Filtering and sorting are implemented as pure functions to keep business logic out of presentational components.
- The UI is split into small task-focused components, each colocated with its own styles.

## Scope

This version focuses on the MVP requested in the assignment and uses mock async data instead of a real backend.
