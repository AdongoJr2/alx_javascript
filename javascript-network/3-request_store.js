#!/usr/bin/node
const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const filepath = process.argv[3];

request.get(url, function (error, response, body) {
  fs.writeFileSync(filepath, response.body, { encoding: 'utf-8' });
});
