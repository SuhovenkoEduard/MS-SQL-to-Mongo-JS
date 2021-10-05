import { MongoClient } from 'mongodb';

async function getDataFromMongoDB(mongoUrl, dbName, collections) {
  let client = new MongoClient(mongoUrl);
  await client.connect();

  const db = client.db(dbName);

  let result = {};
  for (let collectionName in collections) {
    result[collectionName] = await db.collection(collectionName).find({}).toArray();
  }

  return result;
}

export default getDataFromMongoDB;