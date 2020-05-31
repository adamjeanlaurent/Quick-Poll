const express = require('express');

const mysql_lib = require('../mysql_lib');

const router = express.Router();

// @route GET api/poll/:pollID
// @desc Get poll with pollID
router.get('/' , (req, res) => {
    mysql_lib.executeSql('select * from testTable', (r, err) => {
        res.send(r);
    });
})


// @route POST api/poll/:newPoll
// @desc CreatePoll


module.exports = router;