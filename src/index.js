
const express = require('express');
const BaseError = require('./errors/base.error.js');
const { PORT } = require('./config/server.config');
const bodyParser = require('body-parser');

const apirouter = require('./routes/index');
const errorHandler = require('./utils/errorhandler.js');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


app.use('/api', apirouter);

 

app.get('/ping', (req, res) => {
    return res.json({message: 'pong'});
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
