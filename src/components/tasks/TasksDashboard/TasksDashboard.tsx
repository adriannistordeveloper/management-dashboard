import { useEffect } from 'react'

import { useTasksStore } from '../../../store/useTasksStore'
import { TaskDetailsPanel } from '../TaskDetailsPanel/TaskDetailsPanel'
import { TasksErrorState } from '../TasksErrorState/TasksErrorState'
import { TasksList } from '../TasksList/TasksList'
import { TasksLoadingState } from '../TasksLoadingState/TasksLoadingState'
import { TasksToolbar } from '../TasksToolbar/TasksToolbar'
import {
  dashboardGridStyle,
  dashboardShellStyle,
  panelStyle,
  singleColumnGridStyle,
} from './style'

export function TasksDashboard() {
  const fetchTasks = useTasksStore((state) => state.fetchTasks)
  const isLoading = useTasksStore((state) => state.isLoading)
  const error = useTasksStore((state) => state.error)

  useEffect(() => {
    void fetchTasks()
  }, [fetchTasks])

  return (
    <main style={dashboardShellStyle}>
      <TasksToolbar />

      {isLoading ? (
        <section style={singleColumnGridStyle}>
          <section style={panelStyle}>
            <TasksLoadingState />
          </section>
        </section>
      ) : error ? (
        <section style={singleColumnGridStyle}>
          <section style={panelStyle}>
            <TasksErrorState message={error} onRetry={fetchTasks} />
          </section>
        </section>
      ) : (
        <section style={dashboardGridStyle}>
          <TasksList />
          <TaskDetailsPanel />
        </section>
      )}
    </main>
  )
}
