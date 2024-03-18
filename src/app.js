require('dotenv').config() // .env

const express = require('express')
const path = require('path') // Express.js
const hbs = require('hbs') // Express-hbs template engine
const cors = require('cors'); //cross 
const favicon = require('serve-favicon')

// Define Route Path
const timeline = require('../routes/timeline');
const theme = require('../routes/theme');
const saskatchewanRoute = require('../routes/saskatchewanRoute') 
const albertaRoute = require('../routes/albertaRoute')
const errorMiddleware = require('../middleware/errorMiddleware')

// Define Socket.io
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Initialize Socket.io server
io.on('connection', () => { console.log('new websocket connection') });
server.listen(3000);

// Define Mongoose for database
const port = process.env.PORT || 3000
const MONGOURL = process.env.DATABASE_URL

// Define Template Paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const indexPathFile = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// MIDDLEWARES
// 1. Favicon middleware - third-party
app.use(favicon(path.join(__dirname, '../public/favicon.ico')))

// 2. Built-in middleware - Parses incoming requests with JSON payload. Used in development stage when using POST method.
app.use(express.json())
// Optional - if you want to use form-data to UPDATE document
/* app.use(express.urlencoded({ extended: false }))*/

// 3. CORS middleware
app.use(cors());

// 4. Error-handling middleware
app.use(errorMiddleware)

// --------------------------------------------------------------

// Set up Express-hbs template engine
app.set('view engine', 'hbs');
app.set('views', indexPathFile)
hbs.registerPartials(partialsPath)
hbs.registerPartials(timelinePathFile)

// Set up static directory
app.use(express.static(publicDirectoryPath))

// --------------------------------------------------------------

// Binding Application-level middleware using GET and app.use function handler for all web pages
// 1. Homepage
app.get('/', (req, res) => {
    /* throw new Error('fake error') */ // Used to test error middleware
    res.render('index')
})

// 2. Timeline Page
app.use('/timeline/', timeline)
app.use('/alberta', timeline)

// 3. Themes Page
app.get('/themes', (req, res) => {
    res.render('themes', {
        title: 'Theme',
    })
})

// 4. Photos Page
app.get('/photos', (req, res) => {
    res.render('photos', {
        title: 'Photo Gallery',
    })
})

// 5. Videos Page
app.get('/video', (req, res) => {
    res.render('video', {
        title: "100 Years of Nursing in Film"
    })
})

// 6. Credits Page
app.get('/credit', (req, res) => {
    res.render('credit', {
        title: "One Hundred Years of Nursing on the Prairies Credits"
    })
})

// --------------------------------------------------------------

// Mongoose database - Refer to controller folder for Application-level middleware that contains CRUD logic
app.use('/api/saskatchewan', saskatchewanRoute)
app.use('/api/alberta', albertaRoute)

// Connect to Mongodb using Mongoose
const mongoose = require('mongoose');

mongoose.connect(MONGOURL)
    .then(() => {
        console.log('Mongoose Connected!')
        //start up server
        app.listen(//Set up reload 
app.set(port), () => {
            console.log(`Server up in port ${port}.`)
        })
    }).catch((error) => {
        console.log(error);
    });

// --------------------------------------------------------------

// Reload code here - for development stage only
// reload(app).then(() => {
//     // reloadReturned is documented in the returns API in the README

//     // Reload started, start web server
//     server.listen(app.get(port), () => {
//         console.log('Web server listening on port ' + app.get(port))
//     })
// }).catch((error) => {
//     res.status(500)
//     throw new Error(error.message)
//     /* console.error('Reload could not start, could not start app.js', err) */
// })

