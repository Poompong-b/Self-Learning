const { response, request } = require("express");
const express = require("express");
const Datastore = require("nedb");

const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const data = new Datastore("database.db");
data.loadDatabase();

app.get("/api", (request, response) => {
  data.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post("/api", (request, response) => {
  console.log("Got a Request");
  const timestamp = Date.now();
  request.timestamp = timestamp;

  //Inser Data from User to DB
  data.insert(request.body);

  response.json({
    status: "success",
    timestamp: timestamp,
    latitude: request.body.lat,
    longitude: request.body.long,
    mood: request.body.mood,
  });
});
