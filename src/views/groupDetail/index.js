// Libraries
import React from 'react'

// Components
import Task from '../../components/task'

/**
 * @typedef {{
 * name: string,
 * tasks: object[],
 * onClick: Function
 * }} GroupDetailProps
 * @param {GroupDetailProps} props 
 */
const GroupDetail = ({name, tasks, onClick, getTaskState}) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <span onClick={() => onClick(null)}>{"ALL GROUPS"}</span>
      </div>
      <ul>
        {tasks.map(task => {
          const {task: name, id} = task
          return (
            <Task state={getTaskState(task)} key={id} name={name}/>
          )
        })}
      </ul>
    </div>
  )
}

export default GroupDetail
