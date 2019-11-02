const express = require("express");
const router = express.Router();
const Student = require("../model/student");

router
  .route("/students")
  .get((req, res) => {
    Student.find((err, foundStudents) => {
      if (err) {
        console.log(err);
      } else {
        res.json(foundStudents);
      }
    });
  })
  .post((req, res) => {
    const newStudent = new Student(req.body);
    newStudent.save();
    res.send(true);
  });

module.exports = router;
