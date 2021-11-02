var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 2 })
      .withMessage("name should be at least 2 char because we have om"),
    check("email").isEmail().withMessage("email is required"),
    check("password")
      .isLength({
        min: 3,
      })
      .withMessage("password should be at least 3 char"),
  ],
  signup
);
router.get("/signout", signout);

module.exports = router;
