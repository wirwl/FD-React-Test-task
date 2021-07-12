import block from "bem-cn";
import React, { useState } from "react";
import './InputField.scss';

const b = block("InputField");

type Props = {
  text?: string;
  onHandleChange?: Function;
  isRequired?: boolean;
  isReadOnly?: boolean;
  refInput?: React.MutableRefObject<null>;
  inputValue?: number;
  wrongValues?: string[];
};

const InputField = (props: Props) => {
  const {
    text = "text",
    onHandleChange,
    isRequired = false,
    isReadOnly = false,
    refInput,
    inputValue = undefined,
    wrongValues = []
  } = props;

  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = wrongValues.includes(e.target.value) ? '' : e.target.value;
    setValue(newValue);
    onHandleChange && onHandleChange(newValue);
  }

  return (
    <label className={b()}>
      <span className={b('caption')}>{text}</span>
      <input ref={refInput} readOnly={isReadOnly} required={isRequired} type='number' className={b("input")} value={inputValue === undefined ? value : inputValue} onChange={handleChange} />
    </label>
  );
};

export default InputField;
