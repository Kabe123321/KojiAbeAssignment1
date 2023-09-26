/*
 * File Name: server.js
 * Student’s Name: Koji Abe
 * StudentID: 301268388
 * Date: Sep 23, 2023
 */

const express = require('express');
const app = express();
const port = 3000;
// const indexRoutes = require('./routes/index'); // Importing routes from routes/index.js
const indexRoutes = require('./views/routes/index');


// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Use the routes from routes/index.js
app.use('/', indexRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
console.log(indexRoutes);
