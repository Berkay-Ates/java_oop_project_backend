const User = require("../models/auth")
const { StatusCodes } = require('http-status-codes')
const { BadRequest, Unauthenticated } = require("../errors");

const register = async (req, res) => {
    const user = await User.create({ ...req.body });
    console.log(req.body);
    res.status(StatusCodes.CREATED).json({ ...{ name: user.name, password: user.password, userType: user.userType } })
}

const login = async (req, res) => {
    console.log(req.body);
    const { name, password } = req.body  //* auth middleware'i tarafından set edilmişti zaten 

    if (!name || !password) {
        throw new BadRequest("name and password have to be provided")
    }
    const user = await User.findOne({ name })
    if (!user) {
        throw new Unauthenticated("invalid credantials plase provide exist user info")
    }
    const dbPassword = user.password;
    if (password != dbPassword) {
        throw new Unauthenticated("invalid credentials")
    }
    res.status(StatusCodes.OK).json({ ...{ name: user.name, password: password, userType: userType } })
}

module.exports = {
    register,
    login
}
