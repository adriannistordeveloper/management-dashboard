import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { tasksRepository } from '../api/tasksRepository'
import type { TaskFilters, TaskSort } from '../types/task.types'
import type { TasksStoreState } from '../types/task-ui.types'

const initialFilters: TaskFilters = {
  search: '',
  status: 'all',
  owner: 'all',
}

const initialSort: TaskSort = {
  field: 'dueDate',
  direction: 'asc',
}

export const useTasksStore = create<TasksStoreState>()(
  persist(
    (set, get) => ({
      tasks: [],
      selectedTaskId: null,
      filters: initialFilters,
      sort: initialSort,
      viewMode: 'list',
      hasHydrated: false,
      hasInitializedData: false,
      isLoading: false,
      error: null,

      async fetchTasks() {
        set({ isLoading: true, error: null })

        try {
          const tasks = await tasksRepository.getTasks()
          const defaultSelectedTaskId =
            tasks.find((task) => task.status === 'todo')?.id ?? tasks[0]?.id ?? null
          const selectedTaskId =
            get().selectedTaskId && tasks.some((task) => task.id === get().selectedTaskId)
              ? get().selectedTaskId
              : defaultSelectedTaskId

          set({
            tasks,
            selectedTaskId,
            hasInitializedData: true,
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

      setViewMode(viewMode) {
        set({ viewMode })
      },

      resetFilters() {
        set({ filters: initialFilters, sort: initialSort })
      },

      resetDashboardState() {
        tasksRepository.resetToMockTasks()

        set({
          tasks: [],
          selectedTaskId: null,
          filters: initialFilters,
          sort: initialSort,
          viewMode: 'list',
          hasInitializedData: false,
          error: null,
        })
      },

      async createTask(values) {
        set({ error: null })

        try {
          const createdTask = await tasksRepository.createTask(values)

          set((state) => ({
            tasks: [createdTask, ...state.tasks],
            selectedTaskId: createdTask.id,
            hasInitializedData: true,
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
            hasInitializedData: true,
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
              hasInitializedData: true,
            }
          })
        } catch {
          set({ error: 'We could not delete the task right now.' })
          throw new Error('Delete task failed')
        }
      },

      async deleteAllTasks() {
        set({ error: null })

        try {
          await tasksRepository.deleteAllTasks()

          set({
            tasks: [],
            selectedTaskId: null,
            hasInitializedData: true,
          })
        } catch {
          set({ error: 'We could not delete all tasks right now.' })
          throw new Error('Delete all tasks failed')
        }
      },

      markHydrated() {
        set({ hasHydrated: true })
      },
    }),
    {
      name: 'task-dashboard-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        tasks: state.tasks,
        selectedTaskId: state.selectedTaskId,
        filters: state.filters,
        sort: state.sort,
        viewMode: state.viewMode,
        hasInitializedData: state.hasInitializedData,
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.hasInitializedData && state.tasks.length > 0) {
          tasksRepository.replaceTasks(state.tasks)
        } else {
          tasksRepository.resetToMockTasks()
        }

        state?.markHydrated()
      },
    },
  ),
)
