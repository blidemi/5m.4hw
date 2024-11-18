import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementNum, incrementNum, resetNum, setText, plusfiveNum, minusfiveNum} from './redux/reduser';

const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>{
                dispatch(incrementNum())
            }}>+</button>

            <button onClick={()=>{
                  dispatch(decrementNum())
            }}>-</button>

            <button onClick={() => {
                dispatch(resetNum())
            }}>reset</button>

            <button onClick={() => {
                dispatch(setText())
            }}>change</button>

            <button onClick={() => {
                dispatch(plusfiveNum())
            }}>+5</button>

           <button onClick={() => {
                dispatch(minusfiveNum())
            }}>-5</button>
        </div>
    );
}

export default Btn;
