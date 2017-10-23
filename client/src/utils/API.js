import axios from "axios";
export default {
  // Gets all projects
  getProjects: function(id) {
    console.log("API Utils" + id);
    return axios.get("/api/user/id/" + id); //this goes to user controller / find all 
    
  },
  // Gets the project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a project to the database
  saveProject: function(myProject) {
    return axios.post("/api/projects", myProject);
  },
  updateProject: function(id, project) {
    return axios.put("/api/projects/"+ id, project);
  },
  // Saves a user to the database
  saveUser: function(user) {
    return axios.post("/api/user/signup", user);
  },
  // Gets the user with the given id
  getUser: function(email) {
    return axios.get("/api/user/" + email);
  }





};
