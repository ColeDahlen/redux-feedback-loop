import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
function Last(){
    const history = useHistory();
    return(
        <>
            <button onClick={() => history.push('/')}>Leave New Feedback</button>
        </>
    )
}
export default Last;