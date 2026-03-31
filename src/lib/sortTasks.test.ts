import { describe, expect, it } from 'vitest'

import { sortTasks } from '@/lib/sortTasks'
import type { Task, TaskSort } from '@/types/task.types'

const tasks: Task[] = [
  {
    id: 'task-1',
    title: 'Finish dashboard',
    description: 'Wrap up the remaining UI details.',
    status: 'in_progress',
    priority: 'medium',
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
    priority: 'high',
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

const getTitles = (sortedTasks: Task[]) => sortedTasks.map((task) => task.title)

describe('sortTasks', () => {
  it('sorts by due date ascending', () => {
    const sort: TaskSort = { field: 'dueDate', direction: 'asc' }

    expect(getTitles(sortTasks(tasks, sort))).toEqual([
      'Finalize analytics event mapping',
      'Finish dashboard',
      'Centralise types',
    ])
  })

  it('sorts by title descending', () => {
    const sort: TaskSort = { field: 'title', direction: 'desc' }

    expect(getTitles(sortTasks(tasks, sort))).toEqual([
      'Finish dashboard',
      'Finalize analytics event mapping',
      'Centralise types',
    ])
  })

  it('sorts by priority descending', () => {
    const sort: TaskSort = { field: 'priority', direction: 'desc' }

    expect(getTitles(sortTasks(tasks, sort))).toEqual([
      'Centralise types',
      'Finish dashboard',
      'Finalize analytics event mapping',
    ])
  })

  it('does not mutate the original array', () => {
    const originalTitles = getTitles(tasks)

    sortTasks(tasks, { field: 'createdAt', direction: 'desc' })

    expect(getTitles(tasks)).toEqual(originalTitles)
  })
})
