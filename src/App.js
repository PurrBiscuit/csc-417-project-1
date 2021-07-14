import courses from './data/courses'

const App = () => {
  return <div>
    {courses.map(course =>
      <h1 key={course.number}>Category: {course.category},  Number: {course.number},  Description: {course.description},  Took: {course.took.toString()}</h1>
    )}
  </div>
}

export default App
