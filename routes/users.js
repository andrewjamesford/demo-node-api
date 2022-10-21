const express = require("express");
const router = express.Router();
const usersRepository = require("../repository/users");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const usersData = await usersRepository.getUsers();
    res.status(200).json(usersData);
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;
