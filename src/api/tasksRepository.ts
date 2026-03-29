import { mockTasks } from './mockTasks'
import type { Task } from '../types/task.types'

const REPOSITORY_DELAY_MS = 400

const wait = (duration: number) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, duration)
  })

let tasksDb = [...mockTasks]

export const tasksRepository = {
  async getTasks(): Promise<Task[]> {
    await wait(REPOSITORY_DELAY_MS)
    return [...tasksDb]
  },
}
