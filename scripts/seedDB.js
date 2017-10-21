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
        _id: "59e79d329de62935d1b7d58b",
        firstName: "Jacque",
        lastName: "White",
        email: "jacquecwhite@gmail.com",
        headshot: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAhqAAAAJDc4ZjkwN2YyLTgyODMtNGQ2Zi1hYmYwLTlmOGNmNjhlYTM3Yg.jpg",
        linkedIn: "https://www.linkedin.com/in/jacquelinewhite15/",
        gitHubProfile: "https://github.com/jacquewhite",
        bio: "My name is Jacque White and I am a Junior Full-Stack Developer with a passion for helping people and bringing their ideas to life. I have a wide-range of career experiences ranging from health & wellness to human resources that help me understand the needs of a variety of clients.",
        projects: [
          "59e78c41c1b15d32adfec04c",
          "59e78c41c1b15d32adfec04a",
          "59e78c41c1b15d32adfec04b",
          "59e78c41c1b15d32adfec050",
          "59e78c41c1b15d32adfec04f"
        ]
      },
      {
        _id: "59e79d329de62935d1b7d58c",
        firstName: "Isai",
        lastName: "Solis",
        email: "solis_isai@yahoo.com",
        headshot: "https://avatars3.githubusercontent.com/u/28001879?s=460&v=4",
        linkedIn: "https://www.linkedin.com/in/isai-solis-90532b142/",
        gitHubProfile: "https://github.com/isai-solis",
        bio: "Hey it's Isai! I'm an Aspiring Developer",
        projects: [
          "59e78c41c1b15d32adfec04c",
          "59e78c41c1b15d32adfec04a",
          "59e78c41c1b15d32adfec04b",
          "59e78c41c1b15d32adfec050",
          "59e78c41c1b15d32adfec04f"
        ]
      },
      {
        _id: "59e79d329de62935d1b7d58d",
        firstName: "Audrey",
        lastName: "Fletcher",
        email: "anfletcher24@gmail.com",
        headshot: "https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAAqBAAAAJGI5MzA0Nzc3LTZhZmQtNDYyOC04MmQxLTg2Njg4Y2E0N2YwOA.jpg",
        linkedIn: "https://www.linkedin.com/in/audrey-fletcher-996612123/",
        gitHubProfile: "https://github.com/afletch24",
        bio: "Currently attending The University of Texas Coding Bootcamp. I am making an exciting career pivot out of the animal industry due to my new found passion for software development!",
        Project: [
          "59e78c41c1b15d32adfec04c",
          "59e78c41c1b15d32adfec04a",
          "59e78c41c1b15d32adfec04b",
          "59e78c41c1b15d32adfec050",
          "59e78c41c1b15d32adfec04f"
        ]
      }
]
const projectSeed = [
  {
    _id : "59e78c41c1b15d32adfec04c",
    projectName: "LocALL",
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/locall.png",
    description: "a place to get recommendations on where to eat, drink, and play in Austin, TX",
    technologiesKeywords: ["CSS", "javaScript", "jQuery", "Google Firebase", "Bootstrap"],
    team: "John Torrence, Will Williams, Mariana Perez, Jayme Howard",
    link: "https://jacquewhite.github.io/LocAll/",
    github: "https://github.com/JacqueWhite/LocAll"
  },
  {
    _id : "59e78c41c1b15d32adfec04a",
    projectName: "ItsAGO",
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/itsago.png",
    description: "Simple event and RSVP manager",
    technologiesKeywords: ["CSS", "javaScript", "jQuery", "Google Firebase", "Bootstrap"],
    team: "John Torrence, Will Williams, Mariana Perez, Jayme Howard",
    link: "https://itsa-go.herokuapp.com/",
    github: "https://github.com/JacqueWhite/Its-a-GO"
  },
  {
    _id : "59e78c41c1b15d32adfec04b",
    projectName: "AccountabiliBuddy",
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/accountabilibuddy.png",
    description: "A gym-buddy match app that pairs up friends based on schedule and fitness activity preferences.",
    technologiesKeywords: ["CSS", "javaScript", "jQuery", "Google Firebase", "Bootstrap"],
    team: "Jacqueline White",
    link: "https://accountabili-buddy.herokuapp.com/",
    github: "https://github.com/JacqueWhite/AccountabiliBuddy"
  },
  {
    _id : "59e78c41c1b15d32adfec04f",
    projectName: "devScraped",
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/devscrape.png",
    description: "A tool for developers to scrape their favorite resource pages and take notes on them. ",
    technologiesKeywords: ["CSS", "javaScript", "jQuery", "Google Firebase", "Bootstrap"],
    team: "Jacqueline White",
    link: "https://devscraped.herokuapp.com/",
    github: "https://github.com/JacqueWhite/devscraped"
  },
  {
    _id : "59e78c41c1b15d32adfec050",
    projectName: "oneReq",
    image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/accountabilibuddy.png",
    description: "Recruiting platform for Software Developer recruiters.",
    technologiesKeywords: ["CSS", "javaScript", "jQuery", "Google Firebase", "Bootstrap"],
    team: "Jacqueline White",
    link: "https://onereq.herokuapp.com/",
    github: "ttps://github.com/JacqueWhite/onereq",
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
