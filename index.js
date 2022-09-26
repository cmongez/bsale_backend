const express = require('express');
const routerApi = require('./src/v1/routes/index.js');
const cors = require('cors');
const { notFound, errorHandler } = require('./src/v1/middlewares/errorMiddlewares.js');
require('dotenv').config();
const app = express();

// Environment variables

// Setting
app.set('port', process.env.PORT || 3001);

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
