import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

function AddTodo(props) {
  console.log(props);
  const [input, setInput] = useState("");
  const updateInput = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = () => {};
  return (
    <div>
      <input onChange={updateInput} value={input} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default connect(null, { addTodo })(AddTodo);
