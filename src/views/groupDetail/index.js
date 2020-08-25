// Libraries
import React from 'react'

// Components
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
const GroupDetail = ({name, tasks, onClick, getTaskState}) => {
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
              state={getTaskState(task)}
              key={id}
              name={name}
              {...task}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default GroupDetail
