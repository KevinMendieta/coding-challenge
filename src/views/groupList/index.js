// Libraries
import React from 'react'

// Components
import Title from '../../components/title'
import './styles.css'
import { useAppState } from '../../contexts/AppContext'

/**
 * @typedef {{
 * tasks: object[],
 * }} GroupSummaryProps
 * @param {GroupSummaryProps} props
 */
const GroupSummary = ({ tasks }) => {
  const {getTaskState} = useAppState()
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
const GroupList = ({onClick}) => {
  const {groupsList} = useAppState()
  return (
    <div className='app-body'>
      <div className='title-wrapper'>
        <Title title={"Things To Do"}/>
      </div>
      <ul className='group-list-wrapper'>
        {groupsList.map(({name, tasks}) => (
          <li
            className='group-list-item'
            key={name}
            onClick={() => onClick(name)}
          >
            <img src='/group.svg' alt='arrow'/>
            <div className='group-summary-container'>
              <h3>{name}</h3>
              <GroupSummary tasks={tasks}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GroupList
