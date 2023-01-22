import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// Fifth Page
function Review(){
    const dispatch = useDispatch();
    let feeling = useSelector((store) => store.feeling)
    let understanding = useSelector((store) => store.understanding)
    let support = useSelector((store) => store.support)
    let comments = useSelector((store) => store.comments)
    const history = useHistory();
    // Sends a POST request to the server  with all 4 global states.
    const submit = () =>{
        axios({
            method: 'POST',
            url: '/feedback',
            data:{
                feeling,
                understanding,
                support,
                comments
            }
          }).then ((response) => {
            history.push('/last')
            // Resets all the global variables after the Request gets sent.
            dispatch({
                type:'RESET'
            })
          }).catch((error) => {
            console.log('axios post error:', error);
          })
     
    }
    return(
        <>
            <h1>Review Your Feedback</h1>
            <div>Feelings: {feeling}</div>
            <div>Understanding: {understanding}</div>
            <div>Support: {support}</div>
            <div>Comments: {comments}</div>
            <button onClick={() => submit()}>Submit</button>
        </>
    )
}
export default Review;