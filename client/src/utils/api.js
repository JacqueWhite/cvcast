import axios from "axios";
export default {
  // Gets all users
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the user with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the user with the given id
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  },
  // Saves a user to the database
  saveProject: function(userData) {
    return axios.post("/api/project", userData);
  }
};