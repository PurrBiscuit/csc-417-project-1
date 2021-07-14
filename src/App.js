import { useState } from 'react'
import courses from './data/courses'

const App = () => {
  const [ showAllCourses, setShowAllCourses ] = useState(true)

  const handleOnChange = () =>
    setShowAllCourses(!showAllCourses)

  return <div>
    <input type="checkbox" id="toggle" name="toggle-courses" onChange={handleOnChange}/>
    <label for="toogle">Only show courses took already</label>

    {courses.filter(course => showAllCourses || course.took)
      .map(course => {
      const classes = course.took ? 'text-dark' : 'text-danger'

      return <h1 key={course.number} className={classes}>Category: {course.category},  Number: {course.number},  Description: {course.description},  Took: {course.took.toString()}</h1>
    })}
  </div>
}

export default App
