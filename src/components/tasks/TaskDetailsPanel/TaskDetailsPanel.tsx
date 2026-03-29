import { useTasksStore } from '../../../store/useTasksStore'
import { NoSelectionState } from '../NoSelectionState/NoSelectionState'
import {
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
  stackStyle,
  titleStyle,
} from './style'

export function TaskDetailsPanel() {
  const tasks = useTasksStore((state) => state.tasks)
  const selectedTaskId = useTasksStore((state) => state.selectedTaskId)

  const selectedTask = tasks.find((task) => task.id === selectedTaskId)

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
      </div>
    </section>
  )
}
