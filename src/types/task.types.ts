export type TaskStatus = 'todo' | 'in_progress' | 'done'

export type TaskSortField = 'title' | 'dueDate' | 'createdAt'
export type SortDirection = 'asc' | 'desc'

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  owner: string
  dueDate: string
  createdAt: string
  isMock?: boolean
}

export interface TaskFormValues {
  title: string
  description: string
  status: TaskStatus
  owner: string
  dueDate: string
}

export interface TaskFilters {
  search: string
  status: TaskStatus | 'all'
  owner: string | 'all'
}

export interface TaskSort {
  field: TaskSortField
  direction: SortDirection
}
