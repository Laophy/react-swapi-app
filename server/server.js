import express from 'express'
import cors from 'cors'
import * as Routes from './handleRoutes.js'

const port = 4000;
const app = express();

app.use(express.json()); //Parse JSON body 
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4000']
}))

app.get("/api/characters", function (req, res) {
    Routes.findAllCharacters((characters) => {
        res.status(200).json(characters);
    })
});

app.get("/api/films", function (req, res) {
    Routes.findAllFilms((films) => {
        res.status(200).json(films);
    })
});

app.get("/api/planets", function (req, res) {
    Routes.findAllPlanets((planets) => {
        res.status(200).json(planets);
    })
});

app.get("/api/characters/:id", function (req, res) {
    const characterID = parseInt(req.params.id);
    Routes.findOneCharacter(characterID, (character) => {
        if (character)
            res.status(200).json(character);
        else
            res.status(403).json({ status: "failure", message: "character id not found" });
    })
});

app.get("/api/films/:id", function (req, res) {
    const filmID = parseInt(req.params.id);
    Routes.findOneFilm(filmID, (film) => {
        if (film)
            res.status(200).json(film);
        else
            res.status(403).json({ status: "failure", message: "Film ID not found!" });
    })
});

app.get("/api/planets/:id", function (req, res) {
    const planetID = parseInt(req.params.id);
    Routes.findOnePlanet(planetID, (planet) => {
        if (planet)
            res.status(200).json(planet);
        else
            res.status(403).json({ status: "failure", message: "Planet ID not found!" });
    })
});

app.get("/api/films/:id/characters", function (req, res) {
    const filmID = parseInt(req.params.id);
    Routes.findFilmCharacters(filmID, (films) => {
        if (films)
            res.status(200).json(films);
        else
            res.status(403).json({ status: "failure", message: "Film ID not found!" });
    })
});

app.get("/api/films/:id/planets", function (req, res) {
    const filmID = parseInt(req.params.id);
    Routes.findFilmPlanets(filmID, (planets) => {
        if (planets)
            res.status(200).json(planets);
        else
            res.status(403).json({ status: "failure", message: "Film ID not found!" });
    })
});

app.get("/api/characters/:id/films", function (req, res) {
    const characterID = parseInt(req.params.id);
    Routes.findCharacterFilms(characterID, (films) => {
        if (films)
            res.status(200).json(films);
        else
            res.status(403).json({ status: "failure", message: "Character ID not found!" });
    })
});

app.get("/api/planets/:id/films", function (req, res) {
    const planetID = parseInt(req.params.id);
    Routes.findPlanetFilms(planetID, (planets) => {
        if (planets)
            res.status(200).json(planets);
        else
            res.status(403).json({ status: "failure", message: "Planet ID not found!" });
    })
});

app.get("/api/planets/:id/characters", function (req, res) {
    const planetID = parseInt(req.params.id);
    Routes.findPlanetCharacters(planetID, (characters) => {
        if (characters)
            // Maps the characters from planet data 
            res.status(200).json(characters.map(character => ({ "id": character.id, "name": character.name })));
        else
            res.status(403).json({ status: "failure", message: "Planet ID not found!" });
    })
});

console.log("server starting on port: " + port);
app.listen(port);