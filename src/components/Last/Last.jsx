import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Sixth Page
function Last(){
    const history = useHistory();
    // Sends you back to the first page to enter in another reflection.
    return(
        <>
            <h1>SUCCESS!</h1>
            <button onClick={() => history.push('/')}>Leave New Feedback</button>
        </>
    )
}
export default Last;