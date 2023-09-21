var express = require('express');
var router = express.Router();
var user = require("../../Controller/Auth/user");

router.get("/get", user.getOne)
// router.post("/user/login", user.userLogin)
// router.put("/user/profile-update/:Id", user.userProfileUpdate)

module.exports = router;