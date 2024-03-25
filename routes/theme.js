const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.render('theme', {
        title: 'Theme',
    })
})
router.route('/pre1900').get((req, res) => { res.render('pre1900') })
router.route('/1900').get((req, res) => { res.render('1900') })
router.route('/1910').get((req, res) => { res.render('1910') })
router.route('/1920').get((req, res) => { res.render('1920') })
router.route('/1930').get((req, res) => { res.render('1930') })
router.route('/1940').get((req, res) => { res.render('1940') })
router.route('/1950').get((req, res) => { res.render('1950') })
router.route('/1960').get((req, res) => { res.render('1960') })
router.route('/1970').get((req, res) => { res.render('1970') })
router.route('/1980').get((req, res) => { res.render('1980') })
router.route('/1990').get((req, res) => { res.render('1990') })
router.route('/2000').get((req, res) => { res.render('2000') })



module.exports = router;