import React, { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [enteredNameIsvalid, setEnterednameIsValid] = useState(true);
  // const nameInputRef = useRef();

  const inputHandler = (event) => {
    setName(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setEnterednameIsValid(false);
      return;
    }
    setEnterednameIsValid(true);

    console.log(name);
    // const enteredValue = nameInputRef.current.value;
    // console.log("Ref:", enteredValue);
    setName("");
  };

  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          value={name}
          onChange={inputHandler}
        />
        {!enteredNameIsvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button onClick={submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
