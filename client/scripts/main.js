import GeneratedData from './generatedData.js'
import RestoreFromJson from '../json/restoreFromJson.js';
import Queries from './queries/queries.js';
import DebugManager from './debug/debugManager.js';
import getDataFromServer from "./mongo/mongo.js";

const GLOBAL_PARAMS = {
  GENERATED: false,
  FROM_FILE: true
};

const DEBUG_PARAMS = {
  JSON_DEBUG: false,
  SQL_DEBUG: false,
  DBNAME: 'CarRental',
};

const SERVER_URL = 'http://localhost:4000/';
const MONGO_URL = 'mongodb+srv://edsuhovenko:17Faslge@cluster0.whuyf.mongodb.net/CarRental?retryWrites=true&w=majority';

async function getData(params) {
  let result;
  if (params.GENERATED) {
    result = GeneratedData.createNext();
  } else {
    if (params.FROM_FILE) {
      let jsonString = await ((await fetch('./res/data.json')).text());
      result = JSON.parse(jsonString);
    } else {
      let dataFromDatabase = await getDataFromServer(SERVER_URL, MONGO_URL);
      result = RestoreFromJson.castToDate(dataFromDatabase);
    }
  }
  return result;
}

const data = await getData(GLOBAL_PARAMS);
const debugManager = new DebugManager(DEBUG_PARAMS, data);
const queriesResults = Queries.createNext(data);

console.log(data);
queriesResults.forEach(x => console.log(x));
debugManager.debug();
