const path = require('path')
const express = require('express')
const hbs = require('hbs')
const reload = require('reload')
const http = require('http') //reload
const timeline = require('../routes/timeline'); //define routes path
const { MongoClient } = require('mongodb'); //connects to MongoDB

const app = express()

// Define Paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const templatesPath = path.join(__dirname, '../templates')
const indexPathFile = path.join(__dirname, '../templates/views')

const partialsPath = path.join(__dirname, '../templates/partials')

//Set up reload 
app.set('port', process.env.PORT || 4000)

// Set up template engine called HBShandlebars for Express - hbs
app.set('view engine', 'hbs');
app.set('views', indexPathFile)
hbs.registerPartials(partialsPath)

// Set up static directory
app.use(express.static(publicDirectoryPath))

app.use('/timeline', timeline)

// add hbs helper for reading json file
/* hbs.registerHelper("with", function (context, options) {
    return options.fn(context);
}); */

// Set up route handlers
app.get('/', (req, res) => {
    res.render('index')
})

/* app.get('/timeline', (req, res) => {
    res.render('timeline', {
        title: "Timeline"
    })
}) */

app.get('/timeline/pre1900', (req, res) => {
    res.render('pre1900', {
        layout: "pre1900"
    })
})

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
/* app.listen(3000, () => {
    console.log('Server up in port 3000.')
}) */



app.post('/create', async (req, res) => {
    try {
        const db = client.db('Project 0');
        const collection = db.collection('Cluster0');

        const result = await collection.insertOne(req.body);
        res.json({ message: 'Document inserted successfully', data: result.ops });
    } catch (error) {
        console.error('Error inserting document:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//connect to MongoDB
const uri = DB_URI; // MongoDB connection URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();






//Reload start
var server = http.createServer(app)

// Reload code here
reload(app).then(function (reloadReturned) {
    // reloadReturned is documented in the returns API in the README

    // Reload started, start web server
    server.listen(app.get('port'), function () {
        console.log('Web server listening on port ' + app.get('port'))
    })
}).catch(function (err) {
    console.error('Reload could not start, could not start app.js', err)
})