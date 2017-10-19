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

const Project = require('../models/project');
const User = require('../models/user');

module.exports = {

  // seed our database
  seedProjects: (req, res) => {
    // create some events
  const project = [
    {
      projectName: "LocALL",
      image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/locall.png",
      description: "a place to get recommendations on where to eat, drink, and play in Austin, TX",
      technologiesKeywords: "CSS, javaScript, jQuery, Google Firebase, Bootstrap",
      team: "John Torrence, Will Williams, Mariana Perez, Jayme Howard",
      link: "https://jacquewhite.github.io/LocAll/",
      github: "https://github.com/JacqueWhite/LocAll"  
    },
    {
      projectName: "ItsAGO",
      image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/itsago.png",
      description: "Simple event and RSVP manager",
      technologiesKeywords: "CSS, javaScript, Node.js, Materialize, jQuery, MySQL, Sequelize",
      team: "John Torrence, Will Williams, Mariana Perez, Jayme Howard",
      link: "https://itsa-go.herokuapp.com/",
      github: "https://github.com/JacqueWhite/Its-a-GO"  
    },
    {
      projectName: "AccountabiliBuddy",
      image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/accountabilibuddy.png",
      description: "A gym-buddy match app that pairs up friends based on schedule and fitness activity preferences.",
      technologiesKeywords: "CSS, javaScript, Materialize, Node.js, jQuery, MySQL, Sequelize",
      team: "Jacqueline White",
      link: "https://accountabili-buddy.herokuapp.com/",
      github: "https://github.com/JacqueWhite/AccountabiliBuddy"  
    },
    {
      projectName: "devScraped",
      image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/devscrape.png",
      description: "A tool for developers to scrape their favorite resource pages and take notes on them. ",
      technologiesKeywords: "CSS, javaScript, Materialize, jQuery, MySQL, Sequelize",
      team: "Jacqueline White",
      link: "https://devscraped.herokuapp.com/",
      github: "https://github.com/JacqueWhite/devscraped"
    },
    {
      projectName: "oneReq",
      image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/accountabilibuddy.png",
      description: "Recruiting platform for Software Developer recruiters.",
      technologiesKeywords: "CSS, javaScript, Bootstrap, React, MongoDB, mongoose",
      team: "Jacqueline White",
      link: "https://onereq.herokuapp.com/",
      github: "ttps://github.com/JacqueWhite/onereq"  
    }
  ]

    // use the Event model to insert/save
    for (project of projects) {
      var newProject = new Project(project);
      newProject.save(function(error) {
        if (!error) {
          Project.find({})
              .populate('createdBy')
              .populate('projects.createdBy')
              .exec(function(error, posts) {
                  console.log(JSON.stringify(projects, null, "\t"))
              })
        }
      });

    // seeded!
    res.send('Database seeded projects!');
    }
  };
}

seedProjects();
