
import { FaPlus } from "react-icons/fa";

const AddItem = () => {
  return (
    <form className='addForm'>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        type="text"
        id='addItem'
        placeholder="Add Item"
        required
      />
      <button
        type='submitt'
        aria-label="Add iIem"
      >

        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem