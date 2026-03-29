import { filterTasks } from '../lib/filterTasks'
import { sortTasks } from '../lib/sortTasks'
import { useTasksStore } from '../store/useTasksStore'

export const useVisibleTasks = () => {
  const tasks = useTasksStore((state) => state.tasks)
  const filters = useTasksStore((state) => state.filters)
  const sort = useTasksStore((state) => state.sort)

  return sortTasks(filterTasks(tasks, filters), sort)
}
