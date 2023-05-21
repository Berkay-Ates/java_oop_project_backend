const User = require('../models/auth');
const Question = require('../models/questions');

const { StatusCodes } = require('http-status-codes')
const { BadRequest } = require("../errors");


const saveQuestion = async (req, res) => {
    const { a, b } = req.body
    const isExists = await Question.find({ a: req.body.a, b: req.body.b });
    console.log(isExists);
    if (isExists.length != 0) {
        throw new BadRequest("this questions already defined in the db");
    }
    const question = await Question.create({ a: a, b: b });
    res.status(StatusCodes.CREATED).json({ a: question.a, b: question.b })
}

const getQuestions = async (req, res) => {
    const questions = await Question.find({});
    res.status(StatusCodes.OK).json({ questions: questions })
}

module.exports = { saveQuestion, getQuestions };

