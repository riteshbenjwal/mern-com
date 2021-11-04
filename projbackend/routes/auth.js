var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

// Sign Up Route

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
      .withMessage(" should be at least 3 char"),
  ],
  signup
);

//Sign in Route

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("email is required"),
    check("password")
      .isLength({
        min: 3,
      })
      .withMessage("password field is required"),
  ],
  signin
);

router.get("/signout", signout);

router.get('/testroute', isSignedIn, (req, res)=>{
  res.send("A protected route");
})

module.exports = router;
