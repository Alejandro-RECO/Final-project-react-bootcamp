import { ToastContainer,ToastText } from "./toastElement";
import React from 'react'

const Toast = ({bg, text}) => {
  return (
    <ToastContainer bg={bg}>
      <ToastText> 
        {text}
      </ToastText>
    </ToastContainer>
  )
}

export default Toast
