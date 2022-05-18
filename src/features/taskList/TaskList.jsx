import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTask, removeTask, finishTask } from './taskListSlice';
import './taskList.css';

function TaskList() {
  const task = useSelector(selectTask);
  const dispatch = useDispatch();
  return (
    <div className="taskList">

      <div className="tasks">
        {task.map((e) => (
          <div className={e.isDone ? 'doneTask' : 'task'} key={e.id}>
            {e.text}
            <div className="btn">
              <button type="button" onClick={() => { dispatch(removeTask(e.id)); }}>Remove</button>
              <button type="button" onClick={() => { dispatch(finishTask(e.id)); }}>{e.isDone ? 'Redo' : 'Done'}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
