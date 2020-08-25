// libraries
import React from 'react'

// components
import './styles.css'

/**
 * @typedef {{
 * state: string,
 * name: string,
 * onToggle: Function
 * }} TaskProps
 * @param {TaskProps} TaskProps
 */
const Task = ({state, name, onToggle}) => {
  return (
    <li className='task-item'>
      <span onClick={() => onToggle(state)}>{"xxx"}</span>
      <h3 className={state}>{name}</h3>
    </li>
  )
}

export default Task
