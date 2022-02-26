const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  jwtVerify,
} = require("../controllers/teachers");

router.post("/signup", signup);
router.post("/login", login);
router.get("/jwtVerify", jwtVerify);

module.exports = router;