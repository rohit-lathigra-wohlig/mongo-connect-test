require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

message = 'Mongo Connect'
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => message = 'Connected to MongoDB Atlas')
.catch((error) => message = 'Error connecting to MongoDB Atlas'+ error);

// Basic route
app.get('/', (req, res) => {
    res.send(message +"\n");
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
