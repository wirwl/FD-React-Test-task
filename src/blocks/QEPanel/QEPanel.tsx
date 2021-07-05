import "./QEPanel.scss";
import block from "bem-cn";
import React from 'react';
import { useState } from "react";
import InputField from "../InputField/InputField";

const qep = block("QEPanel");

type Props = {
  onCalc?: Function;
}

const QEPanel = ({ onCalc }: Props) => {
  const [a, setA] = useState<number>();
  const [b, setB] = useState<number>();
  const [c, setC] = useState<number>();

  const onHandleInputChange = (value: string, index: number) => {
    const numValue = parseInt(value);
    switch (index) {
      case 0:
        setA(numValue);
        break;
      case 1:
        setB(numValue);
        break;
      case 2:
        setC(numValue);
    }

  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onCalc && onCalc(a, b, c);
  }

  return (
    <div className={qep()}>
      <div className={qep("wrapper-eq")}>
        <h3 className={qep("title")}>Пример уравнения</h3>
        <p className={qep("equation")}>
          {a || 'a'}x<sup className={qep("degree")}>2</sup>+{b || 'b'}x+{c || 'c'}=0
        </p>
      </div>
      <form method='post' action='' className={qep("wrapper-coefs")}>
        <ul className={qep("list")}>
          {["Коэффициент A", "Коэффициент B", "Коэффициент C"].map(
            (item, index) => (
              <li key={index} className={qep("item")}>
                <InputField isRequired={true} text={item} onHandleChange={(value: string) => onHandleInputChange(value, index)} />
              </li>
            )
          )}
          <button type="button" className={qep("calc")} onClick={handleButtonClick}>Рассчитать</button>
        </ul>
      </form>
    </div>
  );
};

export default QEPanel;
