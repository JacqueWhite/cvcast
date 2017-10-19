const User = require('../models/user');
const Project = require('../models/project');

module.exports = {

  // seed our database
  seedEvents: (req, res) => {
    // create some events
  const Users = [
      {
        firstName: "Jacque",
        lastName: "White",
        email: "jacquecwhite@gmail.com",
        headshot: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAhqAAAAJDc4ZjkwN2YyLTgyODMtNGQ2Zi1hYmYwLTlmOGNmNjhlYTM3Yg.jpg",
        linkedIn: "https://www.linkedin.com/in/jacquelinewhite15/",
        bio: "My name is Jacque White and I am a Junior Full-Stack Developer with a passion for helping people and bringing their ideas to life. I have a wide-range of career experiences ranging from health & wellness to human resources that help me understand the needs of a variety of clients."
      },
      {
        firstName: "Isai",
        lastName: "Solis",
        email: "solis_isai@yahoo.com",
        headshot: "https://avatars3.githubusercontent.com/u/28001879?s=460&v=4",
        linkedIn: "https://www.linkedin.com/in/isai-solis-90532b142/",
        bio: "Hey hey its Isai!"
      },
      {
        firstName: "Audrey",
        lastName: "Fletcher",
        email: "anfletcher24@gmail.com",
        headshot: "https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAAqBAAAAJGI5MzA0Nzc3LTZhZmQtNDYyOC04MmQxLTg2Njg4Y2E0N2YwOA.jpg",
        linkedIn: "https://www.linkedin.com/in/audrey-fletcher-996612123/",
        bio: "Currently attending The University of Texas Coding Bootcamp. I am making an exciting career pivot out of the animal industry due to my new found passion for software development!"
      }
  ]

    // use the Event model to insert/save
    for (User of Users) {
      var newUser = new User(User);
      newUser.save(function(error) {
        if (!error) {
          Post.find({})
              .populate('postedBy')
              .populate('comments.postedBy')
              .exec(function(error, posts) {
                  console.log(JSON.stringify(posts, null, "\t"))
              })
        }
      });

    // seeded!
    res.send('Database seeded 3 Users!');
  }

};

