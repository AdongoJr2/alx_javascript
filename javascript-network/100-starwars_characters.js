#!/usr/bin/node
const request = require("request");

const movieID = process.argv[2];
const url = "https://swapi-api.alx-tools.com/api/films/" + movieID;

request.get(url, function (error, response, body) {
  const characters = JSON.parse(response.body)["characters"];

  for (const characterURL of characters) {
    request.get(characterURL, function (error, response, body) {
      console.log(JSON.parse(response.body)["name"]);
    });
  }
});