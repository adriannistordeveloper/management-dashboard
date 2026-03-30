import { describe, expect, it } from 'vitest'

import { groupTasksByStatus } from './groupTasksByStatus'
import type { Task } from '../types/task.types'

const tasks: Task[] = [
  {
    id: 'task-1',
    title: 'Finish dashboard',
    description: 'Wrap up the remaining UI details.',
    status: 'in_progress',
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
    owner: 'Mihai Georgescu',
    dueDate: '2026-03-28',
    createdAt: '2026-03-20',
    isMock: true,
  },
]

describe('groupTasksByStatus', () => {
  it('returns groups in todo, in progress, done order', () => {
    expect(groupTasksByStatus(tasks).map((group) => group.status)).toEqual([
      'todo',
      'in_progress',
      'done',
    ])
  })

  it('keeps only non-empty groups', () => {
    expect(groupTasksByStatus(tasks.slice(0, 2)).map((group) => group.status)).toEqual([
      'todo',
      'in_progress',
    ])
  })

  it('keeps the tasks inside each matching status group', () => {
    const groups = groupTasksByStatus(tasks)

    expect(groups[0].tasks).toEqual([tasks[1]])
    expect(groups[1].tasks).toEqual([tasks[0]])
    expect(groups[2].tasks).toEqual([tasks[2]])
  })
})
