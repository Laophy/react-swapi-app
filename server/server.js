const express = require('express');

const port = 3000;
const app = express();

app.use(express.json()); //Parse JSON body 

app.get("/planets", function (req, res) {
    console.log('Fake data not in mongodb')
});


console.log("server starting on port: " + port );
app.listen(port);