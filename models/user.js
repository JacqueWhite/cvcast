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
        require: true
    },
    projectList: {
        any:[Schema.Types.Mixed]
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;