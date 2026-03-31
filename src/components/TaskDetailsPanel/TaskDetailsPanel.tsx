import { formatDate } from '@/lib/formatDate'
import { useVisibleTasks } from '@/hooks/useVisibleTasks'
import { useSelectedTask } from '@/hooks/useSelectedTask'
import { useTasksStore } from '@/store/useTasksStore'
import type { TaskDetailsPanelProps } from '@/types/task-ui.types'
import { HiddenSelectionState } from '@/components/HiddenSelectionState/HiddenSelectionState'
import { NoSelectionState } from '@/components/NoSelectionState/NoSelectionState'
import { StatusMenu } from '@/components/StatusMenu/StatusMenu'
import {
  actionsStyle,
  dangerButtonStyle,
  descriptionBlockStyle,
  descriptionStyle,
  eyebrowStyle,
  gridStyle,
  headerStyle,
  headingStyle,
  summaryGridStyle,
  summaryItemStyle,
  summaryValueStyle,
  labelStyle,
  metaItemStyle,
  panelStyle,
  secondaryButtonStyle,
  stackStyle,
  titleStyle,
} from '@/components/TaskDetailsPanel/style'

export function TaskDetailsPanel({
  onDeleteTask,
  onEditTask,
  onStatusChange,
}: TaskDetailsPanelProps) {
  const visibleTasks = useVisibleTasks()
  const resetFilters = useTasksStore((state) => state.resetFilters)
  const selectedTask = useSelectedTask()
  const visibleSelectedTask = visibleTasks.find((task) => task.id === selectedTask?.id)

  if (!selectedTask) {
    return (
      <section style={panelStyle}>
        <div style={headerStyle}>
          <h2 style={headingStyle}>Details</h2>
        </div>
        <NoSelectionState />
      </section>
    )
  }

  if (!visibleSelectedTask) {
    return (
      <section style={panelStyle}>
        <div style={headerStyle}>
          <h2 style={headingStyle}>Details</h2>
        </div>
        <HiddenSelectionState onResetFilters={resetFilters} />
      </section>
    )
  }

  return (
    <section style={panelStyle}>
      <div style={headerStyle}>
        <h2 style={headingStyle}>Details</h2>
      </div>

      <div style={stackStyle}>
        <div>
          <p style={eyebrowStyle}>Selected task</p>
          <h3 style={titleStyle}>{selectedTask.title}</h3>
        </div>

        <div style={summaryGridStyle}>
          <div style={summaryItemStyle}>
            <span style={labelStyle}>Owner</span>
            <strong style={summaryValueStyle}>{selectedTask.owner}</strong>
          </div>
          <div style={summaryItemStyle}>
            <span style={labelStyle}>Due date</span>
            <strong style={summaryValueStyle}>{formatDate(selectedTask.dueDate)}</strong>
          </div>
        </div>

        <div style={gridStyle}>
          <div style={metaItemStyle}>
            <span style={labelStyle}>Status</span>
            <StatusMenu onChange={onStatusChange(selectedTask)} status={selectedTask.status} />
          </div>
          <div style={metaItemStyle}>
            <span style={labelStyle}>Owner</span>
            <strong style={summaryValueStyle}>{selectedTask.owner}</strong>
          </div>
          <div style={metaItemStyle}>
            <span style={labelStyle}>Due date</span>
            <strong style={summaryValueStyle}>{formatDate(selectedTask.dueDate)}</strong>
          </div>
          <div style={metaItemStyle}>
            <span style={labelStyle}>Created at</span>
            <strong style={summaryValueStyle}>{formatDate(selectedTask.createdAt)}</strong>
          </div>
        </div>

        <div style={descriptionBlockStyle}>
          <span style={labelStyle}>Description</span>
          <p style={descriptionStyle}>{selectedTask.description}</p>
        </div>

        <div style={actionsStyle}>
          <button
            onClick={() => onEditTask(selectedTask)}
            style={secondaryButtonStyle}
            type="button"
          >
            Edit task
          </button>
          <button
            onClick={() => onDeleteTask(selectedTask)}
            style={dangerButtonStyle}
            type="button"
          >
            Delete task
          </button>
        </div>
      </div>
    </section>
  )
}
