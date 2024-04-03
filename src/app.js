require('dotenv').config() // .env
/* const reload = require('reload') */ // For development to refresh browser when change occur
const express = require('express')
const path = require('path') // Express.js
const hbs = require('hbs') // Express-hbs template engine
const cors = require('cors'); //cross browser
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

// Reload - FOR DEVELOPMENT
/* app.set('port', process.env.PORT || 3000) */

// Initialize Socket.io server - FOR PRODUCTION
io.on('connection', () => { console.log('new websocket connection') });
server.listen(3000, console.log('Express in port 3000'));

// Define Mongoose for database
const portDb = process.env.PORT || 4000
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

// 3. Themes Page
app.use('/theme', theme)

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
        //start up server
        app.listen(//Set up reload 
            app.set(portDb), () => {
                console.log(`Mongoose Database Server up in port ${portDb}.`)
            })
    }).catch((error) => {
        console.log(error);
    });

// --------------------------------------------------------------
