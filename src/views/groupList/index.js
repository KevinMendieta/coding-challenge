// Libraries
import React from 'react'

// Components

/**
 * @typedef {{
 * tasks: object[],
 * }} GroupSummaryProps
 * @param {GroupSummaryProps} props
 */
const GroupSummary = ({ tasks }) => {
  const completed = 3
  return (
    <p>{`${completed} OF ${tasks.lenght} TASKS COMPLETE`}</p>
  )
}

/**
 * @typedef {{
 * groups: object[],
 * onClick: Function
 * }} GroupListProps
 * @param {GroupListProps} props 
 */
const GroupList = ({groups, onClick}) => {
  return (
    <div>
      <h1>{"Things To Do"}</h1>
      <ul>
        {groups.map(({name, tasks}) => (
          <li onClick={() => onClick(name)}>
            <h1>{name}</h1>
            <GroupSummary tasks={tasks} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GroupList
