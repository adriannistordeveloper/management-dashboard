import type { Task, TaskStatus } from '../types/task.types'

const statusOrder: TaskStatus[] = ['todo', 'in_progress', 'done']

export const groupTasksByStatus = (tasks: Task[]) =>
  statusOrder
    .map((status) => ({
      status,
      tasks: tasks.filter((task) => task.status === status),
    }))
    .filter((group) => group.tasks.length > 0)
