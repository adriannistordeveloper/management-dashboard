import { useEffect, useMemo, useState } from 'react'

import { useSelectedTask } from '../../../hooks/useSelectedTask'
import { useTasksStore } from '../../../store/useTasksStore'
import type { Task, TaskFormValues } from '../../../types/task.types'
import { DeleteAllConfirmation } from '../DeleteAllConfirmation/DeleteAllConfirmation'
import { DeleteTaskConfirmation } from '../DeleteTaskConfirmation/DeleteTaskConfirmation'
import { TaskForm } from '../TaskForm/TaskForm'
import { TaskModal } from '../TaskModal/TaskModal'
import { TaskDetailsPanel } from '../TaskDetailsPanel/TaskDetailsPanel'
import { TasksErrorState } from '../TasksErrorState/TasksErrorState'
import { TasksBoard } from '../TasksBoard/TasksBoard'
import { TasksList } from '../TasksList/TasksList'
import { TasksLoadingState } from '../TasksLoadingState/TasksLoadingState'
import { TasksToolbar } from '../TasksToolbar/TasksToolbar'
import { ToastViewport } from '../ToastViewport/ToastViewport'
import { ViewModeToggle } from '../ViewModeToggle/ViewModeToggle'
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
  const deleteAllTasks = useTasksStore((state) => state.deleteAllTasks)
  const viewMode = useTasksStore((state) => state.viewMode)
  const setViewMode = useTasksStore((state) => state.setViewMode)
  const hasHydrated = useTasksStore((state) => state.hasHydrated)
  const hasInitializedData = useTasksStore((state) => state.hasInitializedData)
  const tasks = useTasksStore((state) => state.tasks)
  const isLoading = useTasksStore((state) => state.isLoading)
  const error = useTasksStore((state) => state.error)
  const selectedTask = useSelectedTask()
  const [modalMode, setModalMode] = useState<'create' | 'edit' | null>(null)
  const [taskPendingDelete, setTaskPendingDelete] = useState<Task | null>(null)
  const [isDeleteAllPending, setIsDeleteAllPending] = useState(false)
  const [isDeletingTask, setIsDeletingTask] = useState(false)
  const [toasts, setToasts] = useState<
    { id: number; title: string; message: string; tone: 'success' | 'error' | 'destructive' }[]
  >([])

  const pushToast = (toast: {
    title: string
    message: string
    tone: 'success' | 'error' | 'destructive'
  }) => {
    const id = Date.now() + Math.floor(Math.random() * 1000)

    setToasts((currentToasts) => [...currentToasts, { id, ...toast }])

    window.setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((currentToast) => currentToast.id !== id))
    }, 3200)
  }

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
        <>
          <ViewModeToggle onChange={setViewMode} viewMode={viewMode} />

          <section style={dashboardGridStyle}>
            {viewMode === 'list' ? (
              <TasksList onDeleteAllTasks={() => setIsDeleteAllPending(true)} />
            ) : (
              <TasksBoard onDeleteAllTasks={() => setIsDeleteAllPending(true)} />
            )}
          <TaskDetailsPanel
            onDeleteTask={(task) => void handleDeleteTask(task)}
            onEditTask={() => setModalMode('edit')}
          />
          </section>
        </>
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
              try {
                if (modalMode === 'create') {
                  const createdTask = await createTask(values)
                  pushToast({
                    title: 'Task created',
                    message: `"${createdTask.title}" is now in the dashboard.`,
                    tone: 'success',
                  })
                } else if (selectedTask) {
                  const updatedTask = await updateTask(selectedTask.id, values)
                  pushToast({
                    title: 'Task updated',
                    message: `"${updatedTask.title}" was updated successfully.`,
                    tone: 'success',
                  })
                }

                setModalMode(null)
              } catch {
                pushToast({
                  title: 'Action failed',
                  message: 'We could not save the task right now.',
                  tone: 'error',
                })
              }
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
                pushToast({
                  title: 'Task deleted',
                  message: `"${taskPendingDelete.title}" was removed from the dashboard.`,
                  tone: 'destructive',
                })
                setTaskPendingDelete(null)
              } catch {
                pushToast({
                  title: 'Delete failed',
                  message: 'We could not delete the task right now.',
                  tone: 'error',
                })
              } finally {
                setIsDeletingTask(false)
              }
            }}
            task={taskPendingDelete}
          />
        </TaskModal>
      ) : null}

      {isDeleteAllPending ? (
        <TaskModal
          onClose={() => {
            if (!isDeletingTask) {
              setIsDeleteAllPending(false)
            }
          }}
          subtitle=""
          title="Delete all tasks"
        >
          <DeleteAllConfirmation
            count={tasks.length}
            isDeleting={isDeletingTask}
            onCancel={() => setIsDeleteAllPending(false)}
            onConfirm={async () => {
              setIsDeletingTask(true)

              try {
                await deleteAllTasks()
                pushToast({
                  title: 'All tasks deleted',
                  message: 'The dashboard task list has been cleared.',
                  tone: 'destructive',
                })
                setIsDeleteAllPending(false)
              } catch {
                pushToast({
                  title: 'Delete failed',
                  message: 'We could not delete all tasks right now.',
                  tone: 'error',
                })
              } finally {
                setIsDeletingTask(false)
              }
            }}
          />
        </TaskModal>
      ) : null}

      <ToastViewport toasts={toasts} />
    </main>
  )
}
