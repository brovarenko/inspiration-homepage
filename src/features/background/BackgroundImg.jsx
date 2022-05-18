import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './backgroundImg.css';
import {
  getBackgroundAsync, selectBackground, selectStatus,
} from './backgroundSlice';

function BackgroundImg() {
  const dispatch = useDispatch();
  const src = useSelector(selectBackground);
  const status = useSelector(selectStatus);
  useEffect(() => {
    dispatch(getBackgroundAsync());
  }, [dispatch]);
  if (!status) return '';

  return (
    <div className="backgroundConteiner">
      <img className="background" src={src.urls.full} alt="background-img" />
    </div>
  );
}

export default BackgroundImg;
