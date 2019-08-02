const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const passport = require("passport");
const path = require("path");

const app = express();
// Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const db = require("../config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongoDB is connected"))
  .catch(err => console.log(err));



// app.use(passport.initialize());

// require("./auth/passport")(passport);

// this is not right fix please
// require("./auth/google")(passport);

// code for Heroku post build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server started on port ${port}`));
