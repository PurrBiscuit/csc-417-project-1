import { useState } from 'react'
import courses from './data/courses'

const App = () => {
  const [ showAllCourses, setShowAllCourses ] = useState(true)

  const handleOnChange = () =>
    setShowAllCourses(!showAllCourses)

  return <div className="container mt-4">
    <div className="bg-primary text-center p-3">
      <input
        type="checkbox"
        id="toggle"
        name="toggle-courses"
        onChange={handleOnChange}
      />
      <label for="toogle" className="text-white">Only show courses took already</label>
    </div>

    <div className="mt-4 text-center">
      {courses.filter(course => showAllCourses || course.took)
        .map(course => {
        const color = course.took ? 'text-dark' : 'text-danger'

        return <h2 key={course.number} className={color}>Category: {course.category},  Number: {course.number},  Description: {course.description},  Took: {course.took.toString()}</h2>
      })}
    </div>
  </div>
}

export default App
