import React, { useState } from "react";
import styles from './InputBar.module.css';
import { useDispatch } from "react-redux";
import { addTask } from "../taskList/taskListSlice";

const InputBar = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    return(
        <div>
            <input onChange={(e)=>{ setTask(e.target.value) }}></input>
            <button onClick={()=>{ dispatch(addTask(task)) }}>ok</button>
        </div>
        
    );
};

export default InputBar;