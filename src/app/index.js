// Libraries
import React, { Suspense, lazy, useState, useEffect } from 'react'

// Components
import { groupByGroup, flatMap, mapTasks } from '../utils'
const GroupList = lazy(() => import('../views/groupList'))
const GroupDetail = lazy(() => import('../views/groupDetail'))

const App = () => {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [groupData, setGroupData] = useState([])

  const getData = async () => {
    const data = await (await fetch('/data.json')).json()
    setGroupData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const groups = groupByGroup(groupData)
  const groupsList = flatMap(groups)
  const tasksMap = mapTasks(groupData)

  const getTaskState = ({completedAt, dependencyIds}) => {
    if (dependencyIds.length === 0 && completedAt !== null) return "completed"
    const reducer = (accumulator, id) => accumulator && getTaskState(tasksMap[id]) === "completed"
    const depsDone = dependencyIds.reduce(reducer, true)
    if (!depsDone) return "blocked"
    if (depsDone && completedAt !== null) return "completed"
    if (depsDone && completedAt === null) return "uncompleted"
  }

  return (
    <div className='app-grid'>
      <Suspense fallback={<div>{"Loading..."}</div>}>
        {selectedGroup ? <GroupDetail name={selectedGroup} tasks={groups[selectedGroup]} getTaskState={getTaskState} onClick={setSelectedGroup}/> : <GroupList groups={groupsList} onClick={setSelectedGroup} getTaskState={getTaskState}/>}
      </Suspense>
    </div>
  )
}

export default App
