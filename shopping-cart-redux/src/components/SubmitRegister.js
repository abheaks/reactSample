import React from "react";
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { registerActions } from "../store/register-slice";
import { uiSliceActions } from "../store/ui-slice";

const ShowResults = (values) => {
  console.log(values);
  const notification = useSelector(state => state.register.contactDetailsProvided);
  console.log(notification);
  const dispatch = useDispatch();
  dispatch(uiSliceActions.showNotification({
    open: false,
  }))
  return (
    <div>
      ksdjnmksjdn
    </div>
  )
}

export default ShowResults;