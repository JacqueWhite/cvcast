const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
        unique: true
    },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;