const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the noteSchema with the schema object
const ProjectSchema = new Schema({
  // The headline is the article associate with the note
	projectId : { 
		type: Schema.Types.ObjectId, 
		ref: 'User',
		field: 'projectId'
	},
	projectName: {
		type: String
	},
	image: {
		type: String
	},
	description: {
		type: String
	},
	technologiesKeywords: [{
		type: Array
	}],
	team: {
		type: String
	},
	link: {
		type: String
	},
	github: {
		type: String
	}
});

// Create the Note model using the noteSchema
const Project = mongoose.model("Project", ProjectSchema);

// Export the Note model
module.exports = Project;