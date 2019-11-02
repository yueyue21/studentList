const express = require("express");
const router = express.Router();
const Student = require("../model/student");

router
  .route("/students/:id")
  .get((req, res) => {
    Student.findById({ _id: req.params.id }, (err, foundStudent) => {
      if (err) {
        console.log(err);
      } else {
        res.json(foundStudent);
      }
    });
  })
  .put((req, res) => {
    console.log(req);
    Student.update(
      { _id: req.params.id },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        status: req.body.status,
        phoneNumber: req.body.phoneNumber
      },
      { overwrite: true },
      err => {
        if (err) {
          console.log(err);
        } else {
          res.json(true);
        }
      }
    );
  })
  .delete((req, res) => {
    Student.deleteOne({ _id: req.params.id }, err => {
      if (err) {
        console.log(err);
      } else {
        res.json(true);
      }
    });
  });

module.exports = router;
