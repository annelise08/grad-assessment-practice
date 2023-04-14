const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const toDoController = require('./controllers/toDoController')

// parse all requests
app.use(express.json());
// parses for forms
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, '../')))

// url to connect to mongo database
const MONGO = 'mongodb+srv://anneliseemig:RsODy0gTzQDRTOlB@cluster0.ngsmfna.mongodb.net/?retryWrites=true&w=majority';

// route for fetch request
app.get('/items', toDoController.getItems, (req, res) => {
    res.status(200).send(res.locals.items)
})

// setting up mongo database
mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'todo'
})
    .then(() => console.log('hiiiii connected to mongodb!'))
    .catch(err => console.log(err))

// global error handler
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json(err)
})
    
app.listen(3000, () => {
    console.log('beep boop! listening on port 3000')
})