import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
function Support(){
    const [support, setSupport] = useState('')
    const history = useHistory();
    const dispatch = useDispatch();
    const howAreYouSupported = () =>{
        dispatch({
            type: 'SUBMIT_SUPPORTED',
            payload: support
        })
    }
    return(
        <>
        <form onSubmit={howAreYouSupported()}>
            <input onChange={(event) => setSupport(event.target.value)} 
            placeholder="How Are You Supported?"
            value={support}
            type='number'/>
        </form>
            <button onClick={() => history.push('/comments')}>NEXT</button>
        </>
    )
}
export default Support;