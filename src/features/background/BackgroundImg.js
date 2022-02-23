import React, { useEffect } from "react";
import styles from './BackgroundImg.module.css'
import { getBackgroundAsync, selectBackground } from "./backgroundSlice";
import { useSelector, useDispatch } from "react-redux";

const BackgroundImg = () => {
    const dispatch = useDispatch();
    const src = useSelector(selectBackground);
    
     useEffect(() => {
        dispatch(getBackgroundAsync())
     },[dispatch]);

    return (
        <div className={styles.backgroundConteiner}>
            <img className={styles.background} src={src} alt="background-img"/>
        </div>
      
    )
}

export default BackgroundImg;