import type { Task, TaskFilters } from '@/types/task.types'

const normalize = (value: string) => value.trim().toLowerCase()

export const filterTasks = (tasks: Task[], filters: TaskFilters): Task[] => {
  const searchQuery = normalize(filters.search)

  return tasks.filter((task) => {
    const matchesSearch =
      searchQuery.length === 0 ||
      [
        task.title,
        task.description,
        task.owner,
        task.status,
        task.dueDate,
        task.createdAt,
      ]
        .map(normalize)
        .some((value) => value.includes(searchQuery))

    const matchesStatus = filters.status === 'all' || task.status === filters.status
    const matchesOwner = filters.owner === 'all' || task.owner === filters.owner

    return matchesSearch && matchesStatus && matchesOwner
  })
}
