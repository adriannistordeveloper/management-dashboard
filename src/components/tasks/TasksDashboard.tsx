import { useEffect } from 'react'

import { useTasksStore } from '../../store/useTasksStore'
import './tasks.css'
import { TaskDetailsPanel } from './TaskDetailsPanel'
import { TasksErrorState } from './TasksErrorState'
import { TasksList } from './TasksList'
import { TasksLoadingState } from './TasksLoadingState'
import { TasksToolbar } from './TasksToolbar'

export function TasksDashboard() {
  const fetchTasks = useTasksStore((state) => state.fetchTasks)
  const isLoading = useTasksStore((state) => state.isLoading)
  const error = useTasksStore((state) => state.error)

  useEffect(() => {
    void fetchTasks()
  }, [fetchTasks])

  return (
    <main className="dashboard-shell">
      <TasksToolbar />

      {isLoading ? (
        <section className="dashboard-grid single-column">
          <section className="dashboard-panel">
            <TasksLoadingState />
          </section>
        </section>
      ) : error ? (
        <section className="dashboard-grid single-column">
          <section className="dashboard-panel">
            <TasksErrorState message={error} onRetry={fetchTasks} />
          </section>
        </section>
      ) : (
        <section className="dashboard-grid">
          <TasksList />
          <TaskDetailsPanel />
        </section>
      )}
    </main>
  )
}
