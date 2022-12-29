
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        type="text"
        id='addItem'
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
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