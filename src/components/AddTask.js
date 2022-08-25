
const AddTask = () => {
  return (
    <form className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add task"/>

        <label>Day</label>
        <input type="text" placeholder="Enter Day"/>

        <label className="reminder">Set Reminder</label>
        <input type="checkbox" />

    </form>
  )
}

export default AddTask
