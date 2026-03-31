import type { Task, TaskSort } from '@/types/task.types'

const compareValues = (left: string, right: string) => left.localeCompare(right)

export const sortTasks = (tasks: Task[], sort: TaskSort): Task[] => {
  const sortedTasks = [...tasks].sort((left, right) => {
    if (sort.field === 'title') {
      return compareValues(left.title, right.title)
    }

    if (sort.field === 'dueDate') {
      return compareValues(left.dueDate, right.dueDate)
    }

    return compareValues(left.createdAt, right.createdAt)
  })

  return sort.direction === 'asc' ? sortedTasks : sortedTasks.reverse()
}
