import { useEffect, useMemo, useState } from 'react'

import { useSelectedTask } from '@/hooks/useSelectedTask'
import { useTaskToasts } from '@/hooks/useTaskToasts'
import { useTasksStore } from '@/store/useTasksStore'
import type { Task, TaskFormValues, TaskPriority, TaskStatus } from '@/types/task.types'
import type { ModalMode } from '@/types/task-ui.types'
import { DeleteAllConfirmation } from '@/components/DeleteAllConfirmation/DeleteAllConfirmation'
import { DeleteTaskConfirmation } from '@/components/DeleteTaskConfirmation/DeleteTaskConfirmation'
import { TaskForm } from '@/components/TaskForm/TaskForm'
import { TaskModal } from '@/components/TaskModal/TaskModal'
import { TaskDetailsPanel } from '@/components/TaskDetailsPanel/TaskDetailsPanel'
import { TasksErrorState } from '@/components/TasksErrorState/TasksErrorState'
import { TasksBoard } from '@/components/TasksBoard/TasksBoard'
import { TasksList } from '@/components/TasksList/TasksList'
import { TasksLoadingState } from '@/components/TasksLoadingState/TasksLoadingState'
import { TasksToolbar } from '@/components/TasksToolbar/TasksToolbar'
import { ToastViewport } from '@/components/ToastViewport/ToastViewport'
import { ViewModeToggle } from '@/components/ViewModeToggle/ViewModeToggle'
import {
  dashboardGridStyle,
  dashboardShellStyle,
  panelStyle,
  singleColumnGridStyle,
} from '@/components/TasksDashboard/style'

export function TasksDashboard() {
  const fetchTasks = useTasksStore((state) => state.fetchTasks)
  const createTask = useTasksStore((state) => state.createTask)
  const updateTask = useTasksStore((state) => state.updateTask)
  const deleteTask = useTasksStore((state) => state.deleteTask)
  const deleteAllTasks = useTasksStore((state) => state.deleteAllTasks)
  const resetDashboardState = useTasksStore((state) => state.resetDashboardState)
  const viewMode = useTasksStore((state) => state.viewMode)
  const setViewMode = useTasksStore((state) => state.setViewMode)
  const hasHydrated = useTasksStore((state) => state.hasHydrated)
  const hasInitializedData = useTasksStore((state) => state.hasInitializedData)
  const tasks = useTasksStore((state) => state.tasks)
  const isLoading = useTasksStore((state) => state.isLoading)
  const error = useTasksStore((state) => state.error)
  const selectedTask = useSelectedTask()
  const [modalMode, setModalMode] = useState<ModalMode>(null)
  const [taskPendingDelete, setTaskPendingDelete] = useState<Task | null>(null)
  const [isDeleteAllPending, setIsDeleteAllPending] = useState(false)
  const [isDeletingTask, setIsDeletingTask] = useState(false)
  const { pushToast, toasts } = useTaskToasts()

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
      priority: 'medium',
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
        priority: selectedTask.priority,
        owner: selectedTask.owner,
        dueDate: selectedTask.dueDate,
      }
    : defaultFormValues

  const handleDeleteTask = async (task: Task) => {
    setTaskPendingDelete(task)
  }

  const handleResetStorage = () => {
    useTasksStore.persist.clearStorage()
    resetDashboardState()
    void fetchTasks()

    pushToast({
      title: 'Dashboard reset',
      message: 'Local storage was cleared and the default mock tasks were restored.',
      tone: 'success',
    })
  }

  const handleStatusChange = (task: Task) => async (status: TaskStatus) => {
    if (task.status === status) {
      return
    }

    try {
      await updateTask(task.id, {
        title: task.title,
        description: task.description,
        status,
        priority: task.priority,
        owner: task.owner,
        dueDate: task.dueDate,
      })

      pushToast({
        title: 'Status updated',
        message: `"${task.title}" moved to ${status === 'todo' ? 'To do' : status === 'in_progress' ? 'In progress' : 'Done'}.`,
        tone: 'success',
      })
    } catch {
      pushToast({
        title: 'Status update failed',
        message: 'We could not update the task status right now.',
        tone: 'error',
      })
    }
  }

  const handlePriorityChange = (task: Task) => async (priority: TaskPriority) => {
    if (task.priority === priority) {
      return
    }

    try {
      await updateTask(task.id, {
        title: task.title,
        description: task.description,
        status: task.status,
        priority,
        owner: task.owner,
        dueDate: task.dueDate,
      })

      pushToast({
        title: 'Priority updated',
        message: `"${task.title}" priority is now ${priority}.`,
        tone: 'success',
      })
    } catch {
      pushToast({
        title: 'Priority update failed',
        message: 'We could not update the task priority right now.',
        tone: 'error',
      })
    }
  }

  return (
    <main style={dashboardShellStyle}>
      <TasksToolbar
        onCreateTask={() => setModalMode('create')}
        onResetStorage={handleResetStorage}
      />

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
              <TasksList
                onDeleteAllTasks={() => setIsDeleteAllPending(true)}
                onStatusChange={handleStatusChange}
              />
            ) : (
              <TasksBoard
                onDeleteAllTasks={() => setIsDeleteAllPending(true)}
                onStatusChange={handleStatusChange}
              />
            )}
          <TaskDetailsPanel
            onDeleteTask={(task) => void handleDeleteTask(task)}
            onEditTask={() => setModalMode('edit')}
            onPriorityChange={handlePriorityChange}
            onStatusChange={handleStatusChange}
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
