const AppError = require("../middelwares/errorModule");



exports.cutomeControllerExample = async(req,res)=>{
try {
    console.log('Inside the Custome Controller');
    throw new AppError("this is custome Error",502)
    res.json({
        msg:"This is custome Controller"
    })

    
} catch (error) {
  console.log("Error Block");
  res.status(error.statusCode).json({
      message:error.message
  })  
}


}