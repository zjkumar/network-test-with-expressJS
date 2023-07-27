const express = require("express");

const app = express(); // creates express server yokka instance

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.get("/date", (request, response) => {
  const date = new Date();
  response.send(`${date.getDate()}--${date.getMonth()}--${date.getFullYear()}`);
});

app.listen(3000);
