import express from 'express'
import * as Routes from './handleRoutes.js'

const port = 3000;
const app = express();

app.use(express.json()); //Parse JSON body 

app.get("/api/characters", function (req, res) {
    Routes.findAllCharacters((characters) => {
    res.status(200).send(characters);
    })
});

app.get("/api/films", function (req, res) {
    res.status(200).send({});
});

app.get("/api/planets", function (req, res) {
    Routes.findAllPlanets((planets) => {
        res.status(200).json(planets);
    })
});

app.get("/api/characters/:id", function (req, res) {
    const characterID = parseInt(req.params.id);
    Routes.findOneCharacter(characterID, (character) => {
        if(character)
            res.status(200).send(character);
        else
            res.status(403).send({status: "failure", message: "character id not found"});
    })
});

app.get("/api/films/:id", function (req, res) {
    res.status(200).send({});
});

app.get("/api/planets/:id", function (req, res) {
    const planetID = parseInt(req.params.id);
    Routes.findOnePlanet(planetID, (planet) => {
        if(planet)
            res.status(200).json(planet);
        else
            res.status(403).json({ status: "failure", message: "Planet ID not found!" });
    })
});

app.get("/api/films/:id/characters", function (req, res) {
    res.status(200).send({});
});

app.get("/api/films/:id/planets", function (req, res) {
    res.status(200).send({});
});

app.get("/api/characters/:id/films", function (req, res) {
    const characterID = parseInt(req.params.id);
    Routes.findCharacterFilms(characterID, (films) => {
        if(films)
            res.status(200).json(films);
        else
            res.status(403).json({ status: "failure", message: "Character ID not found!" });
    })
});

app.get("/api/planets/:id/films", function (req, res) {
    const planetID = parseInt(req.params.id);
    Routes.findPlanetFilms(planetID, (planets) => {
        if(planets)
            // Maps the characters from planet data 
            res.status(200).json(planets);
        else
            res.status(403).json({ status: "failure", message: "Planet ID not found!" });
    })
});

app.get("/api/planets/:id/characters", function (req, res) {
    const planetID = parseInt(req.params.id);
    Routes.findPlanetCharacters(planetID, (characters) => {
        if(characters)
            // Maps the characters from planet data 
            res.status(200).json(characters.filter(char => char.homeworld === planetID).map(character => ({ "id": character.id, "name": character.name })));
        else
            res.status(403).json({ status: "failure", message: "Planet ID not found!" });
    })
});

console.log("server starting on port: " + port );
app.listen(port);