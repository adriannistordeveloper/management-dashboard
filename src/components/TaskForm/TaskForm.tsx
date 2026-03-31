import { useState } from 'react'

import type { TaskFormValues, TaskStatus } from '@/types/task.types'
import type { TaskFormProps } from '@/types/task-ui.types'
import {
  actionsStyle,
  errorStyle,
  fieldStyle,
  formStyle,
  gridStyle,
  inputStyle,
  labelStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
  textareaStyle,
} from '@/components/TaskForm/style'

export function TaskForm({ initialValues, onCancel, onSubmit, submitLabel }: TaskFormProps) {
  const [values, setValues] = useState<TaskFormValues>(initialValues)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!values.title.trim() || !values.owner.trim() || !values.dueDate) {
      setError('Title, owner, and due date are required.')
      return
    }

    setError(null)
    setIsSubmitting(true)

    try {
      await onSubmit({
        ...values,
        title: values.title.trim(),
        description: values.description.trim(),
        owner: values.owner.trim(),
      })
    } catch {
      setError('Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateField = <Key extends keyof TaskFormValues>(field: Key, value: TaskFormValues[Key]) => {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={gridStyle}>
        <label style={fieldStyle}>
          <span style={labelStyle}>Title</span>
          <input
            onChange={(event) => updateField('title', event.target.value)}
            style={inputStyle}
            type="text"
            value={values.title}
          />
        </label>

        <label style={fieldStyle}>
          <span style={labelStyle}>Owner</span>
          <input
            onChange={(event) => updateField('owner', event.target.value)}
            style={inputStyle}
            type="text"
            value={values.owner}
          />
        </label>

        <label style={fieldStyle}>
          <span style={labelStyle}>Status</span>
          <select
            onChange={(event) => updateField('status', event.target.value as TaskStatus)}
            style={inputStyle}
            value={values.status}
          >
            <option value="todo">To do</option>
            <option value="in_progress">In progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label style={fieldStyle}>
          <span style={labelStyle}>Due date</span>
          <input
            onChange={(event) => updateField('dueDate', event.target.value)}
            style={inputStyle}
            type="date"
            value={values.dueDate}
          />
        </label>
      </div>

      <label style={fieldStyle}>
        <span style={labelStyle}>Description</span>
        <textarea
          onChange={(event) => updateField('description', event.target.value)}
          style={textareaStyle}
          value={values.description}
        />
      </label>

      {error ? <p style={errorStyle}>{error}</p> : null}

      <div style={actionsStyle}>
        <button onClick={onCancel} style={secondaryButtonStyle} type="button">
          Cancel
        </button>
        <button disabled={isSubmitting} style={primaryButtonStyle} type="submit">
          {isSubmitting ? 'Saving...' : submitLabel}
        </button>
      </div>
    </form>
  )
}
