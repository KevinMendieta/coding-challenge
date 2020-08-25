// Libraries
import React, { lazy, useState, Suspense } from 'react'

// Components
const GroupList = lazy(() => import('../views/groupList'))
const GroupDetail = lazy(() => import('../views/groupDetail'))

const App = () => {
  const [selectedGroup, setSelectedGroup] = useState(null)
  return (
    <Suspense fallback={<div>{"Loading..."}</div>}>
      {selectedGroup ? <GroupDetail name='' tasks={[]} onClick={() => {}}/> : <GroupList groups={[]} onClick={setSelectedGroup}/>}
    </Suspense>
  )
}

export default App
