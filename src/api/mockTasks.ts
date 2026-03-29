import type { Task } from '../types/task.types'

export const mockTasks: Task[] = [
  {
    id: 'task-001',
    title: 'Prepare onboarding flow audit',
    description:
      'Review the current onboarding journey, list UX friction points, and prepare a concise summary for the product review.',
    status: 'in_progress',
    owner: 'Adrian Nistor',
    dueDate: '2026-04-02',
    createdAt: '2026-03-24',
  },
  {
    id: 'task-002',
    title: 'Update dashboard information architecture',
    description:
      'Propose a cleaner grouping for the management dashboard navigation and align the section labels with business terminology.',
    status: 'todo',
    owner: 'Ioana Popescu',
    dueDate: '2026-04-05',
    createdAt: '2026-03-26',
  },
  {
    id: 'task-003',
    title: 'Finalize analytics event mapping',
    description:
      'Map the core task-management interactions to analytics events and flag any missing event properties before implementation.',
    status: 'done',
    owner: 'Mihai Georgescu',
    dueDate: '2026-03-28',
    createdAt: '2026-03-20',
  },
  {
    id: 'task-004',
    title: 'Draft CRUD interaction states',
    description:
      'Document create, edit, delete, loading, error, and empty states so the implementation has a consistent UX reference.',
    status: 'todo',
    owner: 'Adrian Nistor',
    dueDate: '2026-04-07',
    createdAt: '2026-03-27',
  },
]
