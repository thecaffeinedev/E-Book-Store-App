const express = require("express");
const router = express.Router();

const {
    getUserById,
    getUser,
    updateUser,
  } = require("../controllers/user");

router.param("userId", getUserById);

router.get("/user/:userId", getUser);

module.exports = router;