// Libraries
import React, { Suspense, lazy, useState } from 'react'

// Components
import { AppProvider } from '../contexts/AppContext'
const GroupList = lazy(() => import('../views/groupList'))
const GroupDetail = lazy(() => import('../views/groupDetail'))

const App = () => {
  const [selectedGroup, setSelectedGroup] = useState(null)

  return (
    <AppProvider>
      <div className='app-grid'>
        <Suspense fallback={<div>{"Loading..."}</div>}>
          {selectedGroup ?
            <GroupDetail
              name={selectedGroup}
              onClick={setSelectedGroup}
            /> :
            <GroupList
              onClick={setSelectedGroup}
            />}
        </Suspense>
      </div>
    </AppProvider>
  )
}

export default App
