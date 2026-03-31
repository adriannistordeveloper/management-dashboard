export type TaskStatus = 'todo' | 'in_progress' | 'done'
export type TaskPriority = 'low' | 'medium' | 'high'

export type TaskSortField = 'title' | 'dueDate' | 'createdAt' | 'priority'
export type SortDirection = 'asc' | 'desc'
export type TasksViewMode = 'list' | 'board'

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  owner: string
  dueDate: string
  createdAt: string
  isMock?: boolean
}

export interface TaskFormValues {
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  owner: string
  dueDate: string
}

export interface TaskFilters {
  search: string
  status: TaskStatus | 'all'
  priority: TaskPriority | 'all'
  owner: string | 'all'
}

export interface TaskSort {
  field: TaskSortField
  direction: SortDirection
}
