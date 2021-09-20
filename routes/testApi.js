const express = require("express");
const router = express.Router();


router.all("/",function(req,res){
    res.status(200).json({
        message:"Welcome To POC for Error Handel Example"
    })
})

module.exports = router;