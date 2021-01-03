const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  admission: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Students = mongoose.model("Student", StudentSchema);

module.exports = Students;
