import block from "bem-cn";
import './InputField.scss';

const b = block("InputField");

type Props = {
  text?: string;
};

const InputField = ({ text = "text" }: Props) => {
  return (
    <label className={b()}>
      <span className={b('caption')}>{text}</span>
      <input className={b("input")} />
    </label>
  );
};

export default InputField;
