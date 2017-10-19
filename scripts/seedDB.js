const mongoose = require("mongoose");
const db = require("../models");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/showAndTell",
  {
    useMongoClient: true
  }
);
const userSeed = [
    {
    _id : "59e78c41c1b15d32adfec049",
    firstName: "Jacque",
    lastName: "White",
    email: "jacquecwhite@gmail.com",
    headshot: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAhqAAAAJDc4ZjkwN2YyLTgyODMtNGQ2Zi1hYmYwLTlmOGNmNjhlYTM3Yg.jpg",
    linkedIn: "https://www.linkedin.com/in/jacquelinewhite15/",
    bio: "My name is Jacque White and I am a Junior Full-Stack Developer with a passion for helping people and bringing their ideas to life. I have a wide-range of career experiences ranging from health & wellness to human resources that help me understand the needs of a variety of clients.",
    projects: [
      "59e78c41c1b15d32adfec04c", "59e78c41c1b15d32adfec04a"
    ]
    },
    {
    _id : "59e78c41c1b15d32adfec04a",  
    firstName: "Isai",
    lastName: "Solis",
    email: "bob@gmail.com",
    projects: [
    "59e78c41c1b15d32adfec04b"
    ]
    },
    {
    _id : "59e78c41c1b15d32adfec04b",  
    firstName: "Audrey",
    lastName: "Fletcher",
    email: "auddddd@gmail.com",
    projects: [
    "59e78c41c1b15d32adfec04f", "59e78c41c1b15d32adfec050"
    ]
    }
]
const projectSeed = [
  {
    _id : "59e78c41c1b15d32adfec04c",
    projectName: "LocALL",
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/locall.png",
    description: "a place to get recommendations on where to eat, drink, and play in Austin, TX",
    technologiesKeywords: "CSS, javaScript, jQuery, Google Firebase, Bootstrap",
    team: "John Torrence, Will Williams, Mariana Perez, Jayme Howard",
    link: "https://jacquewhite.github.io/LocAll/",
    github: "https://github.com/JacqueWhite/LocAll"  

  },
  {
    _id : "59e78c41c1b15d32adfec04a",
    projectName: "ItsAGO",
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/itsago.png",
    description: "Simple event and RSVP manager",
    technologiesKeywords: "CSS, javaScript, Node.js, Materialize, jQuery, MySQL, Sequelize",
    team: "John Torrence, Will Williams, Mariana Perez, Jayme Howard",
    link: "https://itsa-go.herokuapp.com/",
    github: "https://github.com/JacqueWhite/Its-a-GO"  
  },
  {
    _id : "59e78c41c1b15d32adfec04b",
    projectName: "AccountabiliBuddy",
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/accountabilibuddy.png",
    description: "A gym-buddy match app that pairs up friends based on schedule and fitness activity preferences.",
    technologiesKeywords: "CSS, javaScript, Materialize, Node.js, jQuery, MySQL, Sequelize",
    team: "Jacqueline White",
    link: "https://accountabili-buddy.herokuapp.com/",
    github: "https://github.com/JacqueWhite/AccountabiliBuddy"  
  },
  {
    _id : "59e78c41c1b15d32adfec04f",
    projectName: "devScraped",
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/devscrape.png",
    description: "A tool for developers to scrape their favorite resource pages and take notes on them. ",
    technologiesKeywords: "CSS, javaScript, Materialize, jQuery, MySQL, Sequelize",
    team: "Jacqueline White",
    link: "https://devscraped.herokuapp.com/",
    github: "https://github.com/JacqueWhite/devscraped"  
  },
  {
    _id : "59e78c41c1b15d32adfec050",
    projectName: "oneReq",
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/accountabilibuddy.png",
    description: "Recruiting platform for Software Developer recruiters.",
    technologiesKeywords: "CSS, javaScript, Bootstrap, React, MongoDB, mongoose",
    team: "Jacqueline White",
    link: "https://onereq.herokuapp.com/",
    github: "ttps://github.com/JacqueWhite/onereq"  
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
  });