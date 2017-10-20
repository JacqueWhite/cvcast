const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const filePluginLib = require('mongoose-file');
const filePlugin = filePluginLib.filePlugin;
const make_upload_to_model = filePluginLib.make_upload_to_model;
const path = require("path");
const uploads_base = path.join(__dirname, "../uploads");
const uploads = path.join(uploads_base, "u");
const userSchema = new Schema ({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    headshot: {
        type: String
        // img: { data: Buffer, contentType: String }
    },
    linkedIn: {
        type: String
    },
    gitHubProfile: {
        type: String
    },
    bio: {
        type: String
    },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
});
userSchema.plugin(filePlugin, {
    name: "photo",
    upload_to: make_upload_to_model(uploads, 'photos'),
    relative_to: uploads_base
});
console.log("i'm in models/user.js");
const User = mongoose.model("User", userSchema);
module.exports = User;