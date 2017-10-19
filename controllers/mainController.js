const db = require("../models");
const User = require('../models/user');
const Project = require('../models/project');

module.exports = {

    findAll: function(req, res){
        db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
        
        console.log("controller------------------");
        console.log(dbModel);
     },
      seedUsers: (req, res) => {
	    // create some events
	  const users = [
	      {
	        firstName: "Jacque",
	        lastName: "White",
	        email: "jacquecwhite@gmail.com",
	        headshot: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAhqAAAAJDc4ZjkwN2YyLTgyODMtNGQ2Zi1hYmYwLTlmOGNmNjhlYTM3Yg.jpg",
	        linkedIn: "https://www.linkedin.com/in/jacquelinewhite15/",
	        gitHubProfile: "https://github.com/jacquewhite",
	        bio: "My name is Jacque White and I am a Junior Full-Stack Developer with a passion for helping people and bringing their ideas to life. I have a wide-range of career experiences ranging from health & wellness to human resources that help me understand the needs of a variety of clients."
	      },
	      {
	        firstName: "Isai",
	        lastName: "Solis",
	        email: "solis_isai@yahoo.com",
	        headshot: "https://avatars3.githubusercontent.com/u/28001879?s=460&v=4",
	        linkedIn: "https://www.linkedin.com/in/isai-solis-90532b142/",
	        gitHubProfile: "https://github.com/isai-solis",
	        bio: "Hey it's Isai! I'm an Aspiring Developer"
	      },
	      {
	        firstName: "Audrey",
	        lastName: "Fletcher",
	        email: "anfletcher24@gmail.com",
	        headshot: "https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAAqBAAAAJGI5MzA0Nzc3LTZhZmQtNDYyOC04MmQxLTg2Njg4Y2E0N2YwOA.jpg",
	        linkedIn: "https://www.linkedin.com/in/audrey-fletcher-996612123/",
	        gitHubProfile: "https://github.com/afletch24",
	        bio: "Currently attending The University of Texas Coding Bootcamp. I am making an exciting career pivot out of the animal industry due to my new found passion for software development!"
	      }
	  ]
	    // use the Event model to insert/save
	    for (user of users) {
	      var newUser = new User(user);
	      newUser.save(function(error) {
	        if (!error) {
	          db.User.find({})
	              .populate('projects')
	              .exec(function(error, users) {
	                  console.log(JSON.stringify(users, null, "\t"))
	              })
	        }
	      });
	    // seeded!
	    res.send('Database seeded 3 Users!');
	  	};
	},
    seedProjects: (req, res) => {
	    // create some projects
	  const projects = [
	    {
	      createdBy: "59e8284b1cf2c3500e03df00",
	      projectName: "LocALL",
	      image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/locall.png",
	      description: "a place to get recommendations on where to eat, drink, and play in Austin, TX",
	      technologiesKeywords: ["CSS", "javaScript", "jQuery", "Google Firebase", "Bootstrap"],
	      team: "John Torrence, Will Williams, Mariana Perez, Jayme Howard",
	      link: "https://jacquewhite.github.io/LocAll/",
	      github: "https://github.com/JacqueWhite/LocAll"  
	    },
	    {
	      createdBy: "59e8284b1cf2c3500e03df00",
	      projectName: "ItsAGO",
	      image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/itsago.png",
	      description: "Simple event and RSVP manager",
	      technologiesKeywords: ["CSS", "javaScript", "jQuery", "Google Firebase", "Bootstrap"],
	      team: "John Torrence, Will Williams, Mariana Perez, Jayme Howard",
	      link: "https://itsa-go.herokuapp.com/",
	      github: "https://github.com/JacqueWhite/Its-a-GO"  
	    },
	    {
	      createdBy: "59e8284b1cf2c3500e03df01",
	      projectName: "AccountabiliBuddy",
	      image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/accountabilibuddy.png",
	      description: "A gym-buddy match app that pairs up friends based on schedule and fitness activity preferences.",
	      technologiesKeywords: ["CSS", "javaScript", "jQuery", "Google Firebase", "Bootstrap"],
	      team: "Jacqueline White",
	      link: "https://accountabili-buddy.herokuapp.com/",
	      github: "https://github.com/JacqueWhite/AccountabiliBuddy"  
	    },
	    {
	      createdBy: "59e8284b1cf2c3500e03df01",
	      projectName: "devScraped",
	      image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/devscrape.png",
	      description: "A tool for developers to scrape their favorite resource pages and take notes on them. ",
	      technologiesKeywords: ["CSS", "javaScript", "jQuery", "Google Firebase", "Bootstrap"],
	      team: "Jacqueline White",
	      link: "https://devscraped.herokuapp.com/",
	      github: "https://github.com/JacqueWhite/devscraped"
	    },
	    {
	      createdBy: "59e8284b1cf2c3500e03df00",
	      projectName: "oneReq",
	      image: "https://s3.us-east-2.amazonaws.com/jacqueportfolio/accountabilibuddy.png",
	      description: "Recruiting platform for Software Developer recruiters.",
	      technologiesKeywords: ["CSS", "javaScript", "jQuery", "Google Firebase", "Bootstrap"],
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
	          db.Project.find({})
	              .populate('createdBy')
	              .populate('projects.createdBy')
	              .exec(function(error, projects) {
	                  console.log(JSON.stringify(projects, null, "\t"))
	              })
	        }
	      });

	    // seeded!
	    res.send('Database seeded projects!');
	    }
	  }

}


