import { describe, expect, it } from 'vitest'

import { filterTasks } from '@/lib/filterTasks'
import type { Task, TaskFilters } from '@/types/task.types'

const tasks: Task[] = [
  {
    id: 'task-1',
    title: 'Finish dashboard',
    description: 'Wrap up the remaining UI details.',
    status: 'in_progress',
    priority: 'high',
    owner: 'Adrian Nistor',
    dueDate: '2026-04-02',
    createdAt: '2026-03-24',
    isMock: true,
  },
  {
    id: 'task-2',
    title: 'Centralise types',
    description: 'Move shared types into one place.',
    status: 'todo',
    priority: 'medium',
    owner: 'Ioana Popescu',
    dueDate: '2026-04-05',
    createdAt: '2026-03-26',
    isMock: true,
  },
  {
    id: 'task-3',
    title: 'Finalize analytics event mapping',
    description: 'Finish the event map for the main task actions.',
    status: 'done',
    priority: 'low',
    owner: 'Mihai Georgescu',
    dueDate: '2026-03-28',
    createdAt: '2026-03-20',
    isMock: true,
  },
]

const defaultFilters: TaskFilters = {
  search: '',
  status: 'all',
  priority: 'all',
  owner: 'all',
}

describe('filterTasks', () => {
  it('returns all tasks when no filters are active', () => {
    expect(filterTasks(tasks, defaultFilters)).toHaveLength(3)
  })

  it('matches tasks by normalized search across multiple fields', () => {
    expect(filterTasks(tasks, { ...defaultFilters, search: '  ioana ' })).toEqual([tasks[1]])
    expect(filterTasks(tasks, { ...defaultFilters, search: '2026-03-28' })).toEqual([tasks[2]])
    expect(filterTasks(tasks, { ...defaultFilters, search: 'high' })).toEqual([tasks[0]])
  })

  it('combines search, status, priority, and owner filters', () => {
    expect(
      filterTasks(tasks, {
        search: 'types',
        status: 'todo',
        priority: 'medium',
        owner: 'Ioana Popescu',
      }),
    ).toEqual([tasks[1]])
  })
})
