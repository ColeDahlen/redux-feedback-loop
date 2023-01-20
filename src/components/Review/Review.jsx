import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
function Review(){
    const history = useHistory();
    return(
        <>
            <button onClick={() => history.push('/last')}>Submit</button>
        </>
    )
}
export default Review;