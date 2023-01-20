import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function Review(){
    let feeling = useSelector((store) => store.feeling)
    let understanding = useSelector((store) => store.understanding)
    let support = useSelector((store) => store.support)
    let comments = useSelector((store) => store.comments)
    const history = useHistory();
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