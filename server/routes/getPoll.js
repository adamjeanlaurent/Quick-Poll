const express = require('express');

const mysql_lib = require('../mysql_lib');

const mysql = require('mysql');

const router = express.Router();

// @route GET api/poll/:pollID
// @desc Get poll with pollID
router.get('/:pollID' , (req, res) => {
    let pollId = req.params.pollID;
    let sql = `SELECT polls.title, questions.questionPrompt, answers.answerPrompt ` +  
    `FROM polls ` + 
    `INNER JOIN questions ON polls.pollId =${mysql.escape(pollId)} AND questions.parentPollId = ${mysql.escape(pollId)} ` +
    `INNER JOIN answers ON answers.parentQuestionId = ${mysql.escape(pollId)};`
    mysql_lib.executeSql(sql, (r, err) => {
        res.send(err);
    });
})

module.exports = router;