import block from "bem-cn";
import React, { useState } from "react";
import './InputField.scss';

const b = block("InputField");

type Props = {
  text?: string;
  onHandleChange?: Function;
  isRequired?: boolean;
  isReadOnly?: boolean;
  ref1?: React.MutableRefObject<null>;
};

const InputField = ({ text = "text", onHandleChange, isRequired = false, isReadOnly = false, ref1 }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onHandleChange && onHandleChange(e.target.value);
  }

  return (
    <label className={b()}>
      <span className={b('caption')}>{text}</span>
      <input ref={ref1} readOnly={isReadOnly} required={isRequired} type='number' className={b("input")} value={value} onChange={handleChange} />
    </label>
  );
};

export default InputField;
