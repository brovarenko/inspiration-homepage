import React from "react";
import styles from './TaskList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTask, removeTask } from './taskListSlice';


const TaskList = () => {
    const task = useSelector(selectTask);
    const dispatch = useDispatch();

    return (
        <div className = {styles.taskList}>
        {task.map((e) => <div className={styles.task} key={e.id}>{e.text}<button onClick={()=>{dispatch(removeTask(e.id))}}>del</button></div>)}
        </div>
    )
};

export default TaskList;