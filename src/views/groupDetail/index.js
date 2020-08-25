// Libraries
import React from 'react'

// Components
import { useAppState } from '../../contexts/AppContext'
import Task from '../../components/task'
import Title from '../../components/title'
import './styles.css'

/**
 * @typedef {{
 * name: string,
 * tasks: object[],
 * onClick: Function
 * }} GroupDetailProps
 * @param {GroupDetailProps} props 
 */
const GroupDetail = ({name, onClick}) => {
  const {getTaskState, updateData, groups} = useAppState()
  const tasks = groups[name]
  return (
    <div className='app-body'>
      <div className='header-container'>
        <Title title={name}/>
        <span onClick={() => onClick(null)}>{"<< ALL GROUPS"}</span>
      </div>
      <ul className='tasks-wrapper'>
        {tasks.map(task => {
          const {task: name, id} = task
          return (
            <Task
              key={id}
              state={getTaskState(task)}
              name={name}
              updateData={updateData}
              {...task}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default GroupDetail
