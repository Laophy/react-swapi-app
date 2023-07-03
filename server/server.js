import express from 'express'
import { findAllPlanets } from './handleRoutes.js'

const port = 3000;
const app = express();

app.use(express.json()); //Parse JSON body 

app.get("/planets", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});


console.log("server starting on port: " + port );
app.listen(port);