const asyncHandler = require("express-async-handler");


const followUser = asyncHandler(async (req, res) => {
    try {
        console.log("Follow User");
        return res.status(200).json({
            status : "ok"
        })
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  });
  
  module.exports = followUser