import { MongoClient } from 'mongodb'

const url = "mongodb://localhost:27017";
const dbName = "swapi";
const collectionName = "planets"
let collection;

async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    var db = client.db(dbName)
    collection = db.collection(collectionName);
}
startup();

// retrieve all planets
export function findAllPlanets (callback) {
    let dataPromise = collection.find({}).toArray();
    dataPromise.then((planets) => callback(planets));
};