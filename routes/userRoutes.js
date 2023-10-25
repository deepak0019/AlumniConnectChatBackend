const express = require("express")
const router = express.Router()
const {registerUser,authUser,allUsers} = require('../controller/userController')
const followUser = require('../controller/followUser')
const {protect} = require('../middleware/authMiddleware')

router.route('/').post(registerUser).get(protect,allUsers)
router.route('/follow').post(followUser)

module.exports = router;