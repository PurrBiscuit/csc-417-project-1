import { useState } from 'react'

import Checkbox from './components/Checkbox'
import courses from './data/courses'
import Table from './components/Table'

const App = () => {
  const [ showAllCourses, setShowAllCourses ] = useState(true)

  const handleOnChange = () =>
    setShowAllCourses(!showAllCourses)

  return <div className="container-custom mt-4">
    <Checkbox handleOnChange={ handleOnChange } />

    <div className="mt-4 text-center">
      <Table courses={ courses } showAllCourses={ showAllCourses } />
    </div>
  </div>
}

export default App
