// libraries
import React from 'react'

// components
import { useAppState } from '../../contexts/AppContext'
import './styles.css'

const getIconPath = (state) => {
  if (state === 'completed') return '/completed.svg'
  if (state === 'uncompleted') return '/incomplete.svg'
  return '/locked.svg'
}

/**
 * @typedef {{
 * state: string,
 * name: string,
 * onToggle: Function
 * }} TaskProps
 * @param {TaskProps} TaskProps
 */
const Task = ({state, name, id}) => {
  const {updateData} = useAppState()
  return (
    <li className='task-item'>
      <img
        className={state === 'blocked' ? 'disabled' : ''}
        src={getIconPath(state)}
        onClick={() => updateData(state, id)}
        alt='task state'
      />
      <h3 className={state}>{name}</h3>
    </li>
  )
}

export default Task
