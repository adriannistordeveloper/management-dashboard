import { useVisibleTasks } from '../../../hooks/useVisibleTasks'
import { useTasksStore } from '../../../store/useTasksStore'
import type { TaskSortField, TaskStatus } from '../../../types/task.types'
import {
  actionsRowStyle,
  controlsCardStyle,
  controlsGridStyle,
  fieldGroupStyle,
  fieldLabelStyle,
  inputStyle,
  introBlockStyle,
  resetButtonStyle,
  searchFieldGroupStyle,
  summaryStyle,
  titleStyle,
  toolbarStyle,
} from './style'

export function TasksToolbar() {
  const tasks = useTasksStore((state) => state.tasks)
  const filters = useTasksStore((state) => state.filters)
  const sort = useTasksStore((state) => state.sort)
  const setFilters = useTasksStore((state) => state.setFilters)
  const setSort = useTasksStore((state) => state.setSort)
  const resetFilters = useTasksStore((state) => state.resetFilters)
  const visibleTasks = useVisibleTasks()

  const ownerOptions = ['all', ...new Set(tasks.map((task) => task.owner))]

  return (
    <header style={toolbarStyle}>
      <div style={introBlockStyle}>
        <h1 style={titleStyle}>Task Management Dashboard</h1>
      </div>

      <div style={controlsCardStyle}>
        <div style={controlsGridStyle}>
          <label style={searchFieldGroupStyle}>
            <span style={fieldLabelStyle}>Search</span>
            <input
              onChange={(event) => setFilters({ search: event.target.value })}
              placeholder="Search title, status, date, or owner"
              style={inputStyle}
              type="text"
              value={filters.search}
            />
          </label>

          <label style={fieldGroupStyle}>
            <span style={fieldLabelStyle}>Status</span>
            <select
              onChange={(event) =>
                setFilters({ status: event.target.value as TaskStatus | 'all' })
              }
              style={inputStyle}
              value={filters.status}
            >
              <option value="all">All statuses</option>
              <option value="todo">To do</option>
              <option value="in_progress">In progress</option>
              <option value="done">Done</option>
            </select>
          </label>

          <label style={fieldGroupStyle}>
            <span style={fieldLabelStyle}>Owner</span>
            <select
              onChange={(event) => setFilters({ owner: event.target.value })}
              style={inputStyle}
              value={filters.owner}
            >
              {ownerOptions.map((owner) => (
                <option key={owner} value={owner}>
                  {owner === 'all' ? 'All owners' : owner}
                </option>
              ))}
            </select>
          </label>

          <label style={fieldGroupStyle}>
            <span style={fieldLabelStyle}>Sort</span>
            <select
              onChange={(event) => {
                const [field, direction] = event.target.value.split(':') as [
                  TaskSortField,
                  'asc' | 'desc',
                ]

                setSort({ field, direction })
              }}
              style={inputStyle}
              value={`${sort.field}:${sort.direction}`}
            >
              <option value="dueDate:asc">Due date, oldest first</option>
              <option value="dueDate:desc">Due date, newest first</option>
              <option value="title:asc">Title, A-Z</option>
              <option value="title:desc">Title, Z-A</option>
              <option value="createdAt:desc">Created, newest first</option>
              <option value="createdAt:asc">Created, oldest first</option>
            </select>
          </label>
        </div>

        <div style={actionsRowStyle}>
          <p style={summaryStyle}>
            Showing {visibleTasks.length} of {tasks.length} tasks
          </p>
          <button onClick={() => resetFilters()} style={resetButtonStyle} type="button">
            Reset filters
          </button>
        </div>
      </div>
    </header>
  )
}
