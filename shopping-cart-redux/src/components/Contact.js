import React from "react";
import { useDispatch } from "react-redux";
import { registerActions } from "../store/register-slice";
import { contactActions } from "../store/contact-slice";
import { Field, reduxForm } from "redux-form";

import { useSelector } from "react-redux";
const Contact = () => {
  const Name = useSelector((state) => state.register.name);
  const email = useSelector((state) => state.register.email);
  // itemsList.forEach((item) => {
  //   total += item.totalPrice;
  // })
  const demmy = "asjdk";
  const dispatch = useDispatch();
  let regDetails = {
    phone: "",
    address: "",
  };
  const titleChangeHandler = (event) => {
    console.log("First Print:" + Name);
    regDetails.phone = event.target.value;
  };
  const emailChangeHandler = (event) => {
    console.log("Second Print:" + event.target.value);
    regDetails.address = event.target.value;
  };
  const submitHandler = () => {
    console.log("Third Print:" + regDetails);
    dispatch(contactActions.contactUser(regDetails));
    dispatch(contactActions.viewInput(regDetails));
  };
  return (
    <div>
      {/* <input type="text" value={itemsList[0].Name}></input> */}
      <h2>Contact Details</h2>
      <div>
        <h2>
          Name:
          {Name}
        </h2>
        <h2>
          Email:
          {email}
        </h2>
      </div>
      <div>
        <h2>
          Phone:<input type="text" onChange={titleChangeHandler}></input>
        </h2>
      </div>
      <div>
        <h2>
          Address:<input type="text" onChange={emailChangeHandler}></input>
        </h2>
      </div>

      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default reduxForm({
  form: "simple", // a unique identifier for this form
})(Contact);
