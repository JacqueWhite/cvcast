import axios from "axios";
export default {
  // Gets all projects
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id, ownerID) {
    return axios.delete("/api/projects/" + id + "/" + ownerID);
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
    return axios.post("/api/user/signup", user, { headers: {
      'Content-Type': 'multipart/form-data'
    }});
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  }
};
