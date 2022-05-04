const express = require('express');
const morgan = require('morgan');

const routes = require("./routes/routes");

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(routes);

const PORT = 4000;
app.listen(PORT);

console.log(`Server UP on ${PORT}`);