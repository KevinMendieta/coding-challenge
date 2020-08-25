// libraries
import React from 'react'

// components

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
    <li>
      <span onClick={() => onToggle(state)}>{state}</span>
      <h1>{name}</h1>
    </li>
  )
}

export default Task
