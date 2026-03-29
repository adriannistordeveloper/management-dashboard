import { useTasksStore } from '../store/useTasksStore'

export const useSelectedTask = () => {
  const tasks = useTasksStore((state) => state.tasks)
  const selectedTaskId = useTasksStore((state) => state.selectedTaskId)

  return tasks.find((task) => task.id === selectedTaskId) ?? null
}
