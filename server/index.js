const express = require('express');  
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

const app = express(); 


var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(cors());

router(app);  

app.listen(port);

console.log('Server running on port '+ port);