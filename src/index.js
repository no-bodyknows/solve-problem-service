const express = require('express');
const { PORT } = require('./config/server.config');
const bodyParser = require('body-parser');

const apirouter = require('./routes/index');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


app.use('/api', apirouter);



app.get('/ping', (req, res) => {
    return res.json({message: 'pong'});
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
    
})
