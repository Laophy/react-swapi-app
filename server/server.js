import express from 'express'
import { findAllPlanets } from './handleRoutes.js'

const port = 3000;
const app = express();

app.use(express.json()); //Parse JSON body 

app.get("/api/characters", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});

app.get("/api/films", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send({});
    })
});

app.get("/api/planets", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});

app.get("/api/characters/:id", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});

app.get("/api/films/:id", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});

app.get("/api/planets/:id", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});

app.get("/api/films/:id/characters", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});

app.get("/api/films/:id/planets", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});

app.get("/api/characters/:id/films", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});

app.get("/api/planets/:id/films", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});

app.get("/api/planets/:id/characters", function (req, res) {
    findAllPlanets((planets) => {
        res.status(200).send(planets);
    })
});

console.log("server starting on port: " + port );
app.listen(port);