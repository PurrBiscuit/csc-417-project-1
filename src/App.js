import courses from './data/courses'

const App = () => {
  return <div>
    {courses.map(course => {
      const classes = course.took ? 'text-dark' : 'text-danger'

      return <h1 key={course.number} className={classes}>Category: {course.category},  Number: {course.number},  Description: {course.description},  Took: {course.took.toString()}</h1>
    })}
  </div>
}

export default App
