const User = require("../../models/userModel")
const asyncHandler = require("express-async-handler")

exports.getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find()
    if(users.length === 0) {
        const err = new Error("No users found")
        return next(err)
    }
    return res.status(200).json({success:true, users})
})