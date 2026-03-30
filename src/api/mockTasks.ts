import type { Task } from '../types/task.types'

export const mockTasks: Task[] = [
  {
    id: 'task-001',
    title: 'Finish dashboard',
    description: 'Wrap up the remaining UI details.',
    status: 'in_progress',
    owner: 'Adrian Nistor',
    dueDate: '2026-04-02',
    createdAt: '2026-03-24',
    isMock: true,
  },
  {
    id: 'task-002',
    title: 'Centralise types',
    description: 'Move shared types into one place.',
    status: 'todo',
    owner: 'Ioana Popescu',
    dueDate: '2026-04-05',
    createdAt: '2026-03-26',
    isMock: true,
  },
  {
    id: 'task-003',
    title: 'Finalize analytics event mapping',
    description: 'Finish the event map for the main task actions.',
    status: 'done',
    owner: 'Mihai Georgescu',
    dueDate: '2026-03-28',
    createdAt: '2026-03-20',
    isMock: true,
  },
]
