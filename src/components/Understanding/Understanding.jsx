import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
function Understanding(){
    const [understanding, setUnderstanding] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const howAreYouUnderstanding = () =>{
        dispatch({
            type: 'SUBMIT_UNDERSTANDING',
            payload: understanding
        })
    }
    return(
        <>
        <form onSubmit={howAreYouUnderstanding()}>
            <input onChange={(event) => setUnderstanding(event.target.value)} 
            placeholder="How is your Understanding?"
            value={understanding} 
            type='number'/>
        </form>
            <button onClick={() => history.push('/support')}>NEXT</button>
        </>
    )
}
export default Understanding;