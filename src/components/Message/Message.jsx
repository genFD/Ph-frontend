import React from 'react';
import './message.css';

const Message = ({ children }) => {
  return <Alert>{children}</Alert>;
};

const Alert = () => {
  return <div className='alert'></div>;
};

export default Message;
