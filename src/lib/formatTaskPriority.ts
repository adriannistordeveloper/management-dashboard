import type { TaskPriority } from '@/types/task.types'

export const formatTaskPriority = (priority: TaskPriority) => {
  if (priority === 'high') {
    return 'High'
  }

  if (priority === 'medium') {
    return 'Medium'
  }

  return 'Low'
}
