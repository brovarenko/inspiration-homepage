import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selectCount } from '../background/backgroundSlice';
import './control.css';

function Control() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <div className="control">
      <button className="btn-control" type="button" disabled={count === 0} onClick={() => dispatch(decrement())}>{'<'}</button>
      <button className="btn-control" type="button" disabled={count === 9} onClick={() => dispatch(increment())}>{'>'}</button>
    </div>
  );
}
export default Control;
