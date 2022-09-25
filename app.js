const express = require('express');
const routerApi = require('./src/v1/routes/index.js');
const { notFound, errorHandler } = require('./src/v1/middlewares/errorMiddlewares.js');
const app = express();

// Environment variables
const dotenv = require('dotenv').config();

// Setting
app.set('port', process.env.PORT || 3001);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
routerApi(app);

//Catching the errors
app.use(notFound);
app.use(errorHandler);

// Starting the server

const server = app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
server.on('error', (error) => console.log(`Error in server `));
