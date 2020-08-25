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
const GroupDetail = ({name, tasks, onClick}) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <span onClick={() => onClick(null)}>{"ALL GROUPS"}</span>
      </div>
      <ul>
        {tasks.map(task => <Task {...task}/>)}
      </ul>
    </div>
  )
}

export default GroupDetail
