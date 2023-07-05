import express from 'express'
import * as Routes from './handleRoutes.js'

const port = 3000;
const app = express();

app.use(express.json()); //Parse JSON body 

app.get("/api/characters", function (req, res) {
    res.status(200).send({});
});

app.get("/api/films", function (req, res) {
    res.status(200).send({});
});

app.get("/api/planets", function (req, res) {
    Routes.findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});

app.get("/api/characters/:id", function (req, res) {
    res.status(200).send({});
});

app.get("/api/films/:id", function (req, res) {
    res.status(200).send({});
});

app.get("/api/planets/:id", function (req, res) {
    const planetID = parseInt(req.params.id);
    Routes.findOnePlanet(planetID, (planet) => {
        if(planet)
            res.status(200).send(planet);
        else
            res.status(403).send({status: "failure", message: "planet id not found"});
    })
});

app.get("/api/films/:id/characters", function (req, res) {
    res.status(200).send({});
});

app.get("/api/films/:id/planets", function (req, res) {
    res.status(200).send({});
});

app.get("/api/characters/:id/films", function (req, res) {
    res.status(200).send({});
});

app.get("/api/planets/:id/films", function (req, res) {
    res.status(200).send({});
});

app.get("/api/planets/:id/characters", function (req, res) {
    res.status(200).send({});
});

console.log("server starting on port: " + port );
app.listen(port);