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
export function findAllPlanets (callback) {
    let dataPromise = collection.find({}).toArray();
    dataPromise.then((planets) => callback(planets));
};

// Find one planet
export function findOnePlanet (planetID, callback) {
    let dataPromise = collection.find({}).toArray();
    dataPromise.then((planets) => {
        const planetData = planets.find(planet => planet.id === planetID);
        callback(planetData);
    });
};

// Find planet characters by id
export function findPlanetCharacters (planetID, callback) {
    let dataPromise = db.collection("characters").find({}).toArray();
    dataPromise.then((characters) => {
        callback(characters);
    });
};