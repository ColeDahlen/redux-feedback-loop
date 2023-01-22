import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// First page
function Feeling(){
    const [feeling, setFeeling] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    // Update global variable with user input.
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
        {
            feeling !== '' ? <button onClick={() => history.push('/understanding')}>NEXT</button> : <div></div>
        }
        </>
    )
}
export default Feeling;