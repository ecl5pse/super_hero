const express = require( 'express');
const router  = require( './router/index.js');
const cors  = require('cors');
const multer  = require('multer');

const PORT = process.env.NODE_PORT || 3000;
const app = express();


app.use( cors() );
app.use( express.json() );
app.use( '/api', router );







app.listen( PORT, () => console.log( `Example app listening on port ${PORT} ༼ つ ◕_◕ ༽つ`) );