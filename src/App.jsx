/* eslint-disable import/no-named-as-default */
import React from 'react';
import './App.css';
import InputBar from './features/inputBar/InputBar';
import TaskList from './features/taskList/TaskList';
import Quote from './features/quote/Quote';
import Weather from './features/weather/Weather';
import Control from './features/control/Control';
import BackgroundImg from './features/background/BackgroundImg';

function App() {
  return (
    <div className="App">
      <BackgroundImg />
      <Control />
      <Weather />
      <InputBar />
      <TaskList />
      <Quote />
    </div>
  );
}

export default App;
