const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/signup", UserController.signup);
router.post("/signin", UserController.signin);
router.get("/users", UserController.getAllUsers);
router.delete("/users/:userId", UserController.deleteUser);

module.exports = router;

