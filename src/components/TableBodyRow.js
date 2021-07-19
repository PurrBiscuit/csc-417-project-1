const TableBodyRow = ({ course }) => {
  const color = course.took ? 'text-dark' : 'text-danger'
  const tookText = course.took ? 'took' : '"Not Yet"'

  return <tr>
    <td>{ course.category }</td>
    <td className={ color }>{ course.name }</td>
    <td>{ course.desc }</td>
    <td className={ color }>{ tookText }</td>
  </tr>
}

export default TableBodyRow
