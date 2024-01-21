const { dbCli } = require("../dal/dbClient");
var bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');

function ExampleBL(reqData){
  return new Promise(async (resolve, reject) => {
    resolve({statusCode: StatusCodes.OK, responseData: "Success"});
  });
}

