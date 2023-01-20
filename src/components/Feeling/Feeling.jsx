import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
function Feeling(){
    const [feeling, setFeeling] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const howAreYouFeeling = () =>{
        dispatch({
            type: 'SUBMIT_FEELING',
            payload: feeling
        })
    }
    return(
        <>
        <form onSubmit={howAreYouFeeling()}>
            <input onChange={(event) => setFeeling(event.target.value)} 
            placeholder="How are you feeling?"
            value={feeling} 
            type='number'/>
        </form>
            <button onClick={() => history.push('/understanding')}>NEXT</button>
        </>
    )
}
export default Feeling;