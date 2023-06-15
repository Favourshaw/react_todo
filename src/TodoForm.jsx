import { useState } from "react";

export default function TodoForm(props) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    props.onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="formContainer">
        <div className="form-row">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            placeholder="New Todo Item"
            required=""
            className="input input-alt"
          />
          <span class="input-border input-border-alt"></span>
        </div>
        <div>
          <button className="btnAdd">Add</button>
        </div>
      </div>
    </form>
  );
}
