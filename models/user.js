const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
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
        type: Object,
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Project",
            index: true
        }
    }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
