const path = require('path')
const express = require('express')
const hbs = require('hbs')
const reload = require('reload')
const http = require('http') //reload
const timeline = require('../routes/timeline'); //define routes path
const cors = require('cors');
const favicon = require('serve-favicon')

const socketio = require('socket.io')


const app = express()
const server = http.createServer(app) // //Reload start
const io = socketio(server)

//Set up reload 
app.set('port', process.env.PORT || 4000)

// Define Paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
/* const templatesPath = path.join(__dirname, '../templates') */
const indexPathFile = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.use(favicon(path.join(__dirname, '../public/favicon.ico')))



// Use PORT provided in environment or default to 3000
/* const port = process.env.PORT || 4000;

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
    console.log('Server up in port 4000.')
}); */

// Set up CORS middleware
app.use(cors());



// Set up template engine called HBShandlebars for Express - hbs
app.set('view engine', 'hbs');
app.set('views', indexPathFile)
hbs.registerPartials(partialsPath)

// Set up static directory
app.use(express.static(publicDirectoryPath))


// Set up route handlers
app.get('/', (req, res) => {
    res.render('index')
})

// Set up routes
app.use('/timeline', timeline)

/* app.get('/timeline', (req, res) => {
    res.render('timeline', {
        title: "Timeline"
    })
}) */

// app.get('/timeline/pre1900', (req, res) => {
//     res.render('pre1900', {
//         layout: "pre1900"
//     })
// })

app.get('/themes', (req, res) => {
    res.render('themes', {
        title: 'Theme',
    })
})

app.get('/photos', (req, res) => {
    res.render('photos', {
        title: 'Photo Gallery',
    })
})

app.get('/video', (req, res) => {
    res.render('video', {
        title: "100 Years of Nursing in Film"
    })
})

app.get('/credit', (req, res) => {
    res.render('credit', {
        title: "One Hundred Years of Nursing on the Prairies Credits"
    })
})

//start up server
// app.listen(4000, () => {
//     console.log('Server up in port 4000.')
// }) 

io.on('connection', () => {
    console.log('new websocket connection');
})


// Reload code here
reload(app).then(function () {
    // reloadReturned is documented in the returns API in the README

    // Reload started, start web server
    server.listen(app.get('port'), function () {
        console.log('Web server listening on port ' + app.get('port'))
    })
}).catch(function (err) {
    console.error('Reload could not start, could not start app.js', err)
})

