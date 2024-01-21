const logger = require("logger");
const { default: MongoDBClient } = require("nodemongodbclient");

const dbCli = new MongoDBClient("db_name", ("mongo_uri"));

async function InitialiseMongoClient(){
  await dbCli.connect();
}

module.exports = {
  InitialiseMongoClient,
  dbCli,
};