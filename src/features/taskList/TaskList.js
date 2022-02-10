import React from "react";
import styles from './TaskList.module.css';
import { useSelector } from 'react-redux';
import { selectTask } from './taskListSlice';


const TaskList = () => {
    const task = useSelector(selectTask);

    return (
        <div className={styles.taskList}>
        {task.map((e,i)=><div className={styles.task} key={i}>{e}</div>)}
        </div>
    )
};

export default TaskList;