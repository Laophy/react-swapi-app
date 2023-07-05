import { MongoClient } from 'mongodb'

const url = "mongodb://localhost:27017";
const dbName = "swapi";
const collectionName = "planets"
let collection;
let db;

async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName)
    collection = db.collection(collectionName);
}
startup();

// retrieve all planets
export function findAllPlanets(callback) {
    let dataPromise = collection.find({}).toArray();
    dataPromise.then((planets) => callback(planets));
};

// Find one planet
export function findOnePlanet(planetID, callback) {
    let dataPromise = collection.find({}).toArray();
    dataPromise.then((planets) => {
        const planetData = planets.find(planet => planet.id === planetID);
        callback(planetData);
    });
};

// Find planet characters by id
export function findPlanetCharacters(planetID, callback) {
    let dataPromise = db.collection("characters").find({}).toArray();
    dataPromise.then((characters) => {
        callback(characters);
    });
};

// Find films by planet
export function findPlanetFilms(planetID, callback) {
    let dataPromise = db.collection("films_planets").find({}).toArray();
    dataPromise.then((films) => {
        callback(films.filter(f => f.planet_id === planetID));
    });
};

// Find films by character
export function findCharacterFilms(characterID, callback) {
    let dataPromise = db.collection("films_characters").find({}).toArray();
    dataPromise.then((films) => {
        callback(films.filter(f => f.character_id === characterID));
    });
};

// Find all characters
export function findAllCharacters(callback) {
    let dataPromise = db.collection("characters").find({}).toArray();
    dataPromise.then((characters) => callback(characters));
};


// Find one character
export function findOneCharacter(characterID, callback) {
    let dataPromise = db.collection("characters").find({}).toArray();
    dataPromise.then((characters) => {
        const characterData = characters.find(character => character.id === characterID);
        callback(characterData);
    });
};

// Find all films
export function findAllFilms(callback) {
    let dataPromise = db.collection("films").find({}).toArray();
    dataPromise.then((films) => callback(films));
};


// Find one film
export function findOneFilm(filmID, callback) {
    let dataPromise = db.collection("films").find({}).toArray();
    dataPromise.then((films) => {
        const filmData = films.find(film => film.id === filmID);
        callback(filmData);
    });
};
