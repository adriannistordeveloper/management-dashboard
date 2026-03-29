import type { TaskStatus } from '../types/task.types'

const statusLabels: Record<TaskStatus, string> = {
  todo: 'To do',
  in_progress: 'In progress',
  done: 'Done',
}

export const formatTaskStatus = (status: TaskStatus) => statusLabels[status]
