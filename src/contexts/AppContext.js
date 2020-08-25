// Libraries
import React, { useContext, useState, useEffect } from 'react'

// Components
import { groupByGroup, flatMap, mapTasks } from '../utils'
const AppContext = React.createContext()

export const useAppState = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const [groupData, setGroupData] = useState([])

  // Retrives data from public assets /data.json
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

  // calculate the state of a given task
  const getTaskState = ({ completedAt, dependencyIds }) => {
    if (dependencyIds.length === 0 && completedAt !== null) return 'completed'
    const reducer = (accumulator, id) =>
      accumulator && getTaskState(tasksMap[id]) === 'completed'
    const depsDone = dependencyIds.reduce(reducer, true)
    if (!depsDone) return 'blocked'
    if (depsDone && completedAt !== null) return 'completed'
    if (depsDone && completedAt === null) return 'uncompleted'
  }

  // toggles task state given the task id
  const updateData = (state, id) => {
    const index = groupData.findIndex(({ id: taskId }) => id === taskId)
    const tasks = [...groupData]
    tasks[index].completedAt = state === 'completed' ? null : new Date()
    setGroupData(tasks)
  }

  const appState = {
    groups,
    groupsList,
    tasksMap,
    getTaskState,
    updateData
  }

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>
}
