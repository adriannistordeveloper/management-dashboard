import { mockTasks } from '@/api/mockTasks'
import type { Task, TaskFormValues } from '@/types/task.types'

const REPOSITORY_DELAY_MS = 400

const wait = (duration: number) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, duration)
  })

let tasksDb = [...mockTasks]

const createTaskId = () => `task-${crypto.randomUUID()}`

export const tasksRepository = {
  async getTasks(): Promise<Task[]> {
    await wait(REPOSITORY_DELAY_MS)
    return [...tasksDb]
  },

  replaceTasks(tasks: Task[]) {
    tasksDb = [...tasks]
  },

  resetToMockTasks() {
    tasksDb = [...mockTasks]
  },

  async createTask(values: TaskFormValues): Promise<Task> {
    await wait(REPOSITORY_DELAY_MS)

    const task: Task = {
      id: createTaskId(),
      createdAt: new Date().toISOString().slice(0, 10),
      isMock: false,
      ...values,
    }

    tasksDb = [task, ...tasksDb]

    return task
  },

  async updateTask(taskId: string, values: TaskFormValues): Promise<Task> {
    await wait(REPOSITORY_DELAY_MS)

    const currentTask = tasksDb.find((task) => task.id === taskId)

    if (!currentTask) {
      throw new Error('Task not found')
    }

    const updatedTask: Task = {
      ...currentTask,
      ...values,
    }

    tasksDb = tasksDb.map((task) => (task.id === taskId ? updatedTask : task))

    return updatedTask
  },

  async deleteTask(taskId: string): Promise<void> {
    await wait(REPOSITORY_DELAY_MS)
    tasksDb = tasksDb.filter((task) => task.id !== taskId)
  },

  async deleteAllTasks(): Promise<void> {
    await wait(REPOSITORY_DELAY_MS)
    tasksDb = []
  },
}
