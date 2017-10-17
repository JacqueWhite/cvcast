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
<<<<<<< HEAD
  {
<<<<<<< HEAD
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
=======
    id: 1,
    project: "LocALL",
=======
    {
    _id: 1,
    firstName: "Jacqueline",
    lastName: "White",
    email: "jacquecwhite@gmail.com"
    },
    {
    _id: 2,
    firstName: "Isai",
    lastName: "Solis",
    email: "bob@gmail.com"
    },
    {
    _id: 3,
    firstName: "Audrey",
    lastName: "Fletcher",
    email: "auddddd@gmail.com"
    }
]

const projectSeed = [
  {
    _userId: 1,
    projectName: "LocALL",
>>>>>>> jacque
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/locall.png",
    description: "a place to get recommendations on where to eat, drink, and play in Austin, TX",
    technologiesKeywords: "CSS, javaScript, jQuery, Google Firebase, Bootstrap",
    team: "John Torrence, Will Williams, Mariana Perez, Jayme Howard",
    link: "https://jacquewhite.github.io/LocAll/",
    github: "https://github.com/JacqueWhite/LocAll"  
  },
  {
<<<<<<< HEAD
    id: 2,
    project: "ItsAGO",
=======
    _userId: 1,
    projectName: "ItsAGO",
>>>>>>> jacque
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/itsago.png",
    description: "Simple event and RSVP manager",
    technologiesKeywords: "CSS, javaScript, Node.js, Materialize, jQuery, MySQL, Sequelize",
    team: "John Torrence, Will Williams, Mariana Perez, Jayme Howard",
    link: "https://itsa-go.herokuapp.com/",
    github: "https://github.com/JacqueWhite/Its-a-GO"  
  },
  {
<<<<<<< HEAD
    id: 3,
    project: "AccountabiliBuddy",
=======
    _userId: 2,
    projectName: "AccountabiliBuddy",
>>>>>>> jacque
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/accountabilibuddy.png",
    description: "A gym-buddy match app that pairs up friends based on schedule and fitness activity preferences.",
    technologiesKeywords: "CSS, javaScript, Materialize, Node.js, jQuery, MySQL, Sequelize",
    team: "Jacqueline White",
    link: "https://accountabili-buddy.herokuapp.com/",
    github: "https://github.com/JacqueWhite/AccountabiliBuddy"  
  },
  {
<<<<<<< HEAD
    id: 4,
    project: "devScraped",
=======
    _userId: 2,
    projectName: "devScraped",
>>>>>>> jacque
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/devscrape.png",
    description: "A tool for developers to scrape their favorite resource pages and take notes on them. ",
    technologiesKeywords: "CSS, javaScript, Materialize, jQuery, MySQL, Sequelize",
    team: "Jacqueline White",
    link: "https://devscraped.herokuapp.com/",
    github: "https://github.com/JacqueWhite/devscraped"  
  },
  {
<<<<<<< HEAD
    id: 5,
    project: "oneReq",
=======
    _userId: 3,
    projectName: "oneReq",
>>>>>>> jacque
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/accountabilibuddy.png",
    description: "Recruiting platform for Software Developer recruiters.",
    technologiesKeywords: "CSS, javaScript, Bootstrap, React, MongoDB, mongoose",
    team: "Jacqueline White",
    link: "https://onereq.herokuapp.com/",
    github: "ttps://github.com/JacqueWhite/onereq"  
>>>>>>> 89092607cda4aeef5472ac2aff3301a2eb9ce119
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
<<<<<<< HEAD
=======
  });

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
>>>>>>> jacque
  });