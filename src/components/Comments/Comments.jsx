import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
function Comments(){
    const [comment, setComment] = useState('')
    const history = useHistory();
    const dispatch = useDispatch();
    const howAreYouCommenting = () =>{
        dispatch({
            type: 'SUBMIT_COMMENT',
            payload: comment
        })
    }
    return(
        <>
        <form onSubmit={howAreYouCommenting()}>
            <input onChange={(event) => setComment(event.target.value)} 
            placeholder="Any Comments?"
            value={comment}/>
        </form>
            <button onClick={() => history.push('/review')}>NEXT</button>
        </>
    )
}
export default Comments;
