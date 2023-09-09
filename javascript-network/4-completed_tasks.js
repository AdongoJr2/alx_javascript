#!/usr/bin/node
const request = require("request");

const url = process.argv[2];

request.get(url, function (error, response, body) {
  const todos = JSON.parse(response.body);
  const completedTodos = todos.filter(todo => todo.completed);

  const result = {};

  for (const completedTodo of completedTodos) {
    if (result[completedTodo.userId]) {
      result[completedTodo.userId] += 1;
    } else {
      result[completedTodo.userId] = 1;
    }
  }

  console.log(result);
});