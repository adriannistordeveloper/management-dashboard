import type { Task } from '../../../types/task.types'
import { useVisibleTasks } from '../../../hooks/useVisibleTasks'
import { useTasksStore } from '../../../store/useTasksStore'
import { NoSelectionState } from '../NoSelectionState/NoSelectionState'
import {
  actionsStyle,
  dangerButtonStyle,
  descriptionBlockStyle,
  descriptionStyle,
  eyebrowStyle,
  getStatusBadgeStyle,
  gridStyle,
  headerStyle,
  headingStyle,
  labelStyle,
  metaItemStyle,
  panelStyle,
  secondaryButtonStyle,
  stackStyle,
  titleStyle,
} from './style'

interface TaskDetailsPanelProps {
  onDeleteTask: (task: Task) => void
  onEditTask: (task: Task) => void
}

export function TaskDetailsPanel({ onDeleteTask, onEditTask }: TaskDetailsPanelProps) {
  const visibleTasks = useVisibleTasks()
  const selectedTaskId = useTasksStore((state) => state.selectedTaskId)

  const selectedTask = visibleTasks.find((task) => task.id === selectedTaskId)

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

        <div style={gridStyle}>
          <div style={metaItemStyle}>
            <span style={labelStyle}>Status</span>
            <strong style={getStatusBadgeStyle(selectedTask.status)}>{selectedTask.status}</strong>
          </div>
          <div style={metaItemStyle}>
            <span style={labelStyle}>Owner</span>
            <strong>{selectedTask.owner}</strong>
          </div>
          <div style={metaItemStyle}>
            <span style={labelStyle}>Due date</span>
            <strong>{selectedTask.dueDate}</strong>
          </div>
          <div style={metaItemStyle}>
            <span style={labelStyle}>Created at</span>
            <strong>{selectedTask.createdAt}</strong>
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
