import React from "react";

const list = ["name1", "name2", "name3", "name4"];

const TaskList = () => {
    return(
        <div>
        {list.map((e,i)=><div key={i}>{e}</div>)}
        </div>
    )
};

export default TaskList;