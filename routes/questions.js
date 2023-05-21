const express = require("express")
const router = express.Router();
const { saveQuestion, getQuestions } = require("../controller/questions")

router.post("/saveQuestion", saveQuestion);
router.get("/getAllQuestions", getQuestions);

module.exports = router
