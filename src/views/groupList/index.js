// Libraries
import React from 'react'

// Components
import Title from '../../components/title'
import './styles.css'

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
    <div className='app-body'>
      <div className='title-wrapper'>
        <Title title={"Things To Do"}/>
      </div>
      <ul className='group-list-wrapper'>
        {groups.map(({name, tasks}) => (
          <li className='group-list-item' key={name} onClick={() => onClick(name)}>
            <h3>{name}</h3>
            <GroupSummary tasks={tasks} getTaskState={getTaskState}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GroupList
