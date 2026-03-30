import type { ReactNode } from 'react'

import type {
  Task,
  TaskFilters,
  TaskFormValues,
  TaskSort,
  TaskStatus,
  TasksViewMode,
} from './task.types'

export type ToastTone = 'success' | 'error' | 'destructive'

export type ModalMode = 'create' | 'edit' | null

export type TaskStatusChangeHandler = (task: Task) => (status: TaskStatus) => void

export interface ViewModeToggleProps {
  onChange: (mode: TasksViewMode) => void
  viewMode: TasksViewMode
}

export interface HiddenSelectionStateProps {
  onResetFilters: () => void
}

export interface DeleteTaskConfirmationProps {
  isDeleting: boolean
  onCancel: () => void
  onConfirm: () => Promise<void>
  task: Task
}

export interface StatusMenuProps {
  onChange: (status: TaskStatus) => void
  status: TaskStatus
}

export interface TasksErrorStateProps {
  message: string
  onRetry: () => Promise<void>
}

export interface DeleteAllConfirmationProps {
  count: number
  isDeleting: boolean
  onCancel: () => void
  onConfirm: () => Promise<void>
}

export interface TasksToolbarProps {
  onCreateTask: () => void
  onResetStorage: () => void
}

export interface TasksListProps {
  onDeleteAllTasks: () => void
  onStatusChange: TaskStatusChangeHandler
}

export interface TasksBoardProps {
  onDeleteAllTasks: () => void
  onStatusChange: TaskStatusChangeHandler
}

export interface TaskCardProps {
  isSelected: boolean
  onSelect: (taskId: string) => void
  onStatusChange: TaskStatusChangeHandler
  task: Task
}

export interface TaskDetailsPanelProps {
  onDeleteTask: (task: Task) => void
  onEditTask: (task: Task) => void
  onStatusChange: TaskStatusChangeHandler
}

export interface TaskFormProps {
  initialValues: TaskFormValues
  onCancel: () => void
  onSubmit: (values: TaskFormValues) => Promise<void>
  submitLabel: string
}

export interface TaskModalProps {
  children: ReactNode
  onClose: () => void
  subtitle: string
  title: string
}

export interface ToastMessage {
  id: number
  title: string
  message: string
  tone: ToastTone
}

export interface ToastViewportProps {
  toasts: ToastMessage[]
}

export interface TasksStoreState {
  tasks: Task[]
  selectedTaskId: string | null
  filters: TaskFilters
  sort: TaskSort
  viewMode: TasksViewMode
  hasHydrated: boolean
  hasInitializedData: boolean
  isLoading: boolean
  error: string | null
  fetchTasks: () => Promise<void>
  selectTask: (taskId: string) => void
  clearSelection: () => void
  clearError: () => void
  setFilters: (filters: Partial<TaskFilters>) => void
  setSort: (sort: TaskSort) => void
  setViewMode: (viewMode: TasksViewMode) => void
  resetFilters: () => void
  resetDashboardState: () => void
  createTask: (values: TaskFormValues) => Promise<Task>
  updateTask: (taskId: string, values: TaskFormValues) => Promise<Task>
  deleteTask: (taskId: string) => Promise<void>
  deleteAllTasks: () => Promise<void>
  markHydrated: () => void
}
