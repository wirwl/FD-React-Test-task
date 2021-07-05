import React, { useRef } from "react";
import "./App.scss";
import block from "bem-cn";
import QEPanel from "../QEPanel/QEPanel";
import InputField from "../InputField/InputField";
import { qeCalc } from "../../utils/utils";

const b = block("App");

function App() {
  const root1 = useRef(null);
  const root2 = useRef(null);

  const onCalc = (a: number, b: number, c: number) => {
    const roots = qeCalc(a, b, c);
    const [r1, r2] = roots;
    (root1.current as any).value = r1;
    if (r2) (root2.current as any).value = r2;
  }

  return (
    <div className={b()}>
      <div className={b("ellipse1")} />
      <h1 className={b("title")}>
        Тестовое задание для&nbsp;разработчиков на
        <span className={b("react")}> React</span>
      </h1>
      <p className={b("desc")}>
        Разработать интерфейс для решения квадратных уравнений
      </p>
      <QEPanel onCalc={onCalc} />
      <div className={b("wrapper-answer")}>
        <h3 className={b("answer-title")}>Ответ</h3>
        <div className={b("InputFields")}>
          <div className={b("InputField")}>
            <InputField refInput={root1} isReadOnly={true} text="Корень 1" />
          </div>
          <div className={b("InputField")}>
            <InputField refInput={root2} isReadOnly={true} text="Корень 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
