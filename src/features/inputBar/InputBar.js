import React, { useState } from "react";
import styles from './InputBar.module.css';
import { useDispatch } from "react-redux";
import { addTask } from "../taskList/taskListSlice";
import { v4 as uuidv4 } from 'uuid';


const InputBar = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    const addTaskHandler = (e) => {
        e.preventDefault();
        if (task === "") return;
        dispatch(addTask({ text:task,id:uuidv4(),isDone: false }));
        setTask('');
    };
    return(
        <div>
        <form onSubmit={addTaskHandler}>
            <input value={task} type='text' onChange={ (e) => { setTask(e.target.value) } } ></input>
            </form>
        </div>
        
    );
};

export default InputBar;