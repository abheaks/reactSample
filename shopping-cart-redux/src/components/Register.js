import React from "react";
import { useDispatch } from "react-redux";
import { registerActions } from "../store/register-slice";
import { Field, reduxForm } from "redux-form";

const Register = () => {
  const dispatch = useDispatch();
  let regDetails = {
    name: "",
    email: "",
  };
  const titleChangeHandler = (event) => {
    console.log("First Print:" + event.target.value);
    regDetails.name = event.target.value;
  };
  const emailChangeHandler = (event) => {
    console.log("Second Print:" + event.target.value);
    regDetails.email = event.target.value;
  };

  const submitHandler = () => {
    console.log("Third Print:" + regDetails);
    dispatch(registerActions.registerUser(regDetails));
    dispatch(registerActions.viewInput(regDetails));
  };
  return (
    <div>
      <div>
        Name: <input type="text" onChange={titleChangeHandler}></input>
      </div>
      <div>
        Email: <input type="text" onChange={emailChangeHandler}></input>
      </div>

      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default reduxForm({
  form: "simple", // a unique identifier for this form
})(Register);
