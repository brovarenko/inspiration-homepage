import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTask } from '../taskList/taskListSlice';
import './inputBar.css';

function InputBar() {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const addTaskHandler = (e) => {
    e.preventDefault();
    if (task === '') return;
    dispatch(addTask({ text: task, id: uuidv4(), isDone: false }));
    setTask('');
  };
  return (
    <div>
      <form onSubmit={addTaskHandler}>
        <input value={task} type="text" onChange={(e) => { setTask(e.target.value); }} />
      </form>
    </div>
  );
}

export default InputBar;
