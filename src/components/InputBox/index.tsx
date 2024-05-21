import React from 'react';
import './InputBox.scss';
import { InputBoxProps } from '../../types/InputBoxProps';

const InputBox: React.FC<InputBoxProps> = ({ name, id, onCheckboxChange }) => {
  return (
    <div className="input-box">
      <p>{name}</p>
      <span onClick={() => onCheckboxChange(false, id)}> &#x2715; </span>
    </div>
  );
}

export default InputBox;