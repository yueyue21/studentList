const express = require("express");
const router = express.Router();
const home = require("./home");
const student = require("./student");

router.use((req, res, next) => {
  console.log("this is an api request");
  next();
});
router.use(home);
router.use(student);

module.exports = router;
