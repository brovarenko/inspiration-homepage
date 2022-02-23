import React from 'react';
import './App.css';
import InputBar from './features/inputBar/InputBar';
import TaskList from './features/taskList/TaskList';
import Weather from './features/weather/Weather';
import Quote from './features/quote/Quote';
import BackgroundImg from './features/background/BackgroundImg';

function App() {
  return (
    <div className="App">
     
      <Weather/>
      <InputBar/>
      <TaskList/>
      <Quote/>
    </div>
  );
}

export default App;
