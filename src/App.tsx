import React from 'react';
import logo from './logo.svg';
import './App.scss';
import block from 'bem-cn';
import QEPanel from './blocks/QEPanel/QEPanel';

 const b = block('App')

function App() {
  return (
    <div className={b()}>
      <h1 className={b('title')}>Тестовое задание для разработчиков на <span className={b('react')}>React</span></h1>
      <p className={b('desc')}>Разработать интерфейс для решения квадратных уравнений</p>
      <QEPanel/>
    </div>
  );
}

export default App;
