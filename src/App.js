import { useState } from 'react'
import courses from './data/courses'

const App = () => {
  const [ showAllCourses, setShowAllCourses ] = useState(true)

  const handleOnChange = () =>
    setShowAllCourses(!showAllCourses)

  return <div className="container-custom mt-4">
    <div className="bg-primary text-center p-2 m-3">
      <input
        className="form-check-input"
        type="checkbox"
        id="toggle"
        name="toggle-courses"
        onChange={handleOnChange}
      />
      <label class="form-check-label ms-1" for="toogle">Only show courses took already</label>
    </div>

    <div className="mt-4 text-center">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="bg-cyan text-white"><th>Category</th><th>Name</th><th>Desc</th><th>Took</th></tr>
        </thead>
        <tbody>
          {courses.filter(course => showAllCourses || course.took)
            .map(course => {
            const color = course.took ? 'text-dark' : 'text-danger'
            const tookText = course.took ? 'took' : '"Not Yet"'

            return <tr key={ course.name }>
              <td>{ course.category }</td>
              <td className={color}>{ course.name }</td>
              <td>{ course.description }</td>
              <td className={color}>{ tookText }</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </div>
}

export default App
