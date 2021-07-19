import TableBodyRow from "./TableBodyRow"

const Table = ({ courses, showAllCourses }) =>  
  <table className="table table-striped table-bordered">
    <thead>
      <tr className="bg-cyan text-white"><th>Category</th><th>Name</th><th>Desc</th><th>Took</th></tr>
    </thead>

    <tbody>
      {courses
        .filter(course => showAllCourses || course.took)
        .map(course => 
          <TableBodyRow key={ course.name } course={ course }/>
        )}
    </tbody>
  </table>

export default Table
