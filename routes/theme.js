const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.render('theme', {
        title: 'Theme',
    })
})

router.route('/pioneernursing').get((req, res) => {
    res.render('pioneernursing', {
        title: 'Pioneer Nursing',
    })
})

router.route('/nursesinthewar').get((req, res) => {
    res.render('nursesinthewar', {
        title: 'Nurses in the Wars',
    })
})

router.route('/nursesinrural').get((req, res) => {
    res.render('nurseinrural', {
        title: 'Nursing in Rural, Remote and Northern Areas',
    })
})

router.route('/nursesandunions').get((req, res) => {
    res.render('nursesandunions', {
        title: 'Nurses and Unions',
    })
})

router.route('/advocacyandnursing').get((req, res) => {
    res.render('advocacyandnursing', {
        title: 'Advocacy and Nursing',
    })
})

router.route('/evolutionofnursing').get((req, res) => {
    res.render('evolutionofnursing', {
        title: 'Evolution of Nursing',
    })
})

router.route('/thepeoplewhocare').get((req, res) => {
    res.render('thepeoplewhocare', {
        title: 'The People Who Care',
    })
})

router.route('/others').get((req, res) => {
    res.render('others', {
        title: 'Other stories',
    })
})

module.exports = router;