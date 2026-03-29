import { create } from 'zustand'

import { tasksRepository } from '../api/tasksRepository'
import type { Task, TaskFilters, TaskFormValues, TaskSort } from '../types/task.types'

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
  createTask: (values: TaskFormValues) => Promise<Task>
  updateTask: (taskId: string, values: TaskFormValues) => Promise<Task>
  deleteTask: (taskId: string) => Promise<void>
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

  async createTask(values) {
    set({ error: null })

    try {
      const createdTask = await tasksRepository.createTask(values)

      set((state) => ({
        tasks: [createdTask, ...state.tasks],
        selectedTaskId: createdTask.id,
      }))

      return createdTask
    } catch {
      set({ error: 'We could not create the task right now.' })
      throw new Error('Create task failed')
    }
  },

  async updateTask(taskId, values) {
    set({ error: null })

    try {
      const updatedTask = await tasksRepository.updateTask(taskId, values)

      set((state) => ({
        tasks: state.tasks.map((task) => (task.id === taskId ? updatedTask : task)),
      }))

      return updatedTask
    } catch {
      set({ error: 'We could not update the task right now.' })
      throw new Error('Update task failed')
    }
  },

  async deleteTask(taskId) {
    set({ error: null })

    try {
      await tasksRepository.deleteTask(taskId)

      set((state) => {
        const nextTasks = state.tasks.filter((task) => task.id !== taskId)
        const nextSelectedTaskId =
          state.selectedTaskId === taskId ? (nextTasks[0]?.id ?? null) : state.selectedTaskId

        return {
          tasks: nextTasks,
          selectedTaskId: nextSelectedTaskId,
        }
      })
    } catch {
      set({ error: 'We could not delete the task right now.' })
      throw new Error('Delete task failed')
    }
  },
}))
