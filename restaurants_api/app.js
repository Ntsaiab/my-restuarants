require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const collectionController = require('./controllers/collections');
const MONGOURI = process.env.MONGODB_URI;

// app.use(cors());
app.use(express.json());

mongoose.connect(MONGOURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: true
})

mongoose.connection.on('error', (err) => {
    console.log(err.message)
}) 
mongoose.connection.on('disconnected', () => {
    console.log('Baby, come back...you can blame it all on me')
})
mongoose.connection.once('open', () => {
    console.log('Connected, United and Protected')
})

app.use('/collections', collectionController);

app.listen(PORT, () => {
    console.log('Keep Calm and Show Trust', PORT, '%');
});