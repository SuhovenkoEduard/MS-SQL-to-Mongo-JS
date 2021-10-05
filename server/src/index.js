import express from 'express';
import getDataFromMongoDB from "./mongo/mongo.js";

const app = express();

async function define(request, response, jsonString) {
  console.log(request.method + ' ' + request.url);

  if (request.method === 'POST') {
    let requestBody = JSON.parse(jsonString);
    console.log(requestBody);

    let dataFromDB = await getDataFromMongoDB(
      requestBody.mongoUrl,
      requestBody.dbName,
      requestBody.collections
    );

    response.json(dataFromDB);
  } else {
    response.json({Message: 'Server worked.'});
  }

}

app.all('/', function (request, response) {
  response.append('Access-Control-Allow-Origin', '*');

  var jsonString = '';
  request.on('data', (data) => {
    jsonString += data;
  });

  request.on('end', async () => {
    await define(request, response, jsonString);
  });
});

app.listen(4000);