import React from 'react';
import logo from './logo.svg';
import './App.scss';
import block from 'bem-cn';
import QEPanel from './blocks/QEPanel/QEPanel';
import InputField from './blocks/InputField';

 const b = block('App')

function App() {
  return (
    <div className={b()}>
      <h1 className={b('title')}>Тестовое задание для разработчиков на <span className={b('react')}>React</span></h1>
      <p className={b('desc')}>Разработать интерфейс для решения квадратных уравнений</p>
      <QEPanel/>
      <div className={b('wrapper-answer')}>
            <h3 className={b('answer-title')}>Ответ</h3>
            <div className={b('InputFields')}>
            <div className={b('InputField')}><InputField text='Корень 1'/></div>
            <div className={b('InputField')}><InputField text='Корень 2'/></div>
            </div>
      </div>
    </div>
  );
}

export default App;
