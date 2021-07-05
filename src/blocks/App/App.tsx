import "./App.scss";
import block from "bem-cn";
import QEPanel from "../QEPanel/QEPanel";
import InputField from "../InputField/InputField";
import { qeCalc } from "../../utils/utils";
import { useState } from "react";
import inf from './inf.svg';

const b = block("App");

const App = () => {
  const [root1, setRoot1] = useState<number>();
  const [root2, setRoot2] = useState<number>();
  const [isShownInf, setIsShownInf] = useState<boolean>(false);

  const onCalc = (a: number, b: number, c: number) => {
    const roots = qeCalc(a, b, c);
    const [r1, r2] = roots;

    setRoot1(r1);
    setRoot2(r2);

    setIsShownInf(roots.length === 0);
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
            <InputField inputValue={root1} isReadOnly={true} text="Корень 1" />
          </div>
          <div className={b("InputField")}>
            <InputField inputValue={root2} isReadOnly={true} text="Корень 2" />
          </div>
        </div>
      </div>
      <div className={b('inf', { shown: isShownInf })}>
        <img className={b('inf-image')} src={inf} alt='information' />
        <span className={b('inf-text')}>Дискриминант отрицательное число, корней на множестве действительных чисел нет.</span>
      </div>
    </div>
  );
}

export default App;
