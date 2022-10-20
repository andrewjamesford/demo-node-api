var express = require("express");
var router = express.Router();
const postsRepository = require("../repository/posts");

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const postsData = await postsRepository.getPosts();
    res.status(200).json(postsData);
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;
