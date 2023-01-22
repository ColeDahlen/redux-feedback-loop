import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Second Page
function Understanding(){
    const [understanding, setUnderstanding] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    // Update global variable with user input.
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
        {
            understanding !== '' ? <button onClick={() => history.push('/support')}>NEXT</button> : <div></div>
        }
        </>
    )
}
export default Understanding;