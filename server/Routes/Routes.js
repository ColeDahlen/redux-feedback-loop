const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) =>{
    let sqlQuery = `INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES 
    ($1, $2, $3, $4);`
    let sqlValues = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) =>{
            res.sendStatus(201);
        })
        .catch((dbErr) =>{
            res.sendStatus(500);
            console.log('Database Error:', dbErr);
        })
})




module.exports = router;