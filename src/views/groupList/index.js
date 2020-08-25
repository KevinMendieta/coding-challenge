// Libraries
import React from 'react'

// Components

/**
 * @typedef {{
 * tasks: object[],
 * }} GroupSummaryProps
 * @param {GroupSummaryProps} props
 */
const GroupSummary = ({ tasks, getTaskState }) => {
  let completed = 0
  tasks.forEach(element => {
    if (getTaskState(element) === "completed") completed += 1
  })
  return (
    <p>{`${completed} OF ${tasks.length} TASKS COMPLETE`}</p>
  )
}

/**
 * @typedef {{
 * groups: object[],
 * onClick: Function
 * }} GroupListProps
 * @param {GroupListProps} props 
 */
const GroupList = ({groups, onClick, getTaskState}) => {
  return (
    <div>
      <h1>{"Things To Do"}</h1>
      <ul>
        {groups.map(({name, tasks}) => (
          <li key={name} onClick={() => onClick(name)}>
            <h1>{name}</h1>
            <GroupSummary tasks={tasks} getTaskState={getTaskState}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GroupList
