const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => { res.render('timeline') })
router.route('/pre1900').get((req, res) => { res.render('pre1900') })



module.exports = router;