import { useEffect, useMemo, useState } from 'react'

import { useSelectedTask } from '../../../hooks/useSelectedTask'
import { useTasksStore } from '../../../store/useTasksStore'
import type { Task, TaskFormValues } from '../../../types/task.types'
import { TaskForm } from '../TaskForm/TaskForm'
import { TaskModal } from '../TaskModal/TaskModal'
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
  const createTask = useTasksStore((state) => state.createTask)
  const updateTask = useTasksStore((state) => state.updateTask)
  const deleteTask = useTasksStore((state) => state.deleteTask)
  const isLoading = useTasksStore((state) => state.isLoading)
  const error = useTasksStore((state) => state.error)
  const selectedTask = useSelectedTask()
  const [modalMode, setModalMode] = useState<'create' | 'edit' | null>(null)

  useEffect(() => {
    void fetchTasks()
  }, [fetchTasks])

  const defaultFormValues = useMemo<TaskFormValues>(
    () => ({
      title: '',
      description: '',
      status: 'todo',
      owner: '',
      dueDate: new Date().toISOString().slice(0, 10),
    }),
    [],
  )

  const editFormValues = selectedTask
    ? {
        title: selectedTask.title,
        description: selectedTask.description,
        status: selectedTask.status,
        owner: selectedTask.owner,
        dueDate: selectedTask.dueDate,
      }
    : defaultFormValues

  const handleDeleteTask = async (task: Task) => {
    const shouldDelete = window.confirm(`Delete "${task.title}"?`)

    if (!shouldDelete) {
      return
    }

    await deleteTask(task.id)
  }

  return (
    <main style={dashboardShellStyle}>
      <TasksToolbar onCreateTask={() => setModalMode('create')} />

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
          <TaskDetailsPanel
            onDeleteTask={(task) => void handleDeleteTask(task)}
            onEditTask={() => setModalMode('edit')}
          />
        </section>
      )}

      {modalMode ? (
        <TaskModal
          onClose={() => setModalMode(null)}
          subtitle={
            modalMode === 'create'
              ? 'Add a new task to the dashboard queue.'
              : 'Update the selected task details.'
          }
          title={modalMode === 'create' ? 'Create task' : 'Edit task'}
        >
          <TaskForm
            initialValues={modalMode === 'create' ? defaultFormValues : editFormValues}
            onCancel={() => setModalMode(null)}
            onSubmit={async (values) => {
              if (modalMode === 'create') {
                await createTask(values)
              } else if (selectedTask) {
                await updateTask(selectedTask.id, values)
              }

              setModalMode(null)
            }}
            submitLabel={modalMode === 'create' ? 'Create task' : 'Save changes'}
          />
        </TaskModal>
      ) : null}
    </main>
  )
}
