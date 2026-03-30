import { useEffect, useMemo, useState } from 'react'

import { useSelectedTask } from '../../../hooks/useSelectedTask'
import { useTasksStore } from '../../../store/useTasksStore'
import type { Task, TaskFormValues } from '../../../types/task.types'
import { DeleteTaskConfirmation } from '../DeleteTaskConfirmation/DeleteTaskConfirmation'
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
  const hasHydrated = useTasksStore((state) => state.hasHydrated)
  const hasInitializedData = useTasksStore((state) => state.hasInitializedData)
  const tasks = useTasksStore((state) => state.tasks)
  const isLoading = useTasksStore((state) => state.isLoading)
  const error = useTasksStore((state) => state.error)
  const selectedTask = useSelectedTask()
  const [modalMode, setModalMode] = useState<'create' | 'edit' | null>(null)
  const [taskPendingDelete, setTaskPendingDelete] = useState<Task | null>(null)
  const [isDeletingTask, setIsDeletingTask] = useState(false)

  useEffect(() => {
    if (!hasHydrated) {
      return
    }

    if (!hasInitializedData || tasks.length === 0) {
      void fetchTasks()
    }
  }, [fetchTasks, hasHydrated, hasInitializedData, tasks.length])

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
    setTaskPendingDelete(task)
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

      {taskPendingDelete ? (
        <TaskModal
          onClose={() => {
            if (!isDeletingTask) {
              setTaskPendingDelete(null)
            }
          }}
          subtitle="Please confirm this destructive action."
          title="Delete task"
        >
          <DeleteTaskConfirmation
            isDeleting={isDeletingTask}
            onCancel={() => setTaskPendingDelete(null)}
            onConfirm={async () => {
              setIsDeletingTask(true)

              try {
                await deleteTask(taskPendingDelete.id)
                setTaskPendingDelete(null)
              } finally {
                setIsDeletingTask(false)
              }
            }}
            task={taskPendingDelete}
          />
        </TaskModal>
      ) : null}
    </main>
  )
}
