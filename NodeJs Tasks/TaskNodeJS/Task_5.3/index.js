const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { use } = require("express/lib/application");
const { validateBody, schemas } = require("./validation.js");

const app = express();
const port = 3000;

let users = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add user details
app.post("/user", validateBody(schemas.userSchema), (req, res) => {
  const user = JSON.parse(JSON.stringify(req.body));
  user.isDeleted = false;
  users.push(user);
  res.json("User is added to the database");
});

// Get users details with autosuggestors
app.get("/users", (req, res) => {
  const { loginSubstring = "", limit = 10 } = req.query;

  const list = users
    .filter((user) => user.login.includes(loginSubstring) && !user.isDeleted)
    .sort((a, b) => a.login.localeCompare(b.login))
    .slice(0, limit);
  res.json(list);
});

// Retrieve user detail using id
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  const userToFind = users.find((user) => user.id === id);

  if (!userToFind) {
    res.status(404).send("User not found");
  } else {
    res.json(userToFind);
  }
});

// Edit user details
app.put("/users/:id", validateBody(schemas.userSchema), (req, res) => {
  const id = req.params.id;
  const { login, password, age } = req.body;

  const userToUpdate = users.find((user) => user.id === id);

  if (!userToUpdate) {
    res.status(404).send("User not found");
  } else {
    userToUpdate.login = login;
    userToUpdate.password = password;
    userToUpdate.age = age;
  }

  res.send("User is edited");
});

//Delete User details (soft delete)
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const userToDelete = users.find((user) => user.id === id);

  if (!userToDelete || userToDelete.isDeleted) {
    res.status(404).send("User not found");
  } else {
    userToDelete.isDeleted = true;
    res.send("User is deleted");
  }
});

// Handling Errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`app is up and running at port ${port}`);
});
