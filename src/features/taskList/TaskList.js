import React from "react";
import styles from './TaskList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTask, removeTask, finishTask } from './taskListSlice';
import BackgroundImg from "../background/BackgroundImg";

const TaskList = () => {
    const task = useSelector(selectTask);
    const dispatch = useDispatch();

    return (
        <div className = {styles.taskList}>
         <BackgroundImg/>
         <div className = {styles.tasks}>
        {task.map((e) => <div className={e.isDone ? styles.doneTask: styles.task} key={e.id}>{e.text}
        <div className = {styles.btn}>
        <button onClick={()=>{dispatch(removeTask(e.id))}}>Remove</button>
        <button onClick={()=>{dispatch(finishTask(e.id))}}>{e.isDone? 'Redo' : 'Done'}</button>
        </div>
        </div>)}
        </div>
        </div>
    )
};

export default TaskList;