# Task Management Dashboard

A React + TypeScript dashboard for managing tasks with mock data, filtering, sorting, a dedicated details panel, and CRUD flows.

## Stack

- React
- TypeScript
- Zustand
- Vite
- Vitest

## Features

- Task list with seeded mock data
- Search across title, description, owner, status, and dates
- Filter by status and owner
- Sort by due date, title, and created date
- Task details panel for the selected task
- Create, edit, and delete task flows
- Quick status updates from the task card and details panel
- List and board views
- `localStorage` persistence for tasks, filters, sorting, selection, and view mode
- Explicit loading, error, empty, and filtered-empty states
- Small test suite for the core filtering, sorting, and grouping logic

## What's next

- Priority tags and filtering, for example `minor`, `major`, and `critical`
- Draggable cards in board view

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Architecture notes

- `src/components`
  Task-focused presentational components, each colocated with its own `style.tsx`
- `src/hooks`
  Reusable interaction hooks such as toast handling, modal focus trapping, and dismissible menus
- `src/store`
  Shared Zustand state and dashboard actions
- `src/api`
  Mock async repository layer and seeded task data
- `src/lib`
  Pure helpers for formatting, filtering, sorting, and task grouping
- `src/types`
  Shared domain and UI-related types

## Implementation choices

- Zustand is used for shared dashboard state such as tasks, selection, filters, sorting, view mode, and CRUD actions.
- The mock repository is separated from components so the UI is not coupled to where data comes from.
- Filtering and sorting are implemented as pure functions to keep business logic out of presentational components.
- The UI is split into small task-focused components, each colocated with its own styles.
- Persistent state is stored in `localStorage` so refreshes keep the current dashboard state while still allowing a reset back to the seeded mock data.
- Tests focus on the pure business-logic layer instead of broad UI snapshots.

## Scope

This version focuses on the requested MVP and uses a mock async repository instead of a real backend. The seeded tasks are clearly labeled in the UI as mock items.
