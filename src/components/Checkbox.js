const Checkbox = ({ handleOnChange }) =>
  <div className="bg-primary text-center p-2 m-3">
    <input
      className="form-check-input"
      type="checkbox"
      id="toggle"
      name="toggle-courses"
      onChange={ handleOnChange }
    />
    <label className="form-check-label ms-1" htmlFor="toogle">Only show courses took already</label>
  </div>

export default Checkbox
