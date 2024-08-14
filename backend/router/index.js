const express = require("express");
const jokeRouter = require("./joke");

const router = express.Router();

router.use("/joke", jokeRouter);

module.exports = router;
