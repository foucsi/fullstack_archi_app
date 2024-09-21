const {User} = require("../../models/userModel")
const {asyncHandler} = require("express-async-handler")
const {sendResponse} = require ("../../utils/sendResponse")

/**
 * Récupère tous les utilisateurs.
 * @route GET /api/users
 * @access Private/Admin
 */

exports.getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find().select("-password")
    if(users.length === 0) {
        const err = new Error("No users found")
        return next(err)
    }
    sendResponse(res, 200, {users})
})