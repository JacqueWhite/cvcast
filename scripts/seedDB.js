const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/showAndTell",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
      firstName: "Audrey",
      lastName: "Fletcher",
      email: "anfletcher24@gmail.com"
  },
    {
      firstName: "Jacque",
      lastName: "White",
      email: "Jacque@gmail.com"
  },
    {
      firstName: "Jayme",
      lastName: "Howard",
      email: "Jayme@gmail.com"
  },
    {
      firstName: "Lisa",
      lastName: "NewHouse",
      email: "Lisa@gmail.com"
  },
    {
      firstName: "Isai",
      lastName: "Solis",
      email: "Isai@gmail.com"
  },
    {
      firstName: "John",
      lastName: "Torrence",
      email: "John@gmail.com"
  }
];


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });