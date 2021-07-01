import "./QEPanel.scss";
import block from "bem-cn";
import { useState } from "react";
import InputField from "../InputField";

const qep = block("QEPanel");

const QEPanel = () => {
  const [a, setA] = useState("a");
  const [b, setB] = useState("b");
  const [c, setC] = useState("c");

  return (
    <div className={qep()}>
      <div className={qep("wrapper-eq")}>
        <h3 className={qep("title")}>Пример уравнения</h3>
        <p className={qep("equation")}>``</p>
      </div>
      <div className={qep("wrapper-coefs")}>
        <ul className={qep('list')}>
          {["Коэффициент A", "Коэффициент B", "Коэффициент C"].map((item) => (
            <li className={qep('item')}>
              <InputField text={item} />
            </li>
          ))}
          <button className={qep('calc')}>Рассчитать</button>
        </ul>
      </div>
    </div>
  );
};

export default QEPanel;
