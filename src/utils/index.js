/**
 * Group the groups data by the group key
 * @param {object[]} groups
 * @returns {object} groupsMap
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
 * @returns {object[]} flatMap
 */
export const flatMap = map => {
  return Object.keys(map).map(key => {
    return { name: key, tasks: map[key] }
  })
}

/**
 * take the task list and converts it into a map with id -> tasks.
 * @param {object[]} data
 * @returns {object} tasksMap
 */
export const mapTasks = data => {
  const tasksMap = {}
  data.forEach(element => {
    const { id } = element
    tasksMap[id] = element
  })
  return tasksMap
}
