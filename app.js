const express = require('express');
const app = express();
// Environment variables
const dotenv = require('dotenv').config();

// Setting
app.set('port', process.env.PORT || 3001);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

// Starting the server

const server = app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
server.on('error', (errot) => console.log(`Error in server `));
