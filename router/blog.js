const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const router = express.Router();
const blogs = require("../blogs/data");

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/blogs", (req, res) => {
  res.render("blogs", {
    blog: blogs,
  });
});
router.get("/blogPage/:slug", (req, res) => {
  myBlogs = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  res.render("blogPage", {
    title: myBlogs[0].title,
    content: myBlogs[0].content,
    img:myBlogs[0].img
  });
});

module.exports = router;
