import { create } from 'zustand'

import { tasksRepository } from '../api/tasksRepository'
import type { Task, TaskFilters, TaskSort } from '../types/task.types'

interface TasksState {
  tasks: Task[]
  selectedTaskId: string | null
  filters: TaskFilters
  sort: TaskSort
  isLoading: boolean
  error: string | null
  fetchTasks: () => Promise<void>
  selectTask: (taskId: string) => void
  clearSelection: () => void
  clearError: () => void
  setFilters: (filters: Partial<TaskFilters>) => void
  setSort: (sort: TaskSort) => void
  resetFilters: () => void
}

const initialFilters: TaskFilters = {
  search: '',
  status: 'all',
  owner: 'all',
}

const initialSort: TaskSort = {
  field: 'dueDate',
  direction: 'asc',
}

export const useTasksStore = create<TasksState>((set, get) => ({
  tasks: [],
  selectedTaskId: null,
  filters: initialFilters,
  sort: initialSort,
  isLoading: false,
  error: null,

  async fetchTasks() {
    set({ isLoading: true, error: null })

    try {
      const tasks = await tasksRepository.getTasks()
      const selectedTaskId =
        get().selectedTaskId && tasks.some((task) => task.id === get().selectedTaskId)
          ? get().selectedTaskId
          : tasks[0]?.id ?? null

      set({
        tasks,
        selectedTaskId,
        isLoading: false,
      })
    } catch {
      set({
        error: 'We could not load the tasks right now.',
        isLoading: false,
      })
    }
  },

  selectTask(taskId) {
    set({ selectedTaskId: taskId })
  },

  clearSelection() {
    set({ selectedTaskId: null })
  },

  clearError() {
    set({ error: null })
  },

  setFilters(filters) {
    set((state) => ({
      filters: {
        ...state.filters,
        ...filters,
      },
    }))
  },

  setSort(sort) {
    set({ sort })
  },

  resetFilters() {
    set({ filters: initialFilters, sort: initialSort })
  },
}))
