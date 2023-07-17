// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Import comments.js
const comments = require('./comments');

// Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create an endpoint for comments
app.get('/api/comments', (req, res) => {
    // Return comments
    res.json(comments);
});

// Create an endpoint for adding comments
app.post('/api/comments', (req, res) => {
    // Create a comment object
    const comment = {
        id: comments.length + 1,
        name: req.body.name,
        comment: req.body.comment,
        timestamp: new Date()
    };

    // Add a comment to the 'comments' array
    comments.push(comment);

    // Return the comments array
    res.json(comments);
});

// Start the web server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});