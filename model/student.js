const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  status: String
});
Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
