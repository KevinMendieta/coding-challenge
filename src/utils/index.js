/**
 * Groups the groups data by the group key
 * @param {object[]} groups 
 */
export const groupByGroup = groups => {
  const groupsMap = {}
  groups.forEach(element => {
    const { group } = element
    const grouped = groupsMap[group]

    if (grouped) {
      groupsMap[group].push(element)
    } else {
      groupsMap[group] = [element]
    }
  })

  return groupsMap
}

/**
 * Maps all the object keys with its own data into a list
 * @param {object} map 
 */
export const flatMap = map => {
  return Object.keys(map).map(key => {
    return {name: key, tasks: map[key]}
  })
}

export const mapTasks = data => {
  const tasksMap = {}
  data.forEach(element => {
    const { id } = element
    tasksMap[id] = element
  })
  return tasksMap
}
